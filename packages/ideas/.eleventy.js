const elements = require("./lib/elements");
const forms = require("./lib/form");
const shared = require("./lib/shared");

module.exports = (eleventy, options = {}) => {
  /**
   * Collections
   */
  eleventy.addCollection("all", collection => {
    return shared.getAll(collection);
  });

  /**
   * Shortcodes
   */
  eleventy.addPairedShortcode("button_elm", (content, styles, attrs) => {
    return elements.button(content, styles, attrs);
  });

  eleventy.addPairedShortcode(
    "link_elm",
    (content, link = "", classes, attrs) => {
      return elements.link(content, link, classes, attrs);
    }
  );

  eleventy.addPairedShortcode(
    "link_button",
    (content, link = "#", classes, attrs) => {
      let _classes = classes ? classes + " btn" : "button";
      return elements.link(content, link, _classes, attrs);
    }
  );

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

  /**
   * Plugins
   */

  // adds Mo
  eleventy.addPlugin(require("./modular"));
  // adds atomic modules as collections
  eleventy.addPlugin(require("./atomic"));
};
