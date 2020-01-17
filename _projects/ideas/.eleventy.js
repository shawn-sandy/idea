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
  eleventy.addPairedShortcode("ButtonElement", (content, styles, attrs) => {
    return elements.button(content, styles, attrs);
  });

  eleventy.addPairedShortcode(
    "LinkElement",
    (content, link = "", classes, attrs) => {
      return elements.link(content, link, classes, attrs);
    }
  );

  eleventy.addPairedShortcode(
    "LinkButton",
    (content, link = "#", classes, attrs) => {
      let _classes = classes ? classes + " btn" : "button";
      return elements.link(content, link, _classes, attrs);
    }
  );

  /**
   * Copy Element
   */
  eleventy.addPairedShortcode("CopyString", (content, string, classes) => {
    return elements.copyString(content, string, classes);
  });

  /**
   * Copy Swatch
   */
  eleventy.addPairedShortcode("CopyElement", (content, target, classes) => {
    return elements.copyElement(content, target, classes);
  });

  /**
   * Plugins
   */

  // adds Mo
  eleventy.addPlugin(require("./modular"));
  // adds atomic modules as collections
  eleventy.addPlugin(require("./atomic"));
};
