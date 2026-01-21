export const ALGORITHM_INFO = 
  {
    relaxation: {
      description: "Single-Source Shortest Path using relaxation technique. Iteratively relaxes all edges (V-1) times to find shortest paths from a source node.",
      useCases: "• Works for graphs with negative edges\n• Simple to understand\n• Good for small graphs\n• Can detect some negative cycles",
      differences: "Uses a fixed number of iterations (V-1) regardless of convergence."
    },
    "bellman-ford": {
      description: "Bellman-Ford algorithm finds shortest paths from a source to all nodes, even with negative edge weights. Detects negative cycles.",
      useCases: "• Graphs with negative edge weights\n• Detecting negative cycles\n• When Dijkstra's cannot be used\n• Network routing protocols",
      differences: "Always performs V-1 passes, then checks for negative cycles in a final pass."
    },
    "bellman-ford-fifo": {
      description: "Bellman-Ford optimized with FIFO queue. Only processes nodes whose distances were updated, potentially faster than standard Bellman-Ford.",
      useCases: "• Graphs with negative edges\n• When most nodes don't need updates\n• Faster than standard Bellman-Ford in practice\n• Network routing",
      differences: "Uses a queue to only process updated nodes, reducing unnecessary work. Still detects negative cycles."
    },
    dijkstra: {
      description: "Dijkstra's algorithm finds shortest paths from a source to all nodes using a greedy approach with a priority queue. Requires non-negative edge weights.",
      useCases: "• Graphs with non-negative edge weights\n• Faster than Bellman-Ford for dense graphs\n• GPS navigation systems\n• Network routing (OSPF, IS-IS)\n• Social network analysis",
      differences: "Uses a priority queue to always process the closest unvisited node first. Greedy approach ensures optimality for non-negative weights. Time complexity O(V log V + E) with binary heap."
    },
    prim: {
      description: "Prim's algorithm constructs a Minimum Spanning Tree (MST) by greedily adding the minimum-weight edge that connects a node in the MST to a node outside it. Works on connected, undirected graphs.",
      useCases: "• Finding minimum spanning trees\n• Network design (minimum cost connections)\n• Cluster analysis\n• Approximation algorithms\n• Circuit design",
      differences: "Similar to Dijkstra's but builds an MST instead of shortest paths. Always picks the minimum-weight edge connecting MST to non-MST nodes. Time complexity O(V log V + E) with binary heap."
    },
    bfs: {
      description: "Breadth-First Search (BFS) explores the graph level by level from a source node, discovering all nodes at distance 1, then distance 2, and so on.",
      useCases: "• Shortest paths in unweighted graphs\n• Level-order traversal of trees\n• Finding connected components\n• Social network \"degrees of separation\" queries",
      differences: "Uses a FIFO queue and always expands the current frontier before moving to the next. For unweighted graphs, BFS gives true shortest path trees in O(V + E)."
    },
    dfs: {
      description: "Depth-First Search (DFS) explores as far as possible along each branch before backtracking, building a depth-first spanning tree.",
      useCases: "• Detecting cycles\n• Topological sorting (on DAGs)\n• Finding connected components\n• Exploring and generating mazes/trees",
      differences: "Uses an implicit or explicit stack instead of a queue. DFS follows one path deeply before exploring siblings, producing a DFS tree that can differ significantly from BFS or shortest-path trees."
    },
  };
