// Remark plugin: transforms ::: callout directives into styled HTML.
// Requires remark-directive to run BEFORE this plugin in the chain.
//
//   :::warning
//   Never wear gloves at the lathe.
//   :::
//
// becomes a <div class="callout callout-warning"> with an icon and content.

import { visit } from 'unist-util-visit';
import { h } from 'hastscript';

// Icons are drawn from the shop's own vocabulary rather than emoji: the GD&T
// datum-target circle, the ISO safety triangle, and a rhombic turning insert.
const svg = (body) =>
  `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" ` +
  `stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;

const CALLOUT_TYPES = {
  'key-concept': {
    label: 'Key concept',
    icon: svg('<circle cx="8" cy="8" r="6.4"/><path d="M1.6 8h12.8"/>'),
  },
  'warning': {
    label: 'Safety warning',
    icon: svg(
      '<path d="M8 1.9 15 14.1H1z"/><path d="M8 6.2v3.3"/>' +
        '<circle cx="8" cy="11.7" r="0.7" fill="currentColor" stroke="none"/>'
    ),
  },
  'pro-tip': {
    label: 'Pro tip',
    icon: svg('<path d="M8 1.8 14.2 8 8 14.2 1.8 8z"/><circle cx="8" cy="8" r="1.6"/>'),
  },
};

export default function remarkCallouts() {
  return (tree) => {
    visit(tree, 'containerDirective', (node) => {
      const info = CALLOUT_TYPES[node.name];
      if (!info) return; // not one of our callout types

      // Build the wrapper <div class="callout callout-{type}">
      const data = node.data || (node.data = {});
      const tagName = 'div';

      data.hName = tagName;
      data.hProperties = h(tagName, { class: `callout callout-${node.name}` }).properties;

      // Prepend icon + label as the first child
      node.children.unshift({
        type: 'paragraph',
        data: {
          hName: 'div',
          hProperties: { class: 'callout-header' },
        },
        children: [
          {
            type: 'html',
            value: `<span class="callout-icon" aria-hidden="true">${info.icon}</span><strong class="callout-label">${info.label}</strong>`,
          },
        ],
      });
    });
  };
}
