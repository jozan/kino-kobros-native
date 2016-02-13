export function trimTitle(title) {
  // "Tit(l)e (12)" -> "Ti(t)le"
  return title.replace(/\(([^)]+)\)$/g, '').trim();
}
