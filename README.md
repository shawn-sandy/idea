# A simple way to visualize Ideas

> ## A design system is an agreed upon set of principles and a living suite of modular, resuable parts. This includes standards around style, color, language and behavior. The system allows us to work smarter and innovate on products faster, while providing a more predictable user experience.
>
> [Amélie Lamont @amelielamont](https://twitter.com/amelielamont/status/1072917354819059713)

---

## IDEA is a simple and easy to use customizable framework for creating design systems allowing you to turn your ideas and vision into products.

## Features

- Atomic driven system / structure
- Markdown / HTML driven content and components
- Vue.js integration
- Modular
- Customizbale

## Project setup

- Clone the repo `git clone https://github.com/shawn-sandy/idea`
- CD into you cloned repo
- Remove the git repo and make it your own `git remote rm origin`
- Add your repo `git add remote your repo url`
- Install packages
  ```
  yarn install
  ```
- Continue with the rest of the setup. Have fun.

## Content Management (Eleventy)

## Design System (DS) Setup

**DS Structure (Default Structure)**

While IDEA is based on the Atomic model (atoms, molecules, organisms, tempaltes, pages) popularized by Brad Frost, we choose a structure that we believe would more familiar to developers -

    * Attributes (Tokens)
    * Elements (Molecules)
    * Patterns (Organisms)
    * Screens (Templates)
    * Apps / Prototypes (Pages)

**Get started**

- View and edit with live updates run `yarn content`
-

Adding system components

- Filename structure use the `*.html.md` extensions making easier to format components see `content/elements/sample.html.md` for an example.

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

## Vue

### Compiles and hot-reloads for development

```
yarn run serve
```

### Compiles and minifies for production

```
yarn run build
```

### Run your tests

```
yarn run test
```

### Lints and fixes files

```
yarn run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Customization

## Licence (MIT)

## Contribute

## Enjoy

**Wakanda Forever :)**
