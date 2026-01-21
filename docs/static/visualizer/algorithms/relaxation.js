// Relaxation Algorithm Implementation
import { idToLabel, formatDist } from '../utils/helpers.js';

export function createRelaxationSteps(source, variant, computeGraphFromState) {
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
  const totalPasses =
    variant === "relaxation" ? nodes.length - 1 : nodes.length * 2;
  const out = [];

  out.push({
    label: "Initialization",
    description: `Initialize all distances to ∞ except source ${idToLabel(
      source
    )}, which is 0.`,
    dist: new Map(dist),
    parent: new Map(parent),
    highlightEdge: null,
    highlightNode: source,
    codeKey: "init",
  });

  for (let i = 0; i < totalPasses; i++) {
    for (const e of flatEdges) {
      const { from, to, w } = e;
      const old = dist.get(to);
      const cand = dist.get(from) + w;
      const willRelax = cand < old;

      const step = {
        label: `Relax edge (${idToLabel(from)} → ${idToLabel(to)})`,
        description: willRelax
          ? `Relaxing edge ${idToLabel(
              from
            )}→${idToLabel(to)}: updating d[${idToLabel(
              to
            )}] from ${formatDist(old)} to ${formatDist(cand)}.`
          : `Checking edge ${idToLabel(
              from
            )}→${idToLabel(
              to
            )}: no update since current distance is better.`,
        dist: new Map(dist),
        parent: new Map(parent),
        highlightEdge: e.id,
        highlightNode: to,
        codeKey: "relax",
        relaxedNode: willRelax ? to : null,
        u: from,
        v: to,
        w: w,
      };

      if (willRelax) {
        dist.set(to, cand);
        parent.set(to, from);
        step.dist = new Map(dist);
        step.parent = new Map(parent);
      }
      out.push(step);
    }
  }
  return out;
}
