"use strict";
module.exports = {
  button: (content, class_names, attrs) => {
    return `<button class="${class_names || ""}" type="${attrs || ""}">
    ${content || "Click Here"}
    </button>`;
  },

  link: (content, link, class_names, attrs) => {
    return `<a href="${link}" class="${class_names}" ${attrs}>${content}</a>`;
  },

  title: (content, class_names, attrs) => {
    return `<div class="${class_names}" ${attrs}>${content}</div>`;
  },

  list_ul: (content, class_names, attrs) => {
    return `<ul class="${class_names} ${attrs}>${content}</ul>`;
  },

  list_li: (content, class_names, attrs) => {
    return `<li class="${class_names} ${attrs}>${content}</li>`;
  },

  blockquote: (content, class_names, attrs) => {
    return `<blockquote class="${class_names} ${attrs}>${content}</blockquote>`;
  }
};
