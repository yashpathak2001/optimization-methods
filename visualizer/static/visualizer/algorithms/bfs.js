// Breadth-First Search (BFS) Algorithm Implementation
import { idToLabel } from '../utils/helpers.js';

export function createBFSSteps(source, computeGraphFromState) {
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
    description: `Initialize all distances to ∞ except source ${idToLabel(
      source
    )}, which is 0. BFS treats all edges as weight 1 (number of hops).`,
    dist: new Map(dist),
    parent: new Map(parent),
    highlightEdge: null,
    highlightNode: source,
    codeKey: "bfs_init",
  });

  const queue = [source];
  visited.add(source);

  while (queue.length > 0) {
    const u = queue.shift();
    out.push({
      label: `Dequeue ${idToLabel(u)}`,
      description: `Remove node ${idToLabel(
        u
      )} from the front of the queue and explore its neighbors.`,
      dist: new Map(dist),
      parent: new Map(parent),
      highlightEdge: null,
      highlightNode: u,
      codeKey: "bfs_pop",
      u,
    });

    const neighbors = adj.get(u) || [];
    for (const { to: v } of neighbors) {
      const old = dist.get(v);
      const cand = dist.get(u) + 1;
      const willRelax = cand < old;
      const alreadyVisited = visited.has(v);

      const step = {
        label: `Explore edge (${idToLabel(u)} → ${idToLabel(v)})`,
        description: alreadyVisited
          ? `Neighbor ${idToLabel(
              v
            )} already discovered earlier, skip updating.`
          : willRelax
          ? `First time reaching ${idToLabel(
              v
            )}: set parent[${idToLabel(
              v
            )}] = ${idToLabel(u)} and distance = ${
              dist.get(u) + 1
            } (number of hops).`
          : `Checking neighbor ${idToLabel(
              v
            )}: no better distance found via ${idToLabel(u)}.`,
        dist: new Map(dist),
        parent: new Map(parent),
        highlightEdge: null,
        highlightNode: v,
        codeKey: "bfs_relax",
        relaxedNode: !alreadyVisited && willRelax ? v : null,
        u,
        v,
      };

      if (!alreadyVisited && willRelax) {
        dist.set(v, cand);
        parent.set(v, u);
        visited.add(v);
        queue.push(v);
        step.dist = new Map(dist);
        step.parent = new Map(parent);
      }
      out.push(step);
    }
  }

  out.push({
    label: "Done",
    description:
      "BFS is complete. All nodes reachable from the source have their minimum-hop distance and a parent in the BFS tree.",
    dist: new Map(dist),
    parent: new Map(parent),
    highlightEdge: null,
    highlightNode: null,
    codeKey: "bfs_done",
  });

  return out;
}
