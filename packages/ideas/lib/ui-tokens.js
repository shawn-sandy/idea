module.exports = {
  swatch: (color = "#000000", classes = "p-5 rounded shadow-lg") => {
    return `<div class="${classes}"
    style="background-color: ${color}"
  ></div>
  `;
  }
};
