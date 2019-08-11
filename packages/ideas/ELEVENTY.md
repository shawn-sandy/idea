# Eleventy Plugins

### Shortcodes

**Clipboard buttons** copy to clipboard

[Information on eleventy Shortcodes](https://www.11ty.io/docs/shortcodes/)

* Copy an Element - generates a button that copied an element

``` html
{% copy_element %}
copy element
{% endcopy_element %}
```

* Copy a string  - generates a button that copied a string

``` html
{% copy_string "copied string", "button button-md m-2" %}
copy string
{% endcopy_string %}
```

