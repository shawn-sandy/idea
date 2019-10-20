# Truncate text component

Truncate text using only CSS (beta)--add the following to your scss imports, use variables to override the components default variables if needed

``` scss
// optional change or modify the following default variables to customize the component CSS modifiers

$mx-truncate-clip-box-line-height: 1rem;
$mx-truncate-clip-box-max-height: 3rem;
$mx-truncate-clip-box-text-align: justify;
$mx-truncate-clip-box-margin-right: -1rem;
$mx-truncate-clip-box-padding-right: 1rem;
$mx-truncate-clip-box-before-content: "...";
$mx-truncate-clip-box-before-right: 0;
$mx-truncate-clip-box-before-bottom: 0;
$mx-truncate-clip-box-after-background: transparent;

// import the component

@import "node_modules/@shawnsandy/mix/components/truncate.scss"

```

Usage example

``` html
<p class="mx-clip-box" style="height: 3rem">The Hitch Hiker's Guide to the Galaxy has a few things to say on the subject of towels. <br>
    A towel, it says, is about the most massively useful thing an interstellar hitch hiker can have. Partly it has great practical value - you can wrap it around you for warmth as you bound across the cold moons of Jaglan Beta; you can lie on it on the brilliant marble-sandedssss beaches of Santraginus V, inhaling the heady sea vapours; you can sleep under it beneath the stars which shine so redly on the desert world of Kakrafoon; use it to sail a mini raft down the slow heavy river Moth; wet it for use in hand-to-hand-combat; wrap it round your head to ward off noxious fumes or to avoid the gaze of the Ravenous Bugblatter Beast of Traal (a mindboggingly stupid animal, it assumes that if you can't see it, it can't see you - daft as a bush.</p>
`
```

