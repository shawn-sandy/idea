// eleventy plugin

const mix = require("./eleventy/shortcodes");

module.exports = (eleventy, options = {}) => {
  /**
   * Swatch
   **/
  eleventy.addPairedShortcode("swatch", (content, color, name) => {
    return mix.swatch(content, color, name);
  });

  /**
   * Swatch
   **/
  eleventy.addPairedShortcode("copy", (content, size, name, comment = "") => {
    return mix.swatch(content, size, name, comment);
  });

  /**
   * Swatch
   **/
  eleventy.addPairedShortcode("header", (content, size, name) => {
    return mix.swatch(content, size, name);
  });
};
