// Graph state management and utilities

export function createGraphStateManager(nodeData, edgeData) {
  function computeGraphFromState() {
    const nodes = nodeData.get();
    const edges = edgeData.get();
    const adj = new Map();
    for (const n of nodes) {
      adj.set(n.id, []);
    }
    for (const e of edges) {
      adj.get(e.from).push({ to: e.to, w: e.weight ?? parseFloat(e.label) });
    }
    return { nodes, edges, adj };
  }

  return {
    computeGraphFromState
  };
}
