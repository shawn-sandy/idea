// eleventy plugin

const mix = require("./eleventy/shortcodes");

module.exports = (eleventy, options = {}) => {
  /**
   * Swatch
   **/
  eleventy.addPairedShortcode("Swatch", (content, color, name) => {
    return mix.swatch(content, color, name);
  });
};
