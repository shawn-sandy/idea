// eleventy plugin

const mix = require("./eleventy/shortcodes");

module.exports = (eleventy, options = {}) => {
  /**
   * Swatch
   **/
  eleventy.addPairedShortcode("mix_swatch", (content, color, name) => {
    return mix.swatch(content, color, name, comment);
  });

  /**
   * Type
   **/
  eleventy.addPairedShortcode(
    "mix_type",
    (content, size, name, comment = "") => {
      return mix.type(content, size, name, comment);
    }
  );
};
