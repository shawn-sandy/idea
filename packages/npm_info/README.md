# NPM Package Info

Eleventy filter that grabs and returns npm package details or a github repository info

Example

>Name: Vue
Description Reactive, component-oriented view layer for modern web interfaces.
Version 2.6.10
Stars Count 138764
Open issues 281

## Usage
---

### NPM Package details
- Add the following to your `eleventy.js` config file

``` js
const npmInfo = require("npm_package_info")

```

- In the `module.exports` section of your `eleventy.js` file add a nunjucks filter `eleventyConfig.addNunjucksAsyncFilter( "npm", _npm);`

``` js

module.exports = function(eleventyConfig) {
/**
 * Get the npm package info
 */
eleventyConfig.addNunjucksAsyncFilter( "npm", _npm);

}

```

- Use the filter in your template
  ``` html

   {{ "vuejs/vue" | npnInfo | safe  }}

   ```
### Github repository info

- Lets skip the property declaration this time

- In the `module.exports` section of your `eleventy.js` file add a nunjucks filter `eleventyConfig.addNunjucksAsyncFilter( "git", require("@shawnsandy/npm_info/gitinfo");`

``` js

module.exports = function(eleventyConfig) {
/**
 * Get the npm package info
 */
eleventyConfig.addNunjucksAsyncFilter( "gitInfo", require("@shawnsandy/npm_info/gitinfo");

}

```

- Use the filter in your template
  ``` html

   {{ "vuejs/vue" | gitInfo | safe  }}

   ```

### License: MIT

### TODO

- [ ] refactor remove safe require filter
- [ ] complete docs
- [ ] Add configuration options
- [ ] write test
- [ ] more
