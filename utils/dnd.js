/**
 * Attach Dropzone Behavior for Drag & Drop interaction
 * @todo: now
 * @example:
 *    <div use:dnd={$$options}>...</div>
 *
 * @param {HTMLElement} node - DOM element
 * @param {object} [options] - drag & drop configuration
 * @returns {{update(*): void, destroy(): void}}
 */

export function dnd (node, options) {
  return {
    update (options) {
    },
    destroy () {
    },
  }
}
