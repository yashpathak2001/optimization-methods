// Code Templates Index
// Exports all algorithm code templates in a unified structure

import { RELAXATION_TEMPLATES } from './relaxation.js';
import { BELLMAN_FORD_TEMPLATES } from './bellman_ford.js';
import { BELLMAN_FORD_FIFO_TEMPLATES } from './bellman_ford_fifo.js';
import { DIJKSTRA_TEMPLATES } from './dijkstra.js';
import { PRIM_TEMPLATES } from './prim.js';
import { BFS_TEMPLATES } from './bfs.js';
import { DFS_TEMPLATES } from './dfs.js';

// Reconstruct the original CODE_TEMPLATES structure: { language: { algorithm: [...] } }
const languages = ['cpp', 'c', 'java', 'python', 'rust', 'javascript', 'typescript', 'go', 'kotlin', 'swift', 'csharp', 'ruby', 'php', 'scala', 'haskell', 'ocaml', 'fsharp', 'dart', 'lua', 'perl', 'r', 'matlab', 'julia'];

export const CODE_TEMPLATES = {};

// Initialize structure
for (const lang of languages) {
  CODE_TEMPLATES[lang] = {};
}

// Map algorithm templates to the structure
const algorithmMap = {
  'relaxation': RELAXATION_TEMPLATES,
  'bellman-ford': BELLMAN_FORD_TEMPLATES,
  'bellman-ford-fifo': BELLMAN_FORD_FIFO_TEMPLATES,
  'dijkstra': DIJKSTRA_TEMPLATES,
  'prim': PRIM_TEMPLATES,
  'bfs': BFS_TEMPLATES,
  'dfs': DFS_TEMPLATES,
};

// Populate CODE_TEMPLATES
for (const [algo, templates] of Object.entries(algorithmMap)) {
  for (const lang of languages) {
    if (templates[lang]) {
      CODE_TEMPLATES[lang][algo] = templates[lang];
    }
  }
}
