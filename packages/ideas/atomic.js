// imports

const shared = require ("./lib/shared")
module.exports = (eleventyConfig) => {

  // collection--atomic modules

  eleventyConfig.addCollection("atoms", function(collection) {
    return shared.sortingTags(collection, "atoms").reverse()
  });

  eleventyConfig.addCollection("molecules", function(collection) {
    return shared.sortingTags(collection, "molecules").reverse()
  });

  eleventyConfig.addCollection("organisms", function(collection) {
    return shared.sortingTags(collection, "organisms").reverse()
  });

  eleventyConfig.addCollection("pages", function(collection) {
    return shared.sortingTags(collection, "pages").reverse()
  });

  eleventyConfig.addCollection("templates", function(collection) {
    return shared.sortingTags(collection, "templates").reverse()
  });

}
