"use strict";
module.exports = {
  button: (content, class_names, attrs) => {
    return `<button class="${class_names || ""}" type="${attrs || ""}">
    ${content || "Click Here"}
    </button>`;
  },

  link: (content, link, class_names, attrs) => {
    return `<a href="${link}" styles="${class_names}" ${attrs}>${content}</a>`

  },

  title: (content, class_names, attrs) => {
    return `<div class="title-elm ${class_names}" ${attrs}>${content}</div>`
  },

  label: (content, label_for, class_names, attrs) => {
    return `<label for="${label_for}" class="${class_names}" ${attrs}>${content}</label>`
  },

  input: (content, value = "", id, type="text", class_names, attrs ) => {
    return `<input value="${value}" class="${class_names}" id="${id}" name="${id}" type="${type}" placeholder="Enter ${content}" ${attrs}>`
  },

  textarea: (content, class_names, attrs) => {
    return `<textarea class="${class_names}" ${attrs} >${content || ''}</textarea>`
  },

  select: () =>{
    return ``
  },

  selectOpt: () => {
    return ``
  }
};
