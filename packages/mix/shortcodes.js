// eleventy plugin

const mix = require("./eleventy/shortcodes");

module.exports = (eleventy, options = {}) => {
  /**
   * Swatch
   **/
  eleventy.addPairedShortcode("Swatch", (content, color, name) => {
    return mix.swatch(content, color, name);
  });

  /**
   * Copy Element
   */
  eleventy.addPairedShortcode("copy_string", (content, string, classes) => {
    return mix.copyString(content, string, (classes = ""));
  });

  /**
   * Copy Swatch
   */
  eleventy.addPairedShortcode("copy_element", (content, target, classes) => {
    return mix.copyElement(content, target, (classes = ""));
  });
};
