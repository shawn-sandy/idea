---
layout: theme/layout.njk
tags: ["ideas"]
title: "Start Here"
date: 2018-12-02
stylesheet: "/styles.css"
---

## Install and Setup

- Clone the repo `git clone https://github.com/shawn-sandy/idea`
- CD into you cloned repo
- Remove the git repo and make it your own `git remote rm origin`
- Add your repo `git add remote your repo url`
- Install packages `yarn install`
- Continue with the rest of the setup.
- Have fun.

**DS Structure (Default Structure)**

IDEA is based on the Atomic model (atoms, molecules, organisms, templates, pages) popularized by Brad Frost, but with an opinionated customizable developer centric approach to naming and structure of the system

- Attributes (Tokens)
- Actions (Functions)
- Elements (Atoms)
- Components (Molecules)
- Patterns (Organisms)
- Screens (Templates)
- Apps / Prototypes (Pages)

**Get started**


- View and edit with live updates run `yarn content`

**Adding Modules**

- We use the `*.html` extensions for components allowing us to add HTML formatting via file association in IDE's support - `content/elements/sample.html.md` for an example.

**Component Example / Markdown Structure**

``` html
---
layout: base.njk
tags: 'elements'
title: Card
permalink: elements/{{ title | slug }}/index.html
icon: group_work
tags: ['ideas']
description: A simple card elements for shop
date: 2018-01-01
---

<div class="card sg-box-shadow-md rounded-0 col-4">
  <div class="p-2">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam ab nemo adipisci sit veritatis blanditiis iure
      vero maxime, in ut? Magnam dignissimos aperiam quidem deserunt illum unde adipisci magni doloremque?</p>
  </div>
</div>


```
