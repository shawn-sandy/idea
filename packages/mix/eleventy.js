// eleventy plugin

const mix = require("./eleventy/shortcodes");

module.exports = (eleventy, options = {}) => {
  /**
   * Swatch
   **/
  eleventy.addPairedShortcode("color_swatch", (content, color, name) => {
    return mix.colorSwatch(content, color, name);
  });
};
