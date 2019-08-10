module.exports = {
  swatch: (content, color, name) => {
    return `
    <div class="mix-swatch>
    <div class"mix-swatch:color" style="background-color: ${color}"></div>
    <div class="mix-swatch-label">
    <span class="mix-swatch-name" style="${color}">${name} - ${color}</span>
    </div>
    <p class="mix-swatch-content">
    ${content}
    </p>
    </div>
    `;
  },
  copy: (content, size, name, comment) => {
    return `<p class="mix-type" style="font-size: ${size}">
              <span class="text-uppercase">${name}</span>
              <span class="font-italic">( ${comment} )</span>
            </p>
            <p class="mix-type" style="font-size: ${size}">
              ${content}
            </p>
    `;
  },
  headers: (content, size, name) => {
    return `<header class="title" style="font-size: ${size}">
      </header>
        <span class="font-italic">( {{ val.comment }} )</span>
      </header>
    `;
  }
};
