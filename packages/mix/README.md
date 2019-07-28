# `@shawnsandy/mix`

A SASS toolkit for generating utility classes, components and styles-sheets from SASS MAPS or design tokens

## Usage

**Basic**

``` scss
@import "tokens.scss";
@import "@shawnsandy/mix";

.sg {
 @include mix-components();
}

```

**Change default settings**

``` scss

$mix-tokens: $tokens;
$mix-fonts: "fonts";
$mix-spacing: "spacing";
$mix-sizing: "sizing";
$mix-prefix: "-";

@import "@shawnsandy/mix";

.sg {
 @include mix-components();
}

```

**Custom components**

``` scss

// TODO

```

**SCSS Token map example** * `(tokens.scss)` *

``` scss

/*
  Do not edit directly
  Generated on Sun, 28 Jul 2019 12:17:22 GMT
*/

$sg-color-blue: #3f86f5 !default; // Color used for logos / highlights
$sg-color-gray: #bebdbf !default; // a midrange gray backgrounds/muted text
$sg-color-light-gray: #efefef !default; // light background color
$sg-color-dark-25: #707070 !default; // highlight text
$sg-color-dark-50: #2a2a2a !default; // default text
$sg-color-dark-100: #232323 !default; // Element background etc
$sg-components-btn-padding: 1.25rem 5rem !default;
$sg-components-btn-font-size: 1.07rem !default;
$sg-components-btn-background-color: #232323 !default;
$sg-components-btn-color: #efefef !default;
$sg-components-btn-hover-color: darken(#efefef, 10%) !default;
$sg-components-btn-hover-background-color: darken(#232323, 10%) !default;
$sg-components-btn-blue-background-color: #3f86f5 !default;
$sg-components-btn-cursor: pointer !default;
$sg-components-btn-border: none !default;
$sg-components-btn-border-radius: 9999rem !default;
$sg-colors-blue-color: #3f86f5 !default;
$sg-colors-green-color: #3f86f5 !default;

$tokens: (
  'color': (
    'blue': $sg-color-blue,
    'gray': $sg-color-gray,
    'light-gray': $sg-color-light-gray,
    'dark': (
      '25': $sg-color-dark-25,
      '50': $sg-color-dark-50,
      '100': $sg-color-dark-100
    )
  ),
  'components': (
    'btn': (
      'padding': $sg-components-btn-padding,
      'font-size': $sg-components-btn-font-size,
      'background-color': $sg-components-btn-background-color,
      'color': $sg-components-btn-color,
      'hover': (
        'color': $sg-components-btn-hover-color,
        'background-color': $sg-components-btn-hover-background-color
      ),
      'blue': (
        'background-color': $sg-components-btn-blue-background-color
      ),
      'cursor': $sg-components-btn-cursor,
      'border': $sg-components-btn-border,
      'border-radius': $sg-components-btn-border-radius
    )
  ),
  'colors': (
    'blue': (
      'color': $sg-colors-blue-color
    ),
    'green': (
      'color': $sg-colors-green-color
    )
  )
);

```

### What are SASS Maps

> Maps in Sass hold pairs of keys and values, and make it easy to look up a value by its corresponding key. They’re written (<expression>: <expression>, <expression>: <expression>). The expression before the : is the key, and the expression after is the value associated with that key. The keys must be unique, but the values may be duplicated. Unlike lists, maps must be written with parentheses around them. A map with no pairs is written (). [More Info]([https://link](https://sass-lang.com/documentation/values/maps))

#### Inspiration, Links & Resources

**[Design Tokens]([https://link](https://www.lightningdesignsystem.com/design-tokens/))**

Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values (such as hex values for color or pixel values for spacing) in order to maintain a scalable and consistent visual system for UI development.

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

