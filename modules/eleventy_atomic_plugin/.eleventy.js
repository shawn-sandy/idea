// imports

const sortingTags = (collection, tags = "atoms") => {
  return collection.getFilteredByTag(tags).sort((a, b) => {
    if (a.data.title > b.data.title) return -1
    else if (a.data.title < b.data.title) return 1
    else return 0
  })
}
module.exports = (eleventyConfig) => {

  // collection--atomic modules

  eleventyConfig.addCollection("atoms", function(collection) {
    return sortingTags(collection, "atoms").reverse()
  });

  eleventyConfig.addCollection("molecules", function(collection) {
    return sortingTags(collection, "molecules").reverse()
  });

  eleventyConfig.addCollection("organisms", function(collection) {
    return sortingTags(collection, "organisms").reverse()
  });

  eleventyConfig.addCollection("pages", function(collection) {
    return sortingTags(collection, "pages").reverse()
  });

  eleventyConfig.addCollection("templates", function(collection) {
    return sortingTags(collection, "templates").reverse()
  });

}
