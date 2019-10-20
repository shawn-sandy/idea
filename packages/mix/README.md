# StyleMix (beta)

A SASS-Map toolkit for generating utility classes, components and styles-sheets for a style-guide or website from your **[DESIGN TOKENS](https://www.lightningdesignsystem.com/design-tokens)** using StyleMix (SASS MAPS/Tools).

> Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values (such as hex values for color or pixel values for spacing) in order to maintain a scalable and consistent visual system for UI development.

## Install

```
npm i -D style-dictionary @shawnsandy/mix
```

Using mix to create custom stylesheet(s)

``` scss
/** custom-styles.scss */
// import you sass map/tokens
@import "@shawnsandy/mix/tokens/tokens";
// import StyleMix
@import "@shawnsandy/mix";
```

* Generate color utilities output example [color.css]('./dist/color.css')

``` scss
// generate color utilities from our `color` map
.mx {
 @include mix-color();
}
```

* Creating tokens

StyleMix token structure is Group/Rule/Item/Subitems method making it easier to generate styles stylesheets/components

* Group

``` json
// fonts.json
{
  "font": {
    "size": {
      "fs": {
        "default": {
          "value": "1rem",
          "comment": "descriptions..."
        },
        "xs": {
          "value": "0.75rem",
          "comment": "descriptions..."
        },
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
        },
        "xl": {
          "value": "1.75rem",
          "comment": "descriptions..."
        },
        "xxl": {
          "value": "1.75rem",
          "comment": "descriptions..."
        }
      }
    }
  }
}

```

* Generated output `varables.scss` checkout our  [examples here](./tokens/_tokens.scss)

``` scss

// variables.scss
$color-base-gray-light: #cccccc;
$color-base-gray-medium: #999999;
$color-base-gray-dark: #111111;
$color-base-red: #ff0000;
$color-base-green: #00ff00;
$color-font-base: #ff0000;
$color-font-secondary: #00ff00;
$color-font-tertiary: #cccccc;
$size-font-small: 0.75rem;
$size-font-medium: 1rem;
$size-font-large: 2rem;
$size-font-base: 1rem;

$tokens {
 'font': (
    'size': (
      'fs': (
        'default': $mx-font-size-fs-default,
        'xs': $mx-font-size-fs-xs,
        'sm': $mx-font-size-fs-sm,
        'md': $mx-font-size-fs-md,
        'lg': $mx-font-size-fs-lg,
        'xl': $mx-font-size-fs-xl,
        'xxl': $mx-font-size-fs-xxl
      )
  )
}

```

## Overview

1. Create and organize your design attributes/tokens using JSON files
2. Generate all SASS variables/maps from your JSON tokens
3. Create your stylesheets using the StyleMix SASS toolkit/utilities

   - Utilities
   - Components
   - Helpers
   - Functions

#### Create Tokens

#### Utilities

## Components

#### Import and customize Mix using SASS variables

**Change default settings** use the following variables to override the  default SCSS setting variables when needed. View the full list of variables [here](./tokens/_tokens.scss)

``` scss
// Setup up some defaults
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

@import "@shawnsandy/mix";

```

## Mix helpers

##### `mix-get()`

Grab the value of a given token/key

``` scss
.danger {
  color: mix-get('color.red');
}
```

#### [Read the docs for more info on setup, usages and examples Docs (WIP)](./docs)

### What are SASS Maps

> Maps in Sass hold pairs of keys and values, and make it easy to look up a value by its corresponding key. They’re written (<expression>: <expression>, <expression>: <expression>). The expression before the : is the key, and the expression after is the value associated with that key. The keys must be unique, but the values may be duplicated. Unlike lists, maps must be written with parentheses around them. A map with no pairs is written ().[More Info]([https://link](https://sass-lang.com/documentation/values/maps))

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

