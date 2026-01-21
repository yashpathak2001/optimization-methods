// Utility helper functions

export function idToLabel(id) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let n = id;
  let result = "";
  do {
    result = alphabet[n % 26] + result;
    n = Math.floor(n / 26) - 1;
  } while (n >= 0);
  return result;
}

export function nodeBaseColor(id) {
  const palette = [
    "#38bdf8",
    "#a855f7",
    "#f97316",
    "#22c55e",
    "#eab308",
    "#6366f1",
    "#ec4899",
  ];
  return palette[id % palette.length];
}

export function formatDist(d) {
  return d === Infinity ? "∞" : d.toFixed(1).replace(/\.0$/, "");
}

export function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
