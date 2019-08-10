# Mix Eleventy Plugins

### Usage

**Import the Mix plugin into Eleventy config file `.eleventy.js` **

``` js
eleventyConfig.addPlugin(require("@shawnsandy/mix/eleventy.js"));
```

#### Shortcodes

**Swatches**

``` html
{% swatch '#000000', "Black World" %}

Swatch description

{% endswatch %}
```

