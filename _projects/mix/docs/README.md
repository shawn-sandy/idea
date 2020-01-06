# USAGE GUIDE

# Setup

### Default setting

**Change default settings** replace default mix values with your own

``` scss
// Setup up some defaults
$mix-tokens: $tokens !default; // token variable name
$mix-colors: "color" !default; // color key
$mix-fonts: "fonts" !default; // font key
$mix-spacing: "spacing" !default; // padding and margin
$mix-sizing: "sizing" !default; //  width heights
$mix-prefix: "-" !default; // separator for you class names my-class-name
$mix-components: "components" !default; // default component key
$mix-element-states: active focus focus-within hover visited; // define the states that you use

```

### Imports

**Import you tokens/sass-map**

``` scss
@import "./_tokens";
```

**Import SystemMix**

``` scss
@import "node_modules/@shawnsandy/mix/index";
```

### Build you styles

**Generate colors classes from your tokens**

``` scss

.id {
  // generate colors utilities
  @include g-colors();

// lets component to generate a button
  &-btn {
    @include mix-modifier("components.btn");
  }
}

```

**Build your components**

``` scss
// Builds your default components
@include build-components();

```

