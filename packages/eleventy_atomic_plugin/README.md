# Atomic

A plugin for building and managing an atomic driven design system with Eleventy

> Atomic design is a methodology composed of five distinct stages working together to create interface design systems in a more deliberate and hierarchical manner.
> The five stages

## Usage

Import the plugin into to your `.eleventy.js` file

``` js

const eleventyAtomicPlugin = require('@shawnsandy/eleventy_atomic_plugin');

```

Add the plugin to the `export.modules` section

``` js
eleventyConfig.addPlugin(eleventyAtomicPlugin);

```

Add the collection to your template(s) `eleventy.js file` <a href="https://www.11ty.io/docs/collections/" target="_blank">collections info</a>

``` html
{% for atom in collections.atoms %}
{{ atom.data.Title }}
    {{ atom.templateContent | safe }}
{% endfor %}

```
