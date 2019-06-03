// imports


module.exports = (eleventyConfig) => {

  //

  eleventyConfig.addCollection("atoms", function(collection) {
    return collection.getFilteredByTag("atoms").sort((a, b) => {
      if (a.data.title > b.data.title) return -1
      else if (a.data.title < b.data.title) return 1
      else return 0
    })
  });

  eleventyConfig.addCollection("molecules", function(collection) {
    return collection.getFilteredByTag("molecules").sort((a, b) => {
      if (a.data.title > b.data.title) return -1
      else if (a.data.title < b.data.title) return 1
      else return 0
    })
  });

  eleventyConfig.addCollection("organisms", function(collection) {
    return collection.getFilteredByTag("organisms").sort((a, b) => {
      if (a.data.title > b.data.title) return -1
      else if (a.data.title < b.data.title) return 1
      else return 0
    })
  });

  eleventyConfig.addCollection("pages", function(collection) {
    return collection.getFilteredByTag("pages").sort((a, b) => {
      if (a.data.title > b.data.title) return -1
      else if (a.data.title < b.data.title) return 1
      else return 0
    })
  });

  eleventyConfig.addCollection("templates", function(collection) {
    return collection.getFilteredByTag("templates").sort((a, b) => {
      if (a.data.title > b.data.title) return -1
      else if (a.data.title < b.data.title) return 1
      else return 0
    })
  });

}
