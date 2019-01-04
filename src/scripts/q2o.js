var qPanel = document.querySelector(".js-qpanel");
var fields = qPanel.querySelectorAll("input, textarea");
var editButton = document.querySelector(".js-edit-button");
console.log("panel", qPanel, fields);

fields.forEach(item => {
  item.setAttribute("readonly", true);
});

editButton.addEventListener("mouseover", e => {
  // console.log(e, fields.classList);
  fields.forEach(item => {
    // item.removeAttribute('readonly')
    item.classList.toggle("js-input");
  });
});

editButton.addEventListener("click", e => {
  // console.log(e, fields.classList);
  fields.forEach(item => {
    item.removeAttribute("readonly");
    item.classList.add("edit-mode");
    editButton.classList.add("btn-sg-secondary");
  });
  e.target.textContent = "Save Contact Info";
});
