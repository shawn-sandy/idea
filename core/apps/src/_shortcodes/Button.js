module.exports = (name, classes, attributes) => {
  return `
  <button class="${name || null} button ${classes}" ${attributes || null}>
${name || 'Click Here'}
  </button>
  `
}
