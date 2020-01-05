"use strict";
module.exports = {
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

};
