module.exports = {
  swatch: (content, color, name) => {
    const displayName = name.replace("-", " ");
    return `
    <div class="mix-swatch ${color}" style="height: 50px; width: 100%"></div>
    <div class="mix-swatch-content" style="padding: 5px">
    ${content}
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
