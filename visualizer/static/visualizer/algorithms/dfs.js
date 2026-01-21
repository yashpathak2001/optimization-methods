// Depth-First Search (DFS) Algorithm Implementation
import { idToLabel } from '../utils/helpers.js';

export function createDFSSteps(source, computeGraphFromState) {
  const { nodes, adj } = computeGraphFromState();
  const dist = new Map();
  const parent = new Map();
  const visited = new Set();

  for (const n of nodes) {
    dist.set(n.id, Infinity);
    parent.set(n.id, null);
  }
  dist.set(source, 0);

  const out = [];
  out.push({
    label: "Initialization",
    description: `Initialize all nodes as unvisited. Start DFS from source ${idToLabel(
      source
    )}.`,
    dist: new Map(dist),
    parent: new Map(parent),
    highlightEdge: null,
    highlightNode: source,
    codeKey: "dfs_init",
  });

  const stack = [source];

  while (stack.length > 0) {
    const u = stack.pop();
    if (visited.has(u)) continue;
    visited.add(u);

    out.push({
      label: `Visit ${idToLabel(u)}`,
      description: `Pop node ${idToLabel(
        u
      )} from the stack and mark it as visited.`,
      dist: new Map(dist),
      parent: new Map(parent),
      highlightEdge: null,
      highlightNode: u,
      codeKey: "dfs_visit",
      u,
    });

    const neighbors = (adj.get(u) || []).slice().reverse();
    for (const { to: v } of neighbors) {
      if (visited.has(v)) continue;
      const old = dist.get(v);
      const cand = dist.get(u) + 1;
      const willRelax = cand < old;

      const step = {
        label: `Explore edge (${idToLabel(u)} → ${idToLabel(v)})`,
        description: willRelax
          ? `First time visiting ${idToLabel(
              v
            )} from ${idToLabel(
              u
            )}. Set parent and push ${idToLabel(v)} on the stack.`
          : `Edge ${idToLabel(
              u
            )}→${idToLabel(v)} leads to an already discovered node.`,
        dist: new Map(dist),
        parent: new Map(parent),
        highlightEdge: null,
        highlightNode: v,
        codeKey: "dfs_relax",
        relaxedNode: willRelax ? v : null,
        u,
        v,
      };

      if (willRelax) {
        dist.set(v, cand);
        parent.set(v, u);
        stack.push(v);
        step.dist = new Map(dist);
        step.parent = new Map(parent);
      }
      out.push(step);
    }
  }

  out.push({
    label: "Done",
    description:
      "DFS is complete. All nodes reachable from the source belong to the DFS tree defined by the parent pointers.",
    dist: new Map(dist),
    parent: new Map(parent),
    highlightEdge: null,
    highlightNode: null,
    codeKey: "dfs_done",
  });

  return out;
}
