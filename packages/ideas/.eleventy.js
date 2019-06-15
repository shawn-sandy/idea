const elements = require("./lib/elements")
const forms = require('./lib/form')

module.exports = (eleventy, options = {}) => {

  eleventy.addPairedShortcode('button_elm', (content, styles, attrs) => {

    return elements.button(content, styles, attrs)

  })

  eleventy.addPairedShortcode('link_elm', (content, link = "", classes, attrs) => {
    return elements.link(content, link, classes, attrs)
  })

  eleventy.addPairedShortcode('link_button', (content, link = "#", classes, attrs) => {
    return element.link(content, link, classes, attrs)
  })

}
