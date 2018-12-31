---
layout: theme/layout.njk
title: Introduction
date: 2018-12-01
---

{% import "macros/collections.njk" as collection %}

#

_Idea is currently in early production beta, feel free to open an issues for features, bugs suggestions etc._

## IDEA(beta) is a easy to use Markdown, HTML, CSS and JAVASCRIPT toolkit (framework if you prefer) for building, managing and generating design systems. The IDEA - make it simple for anyone on a product development team to create, edit document or share in the building of a design system

---

> ### A design system is an agreed upon set of principles and a living suite of modular, resuable parts. This includes standards around style, color, language and behavior. The system allows us to work smarter and innovate on products faster, while providing a more predictable user experience.

> <a href="https://twitter.com/amelielamont/status/1072917354819059713" target="blank">**Amélie Lamont @amelielamont**</a>

---

## Features

- Atomic driven component system / structure
- Markdown / HTML driven content and components
- Vue.js integration
- Javascript based template **[Nunjucks](https://mozilla.github.io/nunjucks/)**, Handlebars, Mustache...
- Modular
- IndexDB integration
- Webpack / Gulp
- Customizable

## Project setup

- Clone the repo `git clone https://github.com/shawn-sandy/idea`
- CD into you cloned repo
- Remove the git repo and make it your own `git remote rm origin`
- Add your repo `git add remote your repo url`
- Install packages `yarn install`
- Continue with the rest of the setup.
- Have fun.
- 
---

{{ collection.posts(collections.ideas, 'py-2') }}
