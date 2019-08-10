# Mix Eleventy Plugins

### Usage

**Import the Mix plugin into Eleventy config file `.eleventy.js` **

``` js
eleventyConfig.addPlugin(require("@shawnsandy/mix/eleventy.js"));
```

**CSS** add a link to the mix stylesheet

``` html
<link>
```

#### Shortcodes

**Swatches** displays your color tokens as swatches

``` html
{% swatch '#000000', "Black World" %}

Swatch description

{% endswatch %}
```

**Typography**

``` html
{% swatch '#000000', "Black World" %}

Swatch description

{% endswatch %}
```

