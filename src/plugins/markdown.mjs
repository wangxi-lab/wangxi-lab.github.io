/** Article pages already render one h1. Shift markdown headings down so the body starts at h2. */
export function remarkShiftHeadings() {
  const walk = (node) => {
    if (!node || typeof node !== 'object') return;
    if (node.type === 'heading' && node.depth < 6) node.depth += 1;
    if (Array.isArray(node.children)) node.children.forEach(walk);
  };
  return (tree) => walk(tree);
}

/** Drop Shiki's inline gray background so the lab --code token can paint the block. */
export function rehypeLabCode() {
  const walk = (node) => {
    if (!node || typeof node !== 'object') return;
    if (node.type === 'element' && (node.tagName === 'pre' || node.tagName === 'code')) {
      const properties = node.properties ?? {};
      const style = properties.style;
      const text = Array.isArray(style) ? style.join(';') : style;
      if (typeof text === 'string') {
        const next = text.replace(/background(?:-color)?\s*:\s*[^;]+;?/gi, '').trim();
        if (next) properties.style = next;
        else delete properties.style;
        node.properties = properties;
      }
    }
    if (Array.isArray(node.children)) node.children.forEach(walk);
  };
  return (tree) => walk(tree);
}
