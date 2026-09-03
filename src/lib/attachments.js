/**
 *
 * @param {HTMLElement} node
 */
function trapFocus(node) {
  const focusable = node.getElementsByTagName("button, input");
  console.log(focusable)
}

export default trapFocus;
