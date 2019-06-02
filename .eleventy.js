const syntax = require("@11ty/eleventy-plugin-syntaxhighlight");

// shortcode imports
const _Button = require('./src/_shortcodes/Button')

const _npm = require("@shawnsandy/npm_info")

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

  eleventyConfig.addPassthroughCopy("src/css");

  eleventyConfig.addPassthroughCopy("src/js");

  eleventyConfig.setBrowserSyncConfig({
    notify: true,
    open: true
  });

  // shortcodes
 eleventyConfig.addShortcode('Button', _Button)

 /**
 * Get the npm package downloads
 */
eleventyConfig.addNunjucksAsyncFilter( "packageDownloads", _npm);

eleventyConfig.addNunjucksAsyncFilter( "gitinfo", require("@shawnsandy/npm_info/gitinfo"));

  return {
    dir: {
      input: "src",
      output: "dist/"
    },
    templateFormats: ["njk", "html", "md", "mustache", "hbs"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true,
    pathPrefix: "/"
  };
};
