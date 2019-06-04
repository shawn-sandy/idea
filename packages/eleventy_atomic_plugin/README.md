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

### Atomic Collections

Eleventy collections allows you to "group content in interest ways", likewise atomic collections takes the 5 parts to the atomic system and groups them into collection that you can quickly use in your template.

**USAGE**

Lets create some atoms for our design system and display them in our template

Add the `atoms` tags to the front matter data in you content

``` md

---
layout: theme/modules.njk
title: A Sample Atom
tags: ["atoms"]
date: 0000-00-00
icon: "group_work"
description: Description
#stylesheets: [path/style.css]
---


<div class="modules Sample Atom "atoms"">
   <p>Sample page</p>
  </div>
</div>

```

Now lets display a collections of atoms in a template by calling `collection.atoms` array and looping through it, <a href="https://www.11ty.io/docs/collections/" target="_blank"> read more on collections</a>

``` html
  {% for atom in collections.atoms %}
    <h2>
    {{ atom.data.title }}
    </h2>
    {{ atom.templateContent | safe }}
  {% endfor %}
```
