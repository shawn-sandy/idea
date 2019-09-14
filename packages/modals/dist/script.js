const jsModals = document.querySelectorAll(".js-modal-css");
var jsModal = Array.prototype.slice.call(jsModals);
jsModal.forEach(button => {
  // console.log(button);
  button.addEventListener("click", e => {
    // console.log(e.target.dataset.target);
    location.hash = e.target.dataset.target;
  });
});
