# Tokens/Maps

### CSS Token map example * `(tokens.scss)` *

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

### Json Token

**Colors**

``` json
{
  "color": {
    "gray": {
      "value": "#6a737d"
    },
    "red": {
      "value": "#d73a49"
    },
    "blue": {
      "value": "#0366d6"
    },
    "orange": {
      "value": "#f66a0a"
    },
    "yellow": {
      "value": "#ffd33d"
    },
    "green": {
      "value": "#28a745"
    },
    "black": {
      "value": "#000000"
    },
    "white": {
      "value": "#ffffff"
    }
  }
}

```

**Button**

``` json
{
  "button": {
    "btn": {
      "padding": {
        "value": "1.1rem 1.5rem"
      },
      "font-size": {
        "value": ".95rem"
      },
      "background-color": {
        "value": "{color.gray.value}"
      },
      "color": {
        "value": "{color.white.value}"
      },
      "cursor": {
        "value": "pointer"
      },
      "border": {
        "value": "none"
      },
      "border-radius": {
        "value": "9999rem"
      },
      "hover": {
        "color": {
          "value": "transparentize({button.btn.color.value}, .20)"
        },
        "background-color": {
          "value": "darken({button.btn.background-color.value}, 10%)"
        }
      },
      "blue": {
        "background-color": {
          "value": "{color.blue.value}"
        },
        "color": {
          "value": "{color.white.value}"
        }
      }
    }
  }
}

```

