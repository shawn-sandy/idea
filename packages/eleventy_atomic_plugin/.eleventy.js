// imports

const sorting = (collection, tags = "atoms") => {
  return collection.getFilteredByTag(tags).sort((a, b) => {
    if (a.data.title > b.data.title) return -1
    else if (a.data.title < b.data.title) return 1
    else return 0
  })
}
module.exports = (eleventyConfig) => {

  //

  eleventyConfig.addCollection("atoms", function(collection) {
    return sorting(collection, "atoms")
  });

  eleventyConfig.addCollection("molecules", function(collection) {
    return sorting(collection, "molecules")
  });

  eleventyConfig.addCollection("organisms", function(collection) {
    return sorting(collection, "organisms")
  });

  eleventyConfig.addCollection("pages", function(collection) {
    return sorting(collection, "pages")
  });

  eleventyConfig.addCollection("templates", function(collection) {
    return sorting(collection, "templates")
  });

}
