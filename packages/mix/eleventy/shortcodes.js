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
  copyElement: (content, target = "#mx-clip", classes) => {
    return `<button class="mix-clipboard ${classes}" data-clipboard-target="${target}">${content}</button>
    `;
  },
  copyString: (content, string = "You copied a String...", classes) => {
    return `
    <button class="mix-clipboard ${classes}"
          data-clipboard-text="${string}">${content || ""}</button>
    `;
  }
};
