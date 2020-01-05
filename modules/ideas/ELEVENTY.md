# Eleventy Plugins/Shortcodes

#### Install

``` js
 eleventyConfig.addPlugin(require("@shawnsandy/ideas"));
```

### Plugins

Structured collections for your design system/methodology--create collections by using tags that match system structure (atoms molecules, organisms, templates, and pages)

* **Atomic**--atoms molecules, organisms, templates, and pages [Atomic Design](http://atomicdesign.bradfrost.com/chapter-2/)

* **Centrist**--attributes, actions, elements, components, patterns, screens

### Shortcodes

[Information on eleventy Shortcodes](https://www.11ty.io/docs/shortcodes/)

**Clipboard buttons** copy to clipboard

* Copy an Element - generates a button that copied an element
* Install [Clipboard.js](https://clipboardjs.com)

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

**Manual Usage**

* Copy an element/content on a page using the id/class name `#mx-clip` or `.mx-clip`

``` html
<button class="mix-clipboard" data-clipboard-target="#mx-clip">
    copy element <i class="fal fa-cut" aria-hidden="true"></i>
</button>
```

* Copy a string--place the string in the data-clipboard-ext-attribute `data-clipboard-text="text/string to copy"`

``` html
<button class="mix-clipboard" data-clipboard-text="copied string">
    copy string <i class="fad fa-copy" aria-hidden="true"></i>
</button>
```

