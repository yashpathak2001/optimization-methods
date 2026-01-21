// Prim's Algorithm Implementation
import { idToLabel, formatDist } from '../utils/helpers.js';

export function createPrimSteps(source, computeGraphFromState) {
  const { nodes, edges } = computeGraphFromState();
  const dist = new Map(); // Minimum edge weight to connect to MST
  const parent = new Map();
  const inMST = new Set();
  
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
    description: `Initialize all edge weights to ∞ except source ${idToLabel(source)}, which is 0. Start building MST from source.`,
    dist: new Map(dist),
    parent: new Map(parent),
    highlightEdge: null,
    highlightNode: source,
    codeKey: "prim_init",
  });
  
  // Priority queue simulation (using array for simplicity)
  const pq = nodes.map(n => ({ id: n.id, dist: dist.get(n.id) }));
  
  while (pq.length > 0) {
    // Extract minimum
    pq.sort((a, b) => dist.get(a.id) - dist.get(b.id));
    const u = pq.shift();
    
    if (inMST.has(u.id)) continue;
    if (dist.get(u.id) === Infinity) break;
    
    inMST.add(u.id);
    
    out.push({
      label: `Add to MST: ${idToLabel(u.id)}`,
      description: `Adding node ${idToLabel(u.id)} to MST with minimum edge weight ${formatDist(dist.get(u.id))}.`,
      dist: new Map(dist),
      parent: new Map(parent),
      highlightEdge: null,
      highlightNode: u.id,
      codeKey: "prim_extract",
      u: u.id,
    });
    
    // Update neighbors (find minimum edge weights)
    for (const e of flatEdges.filter(e => 
      (e.from === u.id && !inMST.has(e.to)) || 
      (e.to === u.id && !inMST.has(e.from))
    )) {
      const v = e.from === u.id ? e.to : e.from;
      if (inMST.has(v)) continue;
      
      const old = dist.get(v);
      const cand = e.w;
      const willUpdate = cand < old;
      
      const step = {
        label: `Check edge (${idToLabel(u.id)} ↔ ${idToLabel(v)})`,
        description: willUpdate
          ? `Updating minimum edge weight to ${idToLabel(v)}: ${formatDist(old)} → ${formatDist(cand)}.`
          : `Edge ${idToLabel(u.id)}↔${idToLabel(v)} weight ${formatDist(cand)} is not better than current ${formatDist(old)}.`,
        dist: new Map(dist),
        parent: new Map(parent),
        highlightEdge: e.id,
        highlightNode: v,
        codeKey: "prim_relax",
        relaxedNode: willUpdate ? v : null,
        u: u.id,
        v: v,
        w: e.w,
      };
      
      if (willUpdate) {
        dist.set(v, cand);
        parent.set(v, u.id);
        step.dist = new Map(dist);
        step.parent = new Map(parent);
      }
      out.push(step);
    }
  }
  
  out.push({
    label: "Done",
    description: "Minimum Spanning Tree constructed.",
    dist: new Map(dist),
    parent: new Map(parent),
    highlightEdge: null,
    highlightNode: null,
    codeKey: "prim_done",
  });
  
  return out;
}
