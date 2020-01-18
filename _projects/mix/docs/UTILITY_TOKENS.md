1.**Utility tokens** are used to generate utility classes [more about utility classes](https://blog.mariano.io/css-utility-classes-how-to-use-them-effectively-d61ee00dad2d)

StyleMix token structure is ***Group/Rule/Item/Subitems*** method or in a case where you don't need a group structure ***Rule/Item/Subitems*** when creating tokens for utilities classes:

* Group: SASS group
* Rule: Targets the CSS rule size for e.g: `size: 1rem`
* Items/Subitems: are used for the class names `.prefix-item-subitem: 0.75rem` e.g: `.mx-fs-xs: 0.75rem`

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

