module.exports = {
  swatch: (content, color, name) => {
    const displayName = name.replace("-", " ");
    return `
    <div class="mix-swatch>
    <div class"mix-swatch:color" style="background-color: ${color}"></div>
    <div class="mix-swatch-label">
    <span class="mix-swatch-name" style="${color}">
    ${displayName} - ${color}
    </span>
    </div>
    <p class="mix-swatch-content">
    ${content}
    </p>
    </div>
    `;
  },
  type: (content, size, name, comment) => {
    const displayName = name.replace("-", " ");
    return `
        <p class="mix-type" style="font-size: ${size}">
        <span class="text-uppercase">${displayName}</span>
        <span class="font-italic">( ${comment} )</span>
        </p>
        ${content}
    `;
  }
};
