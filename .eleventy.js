const syntax = require("@11ty/eleventy-plugin-syntaxhighlight");

// const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  //   eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addCollection("news", function(collection) {
    // get unsorted items
    // return collection.getAllSorted().reverse()
    return collection.getFilteredByTag("posts").reverse();
  });

  eleventyConfig.addCollection("element", function(collection) {
    return collection.getFilteredByTag("elements").reverse();
  });

  eleventyConfig.addPassthroughCopy("dist/css");

  return {
    dir: {
      input: "static",
      output: "dist/content"
    },
    templateFormats: ["njk", "html", "md", "mustache", "hbs"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true,
    pathPrefix: "/content/"
  };
};
