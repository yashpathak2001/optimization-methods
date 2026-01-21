// Dijkstra's Algorithm Implementation
import { idToLabel, formatDist } from '../utils/helpers.js';

export function createDijkstraSteps(source, computeGraphFromState) {
  const { nodes, edges } = computeGraphFromState();
  const dist = new Map();
  const parent = new Map();
  const visited = new Set();
  
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
  
  // Check for negative edges
  const hasNegative = flatEdges.some(e => e.w < 0);
  if (hasNegative) {
    return [{
      label: "Error: Negative edges detected",
      description: "Dijkstra's algorithm requires non-negative edge weights.",
      dist: new Map(dist),
      parent: new Map(parent),
      highlightEdge: null,
      highlightNode: null,
      codeKey: "error",
    }];
  }
  
  const out = [];
  out.push({
    label: "Initialization",
    description: `Initialize all distances to ∞ except source ${idToLabel(source)}, which is 0.`,
    dist: new Map(dist),
    parent: new Map(parent),
    highlightEdge: null,
    highlightNode: source,
    codeKey: "dijkstra_init",
  });
  
  // Priority queue simulation (using array for simplicity)
  const pq = nodes.map(n => ({ id: n.id, dist: dist.get(n.id) }));
  
  while (pq.length > 0) {
    // Extract minimum
    pq.sort((a, b) => dist.get(a.id) - dist.get(b.id));
    const u = pq.shift();
    
    if (visited.has(u.id)) continue;
    if (dist.get(u.id) === Infinity) break;
    
    visited.add(u.id);
    
    out.push({
      label: `Extract minimum: ${idToLabel(u.id)}`,
      description: `Selecting node ${idToLabel(u.id)} with distance ${formatDist(dist.get(u.id))}.`,
      dist: new Map(dist),
      parent: new Map(parent),
      highlightEdge: null,
      highlightNode: u.id,
      codeKey: "dijkstra_extract",
      u: u.id,
    });
    
    // Relax neighbors
    for (const e of flatEdges.filter(e => e.from === u.id && !visited.has(e.to))) {
      const old = dist.get(e.to);
      const cand = dist.get(u.id) + e.w;
      const willRelax = cand < old;
      
      const step = {
        label: `Relax edge (${idToLabel(u.id)} → ${idToLabel(e.to)})`,
        description: willRelax
          ? `Relaxing edge ${idToLabel(u.id)}→${idToLabel(e.to)}: updating d[${idToLabel(e.to)}] from ${formatDist(old)} to ${formatDist(cand)}.`
          : `Checking edge ${idToLabel(u.id)}→${idToLabel(e.to)}: no update.`,
        dist: new Map(dist),
        parent: new Map(parent),
        highlightEdge: e.id,
        highlightNode: e.to,
        codeKey: "dijkstra_relax",
        relaxedNode: willRelax ? e.to : null,
        u: u.id,
        v: e.to,
        w: e.w,
      };
      
      if (willRelax) {
        dist.set(e.to, cand);
        parent.set(e.to, u.id);
        step.dist = new Map(dist);
        step.parent = new Map(parent);
      }
      out.push(step);
    }
  }
  
  out.push({
    label: "Done",
    description: "All reachable nodes processed.",
    dist: new Map(dist),
    parent: new Map(parent),
    highlightEdge: null,
    highlightNode: null,
    codeKey: "dijkstra_done",
  });
  
  return out;
}
