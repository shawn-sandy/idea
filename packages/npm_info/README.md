# NPM Package Info

Eleventy filter that grabs and returns npm package details or a github repository info

Example

>Name: Vue
Description Reactive, component-oriented view layer for modern web interfaces.
Version 2.6.10
Stars Count 138764
Open issues 281

## Usage

### Install

```
// npm
npm i @shawnsandy/npm_info --dev

// yarn
yarn add @shawnsandy/npm_info -D

```

### NPM Package details
- Add the following to your `eleventy.js` config file

``` js
const npmInfo = require("@shawnsandy/npm_info")

```

- In the `module.exports` section of your `eleventy.js` file add a nunjucks filter `eleventyConfig.addNunjucksAsyncFilter( "npm", npmInfo);`

``` js

module.exports = function(eleventyConfig) {
/**
 * Get the npm package info
 */
eleventyConfig.addNunjucksAsyncFilter( "npm", npmInfo);

}

```

- Use the filter in your template
  ``` html

   {{ "vue" | npnInfo | safe  }}

   ```
### Github repository info

- Lets skip the property declaration this time

- In the `module.exports` section of your `eleventy.js` file add a nunjucks filter `eleventyConfig.addNunjucksAsyncFilter( "gitInfo", require("@shawnsandy/npm_info/gitinfo");`

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

- [ ] refactor remove safe requirement on filter
- [ ] complete docs
- [ ] Add configuration options
- [ ] write test
- [ ] more
