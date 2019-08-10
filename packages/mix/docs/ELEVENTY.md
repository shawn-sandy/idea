# Mix Eleventy Plugins

### Usage

**Import the Mix plugin into Eleventy config file `.eleventy.js` **

``` js
eleventyConfig.addPlugin(require("@shawnsandy/mix/eleventy.js"));
```

**CSS** add a link to the mix stylesheet

* CDN

``` html
<link>
```

#### Shortcodes

**Swatches Pallette** displays your color tokens as swatches

``` html
{% swatch '#000000', "Black World" %}

Swatch description

{% endswatch %}
```

**Type Styles**

``` html
{% type_tokens '#000000', "Black World" %}

Swatch description

{% endtype_tokens %}
```

``` html
{% title_tokens '#000000', "Black World" %}

Swatch description

{% endtitle_tokens %}
```

