# Customizing SASS Tokens

If you don't have the time *(boss needs it yesterday...)* or the desire to create your own tokens from scratch you can use the defaults provided by customizing variables--tokens using the SASS !default flag. The SASS !default flag allows you to override the variable’s default value in your own Sass without modifying our own--a lot likes bootstrap 4.x. theming feature :).

 >Normally when you assign a value to a variable, if that variable already had a value, its old value is overwritten. But if you’re writing a Sass library, you might want to allow your users to customize your library’s variables before you use them to generate CSS.

> To make this possible, Sass provides the !default flag. This assigns a value to a variable only if that variable isn’t defined or its value is null. Otherwise, the existing value will be used. This way, users can set variables before they import your library to customize its behavior. [More info on sass default flag](https://sass-lang.com/documentation/variables#default-values)

**Default Tokens** [*_tokens.scss*](../scss/tokens/scss)

``` scss

/*
  Do not edit directly
  Generated on Sat, 03 Aug 2019 21:51:41 GMT
*/

$sg-color-gray: #6a737d !default;
$sg-color-red: #d73a49 !default;
$sg-color-blue: #0366d6 !default;
$sg-color-orange: #f66a0a !default;
$sg-color-yellow: #ffd33d !default;
$sg-color-green: #28a745 !default;
$sg-color-black: #000000 !default;
$sg-color-white: #ffffff !default;
$sg-component-btn-padding: 1.1rem !default;
$sg-component-btn-font-size: 0.95rem !default;
$sg-component-btn-background-color: #6a737d !default;
$sg-component-btn-color: #ffffff !default;
$sg-component-btn-cursor: pointer !default;
$sg-component-btn-border: none !default;
$sg-component-btn-border-radius: 9999rem !default;
$sg-component-btn-hover-color: transparentize(#ffffff, .20) !default;
$sg-component-btn-hover-background-color: darken(#6a737d, 10%) !default;
$sg-component-btn-blue-background-color: #0366d6 !default;
$sg-component-btn-blue-color: #ffffff !default;
$sg-font-size-base: 1rem !default;
$sg-font-size-xs: 0.75rem !default;
$sg-font-size-sm: 0.875rem !default;
$sg-font-size-md: 1.3rem !default;
$sg-font-size-lg: 1.5rem !default;
$sg-font-size-xl: 1.75rem !default;
$sg-font-size-title-base: 2rem !default;
$sg-font-size-title-xs: 2.5rem !default;
$sg-font-size-title-sm: 3rem !default;
$sg-font-size-title-md: 3.5rem !default;
$sg-font-size-title-lg: 4rem !default;
$sg-font-size-title-xl: 5rem !default;
$sg-font-weight-medium: 500 !default;
$sg-font-weight-bold: 700 !default;
$sg-font-color: #fff !default;

```

### Usage

``` scss
// change the color
$sg-color-white: #f1f1f1 ;
// reduce the padding
$sg-component-btn-padding: .5rem ;
// increase the button font size
$sg-component-btn-font-size: 2rem ;
// import StyleMix tokens
@import "node_modules/shawnsandy/mix/scss/tokens

```

