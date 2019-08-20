# IDEA Core

# A simple way to visualize IDEA's

_Idea is currently in early production beta, feel free to open an issues for features, bugs suggestions etc._

**IDEA(beta) is a simple and easy to use HTML, CSS and JAVASCRIPT toolkit (framework if you prefer) for building and managing your teams design systems. allowing you to turn your ideas and vision into products.**

> A design system is an agreed upon set of principles and a living suite of modular, resuable parts. This includes standards around style, color, language and behavior. The system allows us to work smarter and innovate on products faster, while providing a more predictable user experience.

> [Amélie Lamont @amelielamont](https://twitter.com/amelielamont/status/1072917354819059713)

### Core

Core is the engine of Idea, a collection packages and tools behind the system. A Lerna.js powered monorepo that's host to the core site, plugins and tools that can be distributed as independent packages.

---

## Features

* Atomic driven component system / structure
* Eleventy powered static site generator
* Markdown / HTML driven content and components
* Vue.js integration
* Javascript based template **[Nunjucks](https://mozilla.github.io/nunjucks/)**, Handlebars, Mustache...
* Modular
* Webpack / Gulp
* Customizable

### Install

```
npm i @shawnsandy/ideas
```

### Usage

 **Add to eleventy** Add the following to your config file `eleventy.js` inside the `modules.exports` function.

```
   eleventyConfig.addPlugin(require('@shawnsandy/ideas'))
 ```

 [Eleventy Shortcodes](./ELEVENTY.md)

### TODOS

* Complete the docs
* Add examples

## Licence (MIT)

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contribute

## Enjoy

**Wakanda Forever :)**

