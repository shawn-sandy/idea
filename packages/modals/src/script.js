const jsModal = document.querySelectorAll(".js-button-modal");

jsModal.forEach(button => {
  console.log(button);
  button.addEventListener("click", e => {
    console.log(e.target.dataset.target);
    location.hash = e.target.dataset.target;
  });
});
