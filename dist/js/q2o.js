"use strict";require("core-js/modules/web.dom.iterable"),require("core-js/modules/es6.array.iterator"),require("core-js/modules/es6.promise"),require("core-js/modules/es7.promise.finally");var qPanel=document.querySelector(".js-qpanel"),fields=qPanel.querySelectorAll("input, textarea"),editButton=document.querySelector(".js-edit-button");fields.forEach(function(e){e.setAttribute("readonly",!0)}),editButton.addEventListener("mouseover",function(e){fields.forEach(function(e){e.classList.toggle("js-input")})}),editButton.addEventListener("click",function(e){fields.forEach(function(e){e.removeAttribute("readonly"),e.classList.add("edit-mode"),editButton.classList.add("btn-sg-secondary")}),e.target.textContent="Save Contact Info"});