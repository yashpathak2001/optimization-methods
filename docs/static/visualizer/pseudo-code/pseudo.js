export const PSEUDO_TEMPLATES = 
  {
    relaxation: [
      { key: "init", text: "for each vertex v: d[v] = ∞, parent[v] = NIL" },
      { key: "init", text: "d[s] = 0" },
      {
        key: "relax_outer",
        text: "repeat |V|-1 times:",
      },
      {
        key: "relax",
        text: "  for each edge (u,v,w):",
      },
      {
        key: "relax",
        text: "      if d[u] + w < d[v]:",
      },
      {
        key: "relax",
        text: "          d[v] = d[u] + w; parent[v] = u",
      },
    ],
    "bellman-ford": [
      { key: "bf_init", text: "for each vertex v: d[v] = ∞, parent[v] = NIL" },
      { key: "bf_init", text: "d[s] = 0" },
      {
        key: "bf_outer",
        text: "for i from 1 to |V|-1:",
      },
      {
        key: "bf_relax",
        text: "  for each edge (u,v,w):",
      },
      {
        key: "bf_relax",
        text: "      if d[u] + w < d[v]:",
      },
      {
        key: "bf_relax",
        text: "          d[v] = d[u] + w; parent[v] = u",
      },
      {
        key: "bf_check",
        text: "for each edge (u,v,w):",
      },
      {
        key: "bf_neg_cycle",
        text: "  if d[u] + w < d[v]: report negative cycle",
      },
    ],
    "bellman-ford-fifo": [
      {
        key: "fifo_init",
        text: "for each vertex v: d[v] = ∞, parent[v] = NIL; d[s] = 0",
      },
      { key: "fifo_init", text: "initialize FIFO queue Q with only s" },
      { key: "fifo_pop", text: "while Q not empty:" },
      { key: "fifo_pop", text: "  u = pop_front(Q)" },
      {
        key: "fifo_relax",
        text: "  for each outgoing edge (u,v,w):",
      },
      {
        key: "fifo_relax",
        text: "      if d[u] + w < d[v]:",
      },
      {
        key: "fifo_relax",
        text: "          d[v] = d[u] + w; parent[v] = u",
      },
      {
        key: "fifo_relax",
        text: "          if v not in Q: push_back(Q, v)",
      },
    ],
    dijkstra: [
      { key: "dijkstra_init", text: "for each vertex v: d[v] = ∞, parent[v] = NIL" },
      { key: "dijkstra_init", text: "d[s] = 0" },
      { key: "dijkstra_init", text: "initialize priority queue PQ with (0, s)" },
      { key: "dijkstra_extract", text: "while PQ not empty:" },
      { key: "dijkstra_extract", text: "  (dist_u, u) = extract_min(PQ)" },
      { key: "dijkstra_extract", text: "  if dist_u > d[u]: continue  // skip outdated entry" },
      {
        key: "dijkstra_relax",
        text: "  for each outgoing edge (u,v,w):",
      },
      {
        key: "dijkstra_relax",
        text: "      if d[u] + w < d[v]:",
      },
      {
        key: "dijkstra_relax",
        text: "          d[v] = d[u] + w; parent[v] = u",
      },
      {
        key: "dijkstra_relax",
        text: "          insert(PQ, (d[v], v))",
      },
    ],
    prim: [
      { key: "prim_init", text: "for each vertex v: key[v] = ∞, parent[v] = NIL" },
      { key: "prim_init", text: "key[s] = 0  // Start from source s" },
      { key: "prim_init", text: "initialize priority queue PQ with all vertices" },
      { key: "prim_extract", text: "while PQ not empty:" },
      { key: "prim_extract", text: "  u = extract_min(PQ)  // Minimum key vertex" },
      { key: "prim_extract", text: "  add u to MST" },
      { key: "prim_relax", text: "  for each neighbor v of u:" },
      { key: "prim_relax", text: "      if v in PQ and weight(u,v) < key[v]:" },
      { key: "prim_relax", text: "          key[v] = weight(u,v); parent[v] = u" },
      { key: "prim_relax", text: "          update PQ with new key[v]" },
      { key: "prim_done", text: "// MST constructed" },
    ],
    bfs: [
      { key: "bfs_init", text: "for each vertex v: d[v] = ∞, parent[v] = NIL" },
      { key: "bfs_init", text: "d[s] = 0" },
      { key: "bfs_init", text: "initialize FIFO queue Q with only s" },
      { key: "bfs_pop", text: "while Q not empty:" },
      { key: "bfs_pop", text: "  u = pop_front(Q)" },
      {
        key: "bfs_relax",
        text: "  for each neighbor v of u:",
      },
      {
        key: "bfs_relax",
        text: "      if v not yet discovered:",
      },
      {
        key: "bfs_relax",
        text: "          d[v] = d[u] + 1; parent[v] = u; push_back(Q, v)",
      },
    ],
    dfs: [
      {
        key: "dfs_init",
        text: "for each vertex v: visited[v] = false, parent[v] = NIL",
      },
      { key: "dfs_init", text: "DFS(u):" },
      { key: "dfs_visit", text: "  visited[u] = true" },
      {
        key: "dfs_relax",
        text: "  for each neighbor v of u:",
      },
      {
        key: "dfs_relax",
        text: "      if not visited[v]:",
      },
      {
        key: "dfs_relax",
        text: "          parent[v] = u; DFS(v)",
      },
    ],
  };
