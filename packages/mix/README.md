# StyleMix (beta)

A SASS-Map toolkit for generating utility classes, components and styles-sheets for your design system, style-guide or website using SASS MAPS.

## Usage

##### Generate color utility classes form you map

``` scss
// import you sass map/tokens
@import "tokens.scss";
// import StyleMix
@import "@shawnsandy/mix";
// generate color utilities from your `color` map
.id {
 @include mix-color();
}
```

##### Sample Output

``` css
.id-gray-hover:hover {
    color: #6a737d !important
}

.id-gray-focus:focus {
    color: #6a737d !important
}

.id-gray-tp {
    color: rgba(106, 115, 125, .8) !important
}

.id-red {
    color: #d73a49
}

.id-red-hover:hover {
    color: #d73a49 !important
}

.id-red-focus:focus {
    color: #d73a49 !important
}

.id-red-tp {
    color: rgba(215, 58, 73, .8) !important
}

.id-blue {
    color: #0366d6
}

.id-blue-hover:hover {
    color: #0366d6 !important
}

.id-blue-focus:focus {
    color: #0366d6 !important
}

.id-blue-tp {
    color: rgba(3, 102, 214, .8) !important
}

.id-orange {
    color: #f66a0a
}

.id-orange-hover:hover {
    color: #f66a0a !important
}

.id-orange-focus:focus {
    color: #f66a0a !important
}

.id-orange-tp {
    color: rgba(246, 106, 10, .8) !important
}

.id-yellow {
    color: #ffd33d
}

.id-yellow-hover:hover {
    color: #ffd33d !important
}

.id-yellow-focus:focus {
    color: #ffd33d !important
}

.id-yellow-tp {
    color: rgba(255, 211, 61, .8) !important
}

.id-green {
    color: #28a745
}

.id-green-hover:hover {
    color: #28a745 !important
}

.id-green-focus:focus {
    color: #28a745 !important
}

.id-green-tp {
    color: rgba(40, 167, 69, .8) !important
}
```

### MIX Components

**Change default settings** replace default mix values with your own

``` scss
// Setup up some defaults
$mix-tokens: $tokens !default; // token variable name
$mix-namespace: "mx" !default; // namespace
$mix-base: "base" !default; // default utility name
$mix-colors: "color" !default; // color key
$mix-fonts: "fonts" !default; // font key
$mix-spacing: "spacing" !default; // padding and margin
$mix-sizing: "sizing" !default; //  width heights
$mix-prefix: "-" !default; // separator for you class names my-class-name
$mix-components: "components" !default; // default component key
$mix-modifier-states: active focus focus-within hover visited; // define the states that you use
$mix-color-attrs: "color", "background-color", "border-color" !default;

@import "@shawnsandy/mix";

.sg {
 @include mix-components();
}

```

#### Truncate component

Truncate text using only CSS (beta)--add the following to you scss imports

``` scss
// optional change or modify the following default values/options to customize the component
$mx-truncate-clip-overflow: hidden !default;
$mx-truncate-clip-position: relative !default;
$mx-truncate-clip-line-height: 1rem !default;
$mx-truncate-clip-max-height: 3rem !default;
$mx-truncate-clip-text-align: justify !default;
$mx-truncate-clip-margin-right: -1rem !default;
$mx-truncate-clip-padding-right: 1rem !default;
$mx-truncate-clip-before-content: "..." !default;
$mx-truncate-clip-before-position: absolute !default;
$mx-truncate-clip-before-right: 0 !default;
$mx-truncate-clip-before-bottom: 0 !default;
$mx-truncate-clip-after-content: "" !default;
$mx-truncate-clip-after-position: absoulte !default;
$mx-truncate-clip-after-right: 0 !default;
$mx-truncate-clip-after-width: 1rem !default;
$mx-truncate-clip-after-height: 1rem !default;
$mx-truncate-clip-after-background: transparent !default;

// import the component

@import "node_modules/@shawnsandy/mix/components/truncate.scss"

```

Example text

``` html
<p class="mx-clip" style="height: 3rem">The Hitch Hiker's Guide to the Galaxy has a few things to say on the subject of towels. <br>
    A towel, it says, is about the most massively useful thing an interstellar hitch hiker can have. Partly it has great practical value - you can wrap it around you for warmth as you bound across the cold moons of Jaglan Beta; you can lie on it on the brilliant marble-sandedssss beaches of Santraginus V, inhaling the heady sea vapours; you can sleep under it beneath the stars which shine so redly on the desert world of Kakrafoon; use it to sail a mini raft down the slow heavy river Moth; wet it for use in hand-to-hand-combat; wrap it round your head to ward off noxious fumes or to avoid the gaze of the Ravenous Bugblatter Beast of Traal (a mindboggingly stupid animal, it assumes that if you can't see it, it can't see you - daft as a bush, but very ravenous); you can wave your towel in emergencies as a distress signal, and of course dry yourself off with it if it still seems to be clean enough. More importantly, a towel has immense psychological value. For some reason, if a strag (strag: non-hitch hiker) discovers that a hitch hiker has his towel with him, he will automatically assume that he is also in possession of a toothbrush, face flannel, soap, tin of biscuits, flask, compass, map, ball of string, gnat spray, wet weather gear, space suit etc., etc. Furthermore, the strag will then happily lend the hitch hiker any of these or a dozen other items that the hitch hiker might accidentally have "lost". What the strag will think is that any man who can hitch the length and breadth of the galaxy, rough it, slum it, struggle against terrible odds, win through, and still knows where his towel is is clearly a man to be reckoned with.</p>
`
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

