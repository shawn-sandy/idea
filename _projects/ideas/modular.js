const shared = require('./lib/shared')

/**
A modular approach to building a flexible design system that integrates with
* commonly used industry concepts, patterns and best practices, offering an
* alternative approach to the atomic methodology.
*/

module.exports = (eleventy) => {

  eleventy.addCollection("attributes", function(collection) {
    return shared.sortingTags(collection, "attributes").reverse()
  });

  eleventy.addCollection("actions", function(collection) {
    return shared.sortingTags(collection, "actions").reverse()
  });

  eleventy.addCollection("elements", function(collection) {
    return shared.sortingTags(collection, "elements").reverse()
  });

  eleventy.addCollection("components", function(collection) {
    return shared.sortingTags(collection, "components").reverse()
  });

  eleventy.addCollection("patterns", function(collection) {
    return shared.sortingTags(collection, "patterns").reverse()
  });

  eleventy.addCollection("screens", function(collection) {
    return shared.sortingTags(collection, "screens").reverse()
  });

}
