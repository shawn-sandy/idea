# Create and Generate Utility Classes

The Utility mixin well generate utility classes for specially formatted maps/tokens

## Example

### Font Utility Tokens

``` scss
'font': (
    'size': (
      'base': $sg-font-size-base,
      'xs': $sg-font-size-xs,
      'sm': $sg-font-size-sm,
      'md': $sg-font-size-md,
      'lg': $sg-font-size-lg,
      'xl': $sg-font-size-xl,
      'title': (
        'base': $sg-font-size-title-base,
        'xs': $sg-font-size-title-xs,
        'sm': $sg-font-size-title-sm,
        'md': $sg-font-size-title-md,
        'lg': $sg-font-size-title-lg,
        'xl': $sg-font-size-title-xl
      )
    ),
    'weight': (
      'medium': $sg-font-weight-medium,
      'bold': $sg-font-weight-bold
    ),
    'color': $sg-font-color
  )

```

### Include mixin

``` scss
/** fonts **/
  @include mix-utilities("font");

```

### Generated Output

``` css
.mx-font {
    font-size: 1rem;
}

.mx-font-xs {
    font-size: 0.75rem;
}

.mx-font-sm {
    font-size: 0.875rem;
}

.mx-font-md {
    font-size: 1.3rem;
}

.mx-font-lg {
    font-size: 1.5rem;
}

.mx-font-xl {
    font-size: 1.75rem;
}

.mx-font-title {
    font-size: 2rem;
}

.mx-font-title-xs {
    font-size: 2.5rem;
}

.mx-font-title-sm {
    font-size: 3rem;
}

.mx-font-title-md {
    font-size: 3.5rem;
}

.mx-font-title-lg {
    font-size: 4rem;
}

.mx-font-title-xl {
    font-size: 5rem;
}

.mx-font-medium {
    font-weight: 500;
}

.mx-font-bold {
    font-weight: 700;
}

.mx-font {
    /** "key: color" **/
    color: #fff;
}
```

