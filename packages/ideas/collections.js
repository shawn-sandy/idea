/* eslint-disable no-unused-vars */
"use strict"

const sortingTags = (collection, tags = "atoms") => {
  return collection.getFilteredByTag(tags).sort((a, b) => {
    if (a.data.title > b.data.title) return -1
    else if (a.data.title < b.data.title) return 1
    else return 0
  })
}

module.exports = (eleventy, options = {}) => {


}
