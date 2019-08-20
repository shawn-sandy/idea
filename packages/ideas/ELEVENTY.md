# Eleventy Plugins

### Shortcodes

**Clipboard buttons** copy to clipboard

[Information on eleventy Shortcodes](https://www.11ty.io/docs/shortcodes/)

* Copy an Element - generates a button that copied an element

``` html
{% CopyElement %}
copy element
{% endCopyElement %}
```

* Copy a string  - generates a button that copied a string

``` html
{% CopyString "String to copy here", "button button-md m-2" %}
copy string
{% endCopyString %}
```

