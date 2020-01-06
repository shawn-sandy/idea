// eleventy plugin

const mix = require("./eleventy/shortcodes");

module.exports = (eleventy, options = {}) => {
  /**
   * Swatch
   **/
  eleventy.addPairedShortcode("MixSwatch", (content, color, name) => {
    return mix.swatch(content, color, name);
  });

  /**
   * Type
   **/
  eleventy.addPairedShortcode(
    "MixType",
    (content, size, name, comment = "") => {
      return mix.type(content, size, name, comment);
    }
  );
};
