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

const CALLOUT_TYPES = {
  'key-concept': { label: 'Key Concept', icon: '💡' },
  'warning':     { label: 'Safety Warning', icon: '⚠️' },
  'pro-tip':     { label: 'Pro Tip', icon: '🔧' },
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
