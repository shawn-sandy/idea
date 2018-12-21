---
layout: base.njk
tags: ["guides", "documentation"]
title: "Design System Docs"
date: Last Modified
stylesheet: "/styles.css"
---

## Design System (DS) Setup

**DS Structure (Default Structure)**

While IDEA is based on the Atomic model (atoms, molecules, organisms, templates, pages) popularized by Brad Frost, we choose naming structure that we believe would more familiar to developers:

- Attributes (Tokens)
- Elements (Molecules)
- Patterns (Organisms)
- Screens (Templates)
- Apps / Prototypes (Pages)

**Get started**

- View and edit with live updates run `yarn content`
-

**Adding system components**

- We use the `*.html.md` extensions for components allowing us to add HTML formatting via file association in IDE's support - `content/elements/sample.html.md` for an example.

**Component Markdown Structure**

```
---
layout: base.njk
tags: 'elements'
title: Card
permalink: elements/{{ title | slug }}/index.html
icon: group_work
description: A simple card elements for shop
date: 2018-01-01
---

<div class="card sg-card sg-box-shadow-md rounded-0 col-4">
  <div class="p-2">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam ab nemo adipisci sit veritatis blanditiis iure
      vero maxime, in ut? Magnam dignissimos aperiam quidem deserunt illum unde adipisci magni doloremque?</p>
  </div>
</div>


```
