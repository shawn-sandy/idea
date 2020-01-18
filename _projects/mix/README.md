# StyleMix (beta)

A SASS toolkit for generating CSS utility classes and components from **Design Tokens**.

## Install

* **Install StyleMix(beta)**

```
npm i -D @shawnsandy/mix
```

* **Install Style Dictionary**

> Style Dictionary is a build system that allows you to define styles once, in a way for any platform or language to consume. A single place to create and edit your styles, and a single command exports these rules to all the places you need them - iOS, Android, CSS, JS, HTML, sketch files, style documentation, or anything you can think of. It is available as a CLI through npm, but can also be used like any normal node module if you want to extend its functionality.

```

// global
npm i -g style-dictionary

```

**Uility classes** (example)

1. Create/Import your tokens [(creating tokens)](#creating-tokens)
2. Config StyleMix using SASS defaults
3. Import StyleMix
4. Include the utility mixin and run you build
5. View [UTILITY TOKENS]('./dist/color.css') example

``` scss

/** Import tokens, replace the import file below with your own **/
@import "@shawnsandy/mix/tokens/tokens";

/** Config StyleMix SASS defaults */

$mix-tokens: $tokens; // token variable name
$mix-namespace: "mx"; // namespace
$mix-base: "base"; // default utility name
$mix-colors: "color"; // color key
$mix-fonts: "fonts"; // font key
$mix-spacing: "spacing"; // padding and margin
$mix-sizing: "sizing"; //  width heights
$mix-prefix: "-"; // separator for you class names my-class-name
$mix-components: "components"; // default component key
$mix-modifier-states: active focus focus-within hover visited; // define the states that you use
$mix-color-attrs: "color", "background-color", "border-color";

/** import stylemix **/
@import "@shawnsandy/mix";

/** utility mixin example--create font utility form our tokens **/
@include mix-utilities("font");
```

### Design Tokens

 **What are design tokens?**

> Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values (such as hex values for color or pixel values for spacing) in order to maintain a scalable and consistent visual system for UI development.

[What are design Tokens (CSS-Tricks)](https://css-tricks.com/what-are-design-tokens/)

[Tokens in a design System]([https://link](https://medium.com/eightshapes-llc/tokens-in-design-systems-25dd82d58421))

[SALES FORCE DESIGN TOKENS](https://www.lightningdesignsystem.com/design-tokens)

### What are SASS Maps

> Maps in Sass hold pairs of keys and values, and make it easy to look up a value by its corresponding key. They’re written ( `<expression>: <expression>, <expression>: <expression>` ). The expression before the : is the key, and the expression after is the value associated with that key. The keys must be unique, but the values may be duplicated. Unlike lists, maps must be written with parentheses around them. A map with no pairs is written ().
>
> [Read more about SASS maps](https://sass-lang.com/documentation/values/maps)

#### Creating Tokens

StyleMix really only needs a SASS-MAPS to do it's thing, and you can write SASS-MAPS on your own, thats entirely up to you, once you stick to the map format(s). The workflow below is not mandatory but strongly recommend.

* If you haven't yet install the Style Dictionary : [Style Dictionary Quick Start](https://amzn.github.io/style-dictionary/#/quick_start)
* Create a config
* Write you tokens be sure to read about how to [format tokens for stylemix](#token-formats)
* Run style-dictionary

``` js
// config.js
const config = require("@shawnsandy/mix/config/tokens");

module.exports = config({
    source: "tokens/**/*", // tokens dir--/tokens/my-tokens.json
    build: "scss/_tokens/", // build dir trailing slash required--scss/_tokens.scss
    name: "token/" // name of you scss token output file--tokens.scss
});
```

* Run the build script

Command line

```
style-dictionary build --config ./config.js

```

NPM Scripts

```
 "scripts": {
    "tokens": "style-dictionary build --config ./config.js"
  },
```

Run the scripts

```
npm run tokens
```

#### Token Formats

**Utility Token Structure**

Utility tokens allow you to generate SASS Maps for utility classes.
Structure ***Group/Rule/Item/Subitems/*** method or in a case where you don't need a group structure ***Rule/Item/Subitems*** when creating tokens for utilities classes:

* Group: SASS group
* Rule: Targets the CSS rule size for e.g: `size: 1rem`
* Items/Subitems: are used for the class names `.prefix-item-subitem: 0.75rem` e.g: `.mx-fs-xs: 0.75rem`

``` json

  {
    "GROUP" : {
      "RULE" : {
        "ITEM": {
          "KEY": "VALUE",
          "COMMENT": "COMMENT"
        }
      }
    }
  }

```

**Font-Size Utility Tokens** (example)

``` json
// fonts.json
{
  "font": {
    "size": {
      "fs": {
        "sm": {
          "value": "0.875rem",
          "comment": "descriptions..."
        },
        "md": {
          "value": "1.3rem",
          "comment": "descriptions..."
        },
        "lg": {
          "value": "1.5rem",
          "comment": "descriptions..."
        }
      }
    }
  }
}

```

**Color Utility Tokens** (examples)

``` json
{
  "color": {
    "black": {
      "value": "#000000"
    },
    "white": {
      "value": "#ffffff"
    },
    "gray": {
      "value": "#6a737d"
    },
    "red": {
      "value": "#d73a49"
    }
  }
}

```

**Component Token Structure** (example)

Component tokens are structured a lot like how you write rules for a CSS button/card and will generate all the SASS/CSS for your element.
Structure ***Group/Name/Rules/Nesting/Rules***:

* Group: Component SASS group
* Name: Component name
* Rules: Rules that style the Component e.g: `size: 1rem`
* Nested/Rules: Components can have nested rules

``` json

  {
    "GROUP" : {
      "NAME" : {
        "RULE": {
          "KEY": "VALUE",
          "COMMENT": "COMMENT"
        },
        "NESTED" : {
        "RULE": {
          "KEY": "VALUE",
          "COMMENT": "COMMENT"
        }
      }
      }
    }
  }

```

``` json

{
 "component": {
     "navbar": {
       "display": {
         "value": "flex"
       },
       "align-items": {
         "value": "center"
       },
       "height": {
         "value": "60px"
       }
     }
 }

```

* Utilities
* Components
* Helpers
* Functions

`to be continue--WIP`

#### [Read the docs for more info on setup, usages and examples (WIP)](./docs)

#### Inspiration, Links & Resources

**[Amazon Style Dictionary](https://amzn.github.io/style-dictionary/#/?id=style-dictionary)**
Style Dictionary is a build system that allows you to define styles once, in a way for any platform or language to consume. A single place to create and edit your styles, and a single command exports these rules to all the places you need them - iOS, Android, CSS, JS, HTML, sketch files, style documentation, or anything you can think of. It is available as a CLI through npm, but can also be used like any normal node module if you want to extend its functionality.

**[How to manage your Design Tokens with Style Dictionary](https://medium.com/@didoo/how-to-manage-your-design-tokens-with-style-dictionary-98c795b938aa)**

**[Generate All Your Utility Classes with Sass Maps](https://frontstuff.io/generate-all-your-utility-classes-with-sass-maps)**

**[Mastering Maps: Build a Flexible Variable System in Sass](https://www.viget.com/articles/maps-math-and-magic-build-a-flexible-variable-system-in-sass/)**

**[Advanced Use of Sass Maps]([https://link](https://itnext.io/advanced-use-of-sass-maps-bd5a47ca0d1a))**

### License

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

**Enjoy!**

