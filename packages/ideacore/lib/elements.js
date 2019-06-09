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

  textarea: (content, id, class_names, attrs) => {
    return `<textarea id="${id}" name="${id} class="${class_names}" ${attrs} >${content || ''}</textarea>`
  },

  select: (content, class_names, attrs) =>{
    return `<select class="${class_names} ${attrs}></select>`
  },

  selectOpt: (content, value) => {
    return `<option value="${value}>${content}</option>`
  },

  list_ul: (content, class_names, attrs) => {
    return `<ul class="${class_names} ${attrs}>${content}</ul>`
  },

  list_li: (content, class_names, attrs) => {
    return `<li class="${class_names} ${attrs}>${content}</li>`
  },

  blockquote: (content, class_names, attrs) => {
    return `<blockquote class="${class_names} ${attrs}>${content}</blockquote>`
  }
  

};
