// eleventy plugin

const mix = require("./eleventy/shortcodes");

module.exports = (eleventy, options = {}) => {
  /**
   * Swatch
   **/
  eleventy.addPairedShortcode("swatch", (content, color, name) => {
    return mix.swatch(content, color, name);
  });
};
