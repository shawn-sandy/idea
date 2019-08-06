module.exports = {
  swatch: (color = "#000000", classes = "p-5 rounded shadow-lg") => {
    return `<div class="${classes}"
    style="background-color: ${color}"
  ></div>
  `;
  },
  colorSwatch: (content, color, name) => {
    return `
    <div class="mix-swatch>
    <div class"mix-swatch:color" style="background-color: ${color}"></div>
    <div class="mix-swatch-label">
    <span class="mix-swatch-name">${name} </span> ${color}
    </div>
    <p class="mix-swatch-content">
    ${content}
    </p>
    </div>
    `;
  }
};
