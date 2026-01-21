// Bellman-Ford Algorithm Implementation
import { idToLabel, formatDist } from '../utils/helpers.js';

export function createBellmanFordSteps(source, useFIFO, computeGraphFromState) {
  const { nodes, edges } = computeGraphFromState();
  const dist = new Map();
  const parent = new Map();
  for (const n of nodes) {
    dist.set(n.id, Infinity);
    parent.set(n.id, null);
  }
  dist.set(source, 0);

  const flatEdges = edges.map((e) => ({
    from: e.from,
    to: e.to,
    w: e.weight ?? parseFloat(e.label),
    id: e.id,
  }));

  const out = [];
  out.push({
    label: "Initialization",
    description:
      "Initialize distances and parents. Bellman-Ford can handle negative weights.",
    dist: new Map(dist),
    parent: new Map(parent),
    highlightEdge: null,
    highlightNode: source,
    codeKey: "bf_init",
  });

  if (!useFIFO) {
    const n = nodes.length;
    for (let i = 1; i <= n - 1; i++) {
      out.push({
        label: `Pass ${i}`,
        description: `Outer loop iteration ${i}/${n - 1}. Relax all edges.`,
        dist: new Map(dist),
        parent: new Map(parent),
        highlightEdge: null,
        highlightNode: null,
        codeKey: "bf_outer",
        iteration: i,
      });
      for (const e of flatEdges) {
        const old = dist.get(e.to);
        const cand = dist.get(e.from) + e.w;
        const willRelax = cand < old;
        const step = {
          label: `Relax edge (${idToLabel(e.from)} → ${idToLabel(e.to)})`,
          description: willRelax
            ? `Relaxing edge ${idToLabel(
                e.from
              )}→${idToLabel(e.to)}: updating d[${idToLabel(
                e.to
              )}] from ${formatDist(old)} to ${formatDist(cand)}.`
            : `Checking edge ${idToLabel(
                e.from
              )}→${idToLabel(e.to)}: no update.`,
          dist: new Map(dist),
          parent: new Map(parent),
          highlightEdge: e.id,
          highlightNode: e.to,
          codeKey: "bf_relax",
          relaxedNode: willRelax ? e.to : null,
          u: e.from,
          v: e.to,
          w: e.w,
        };
        if (willRelax) {
          dist.set(e.to, cand);
          parent.set(e.to, e.from);
          step.dist = new Map(dist);
          step.parent = new Map(parent);
        }
        out.push(step);
      }
    }
    out.push({
      label: "Negative cycle check",
      description:
        "Finally, check once more: if any edge can still be relaxed, there is a negative cycle.",
      dist: new Map(dist),
      parent: new Map(parent),
      highlightEdge: null,
      highlightNode: null,
      codeKey: "bf_check",
    });
    for (const e of flatEdges) {
      const old = dist.get(e.to);
      const cand = dist.get(e.from) + e.w;
      const relax = cand < old;
      out.push({
        label: `Check edge (${idToLabel(e.from)} → ${idToLabel(e.to)})`,
        description: relax
          ? `Edge ${idToLabel(
              e.from
            )}→${idToLabel(
              e.to
            )} can still be relaxed: negative cycle detected.`
          : `Edge ${idToLabel(
              e.from
            )}→${idToLabel(e.to)} cannot be further relaxed.`,
        dist: new Map(dist),
        parent: new Map(parent),
        highlightEdge: e.id,
        highlightNode: e.to,
        codeKey: relax ? "bf_neg_cycle" : "bf_check_edge",
        negCycle: relax,
        u: e.from,
        v: e.to,
        w: e.w,
      });
    }
  } else {
    // FIFO queue variant
    const queue = [source];
    const inQueue = new Set([source]);
    out.push({
      label: "Queue init",
      description: `Initialize queue with source node ${idToLabel(source)}.`,
      dist: new Map(dist),
      parent: new Map(parent),
      highlightEdge: null,
      highlightNode: source,
      codeKey: "fifo_init",
    });

    let relaxCount = 0;
    const maxRelax = nodes.length * edges.length + 10;

    while (queue.length && relaxCount < maxRelax) {
      const u = queue.shift();
      inQueue.delete(u);
      out.push({
        label: `Pop ${idToLabel(u)} from queue`,
        description: `Processing node ${idToLabel(
          u
        )} from the front of the queue.`,
        dist: new Map(dist),
        parent: new Map(parent),
        highlightEdge: null,
        highlightNode: u,
        codeKey: "fifo_pop",
        u: u,
      });

      for (const e of flatEdges.filter((e) => e.from === u)) {
        const old = dist.get(e.to);
        const cand = dist.get(e.from) + e.w;
        const willRelax = cand < old;
        const step = {
          label: `Try relax (${idToLabel(e.from)} → ${idToLabel(e.to)})`,
          description: willRelax
            ? `Relaxing ${idToLabel(
                e.from
              )}→${idToLabel(
                e.to
              )} and pushing ${idToLabel(
                e.to
              )} to queue (if not there).`
            : `No relaxation for ${idToLabel(
                e.from
              )}→${idToLabel(e.to)}.`,
          dist: new Map(dist),
          parent: new Map(parent),
          highlightEdge: e.id,
          highlightNode: e.to,
          codeKey: "fifo_relax",
          relaxedNode: willRelax ? e.to : null,
          queueSnapshot: [...queue],
          u: e.from,
          v: e.to,
          w: e.w,
        };
        if (willRelax) {
          dist.set(e.to, cand);
          parent.set(e.to, e.from);
          relaxCount++;
          if (!inQueue.has(e.to)) {
            queue.push(e.to);
            inQueue.add(e.to);
          }
          step.dist = new Map(dist);
          step.parent = new Map(parent);
          step.queueSnapshot = [...queue];
        }
        out.push(step);
      }
    }
    const hasNegCycle = relaxCount >= maxRelax;
    out.push({
      label: hasNegCycle ? "Negative cycle detected" : "Done",
      description: hasNegCycle
        ? "Too many relaxations detected: negative cycle reachable from source."
        : "Queue is empty, FIFO Bellman-Ford terminates.",
      dist: new Map(dist),
      parent: new Map(parent),
      highlightEdge: null,
      highlightNode: null,
      codeKey: hasNegCycle ? "fifo_neg_cycle" : "fifo_done",
      negCycle: hasNegCycle,
    });
    
    // Additional check: verify if any edge can still be relaxed
    if (!hasNegCycle) {
      out.push({
        label: "Negative cycle check",
        description: "Check if any edge can still be relaxed (negative cycle detection).",
        dist: new Map(dist),
        parent: new Map(parent),
        highlightEdge: null,
        highlightNode: null,
        codeKey: "fifo_check",
      });
      for (const e of flatEdges) {
        const old = dist.get(e.to);
        const cand = dist.get(e.from) + e.w;
        const relax = cand < old;
        out.push({
          label: `Check edge (${idToLabel(e.from)} → ${idToLabel(e.to)})`,
          description: relax
            ? `Edge ${idToLabel(
                e.from
              )}→${idToLabel(
                e.to
              )} can still be relaxed: negative cycle detected.`
            : `Edge ${idToLabel(
                e.from
              )}→${idToLabel(e.to)} cannot be further relaxed.`,
          dist: new Map(dist),
          parent: new Map(parent),
          highlightEdge: e.id,
          highlightNode: e.to,
          codeKey: relax ? "fifo_neg_cycle" : "fifo_check_edge",
          negCycle: relax,
          u: e.from,
          v: e.to,
          w: e.w,
        });
      }
    }
  }
  return out;
}
