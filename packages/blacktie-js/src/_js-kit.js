/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars

function _$(css, parent) {
  return (parent || document).querySelector(css)
}

function _$$(css, parent) {
  var nodes = (parent || document).querySelectorAll(css)
  return Array.prototype.slice.call(nodes, 0)
}

var _js = (function() {
  'use strict'

  // Create the methods object
  var methods = {}

  //
  // Methods
  //

  /**
   * Get an element in the DOM
   * @param  {String} selector The selector to match against
   * @param  {Node} scope      An element to search within [optional]
   * @return {Node}            The first matching element
   */
  methods.get = function(selector, scope) {
    if (!selector) throw new Error('Please provide a selector.')
    return scope
      ? scope.querySelector(selector)
      : document.querySelector(selector)
  }

  /**
   * Get all matching elements in the DOM
   * @param  {String} selector The selector to match against
   * @param  {Node} scope      An element to search within [optional]
   * @return {NodeList}        The matching elements
   */
  methods.getAll = function(selector, scope) {
    if (!selector) throw new Error('Please provide a selector.')
    return scope
      ? scope.querySelectorAll(selector)
      : document.querySelectorAll(selector)
  }

  /**
   * Setup an event listener
   * @param  {Node}     elem        The element to attach the listener to
   * @param  {String}   event       The event to listen for
   * @param  {Function} callback    The callback to run on the event
   * @param  {Boolean}  useCapture  If true, set useCapture to true [optional]
   */
  methods.on = function(elem, event, callback, useCapture) {
    if (!elem)
      throw new Error('Please provide an element to attach the event to.')
    if (!event) throw new Error('Please provide an event to listen for.')
    if (!callback || typeof callback !== 'function')
      throw new Error('Please provide a valid callback function to run')
    elem.addEventListener(event, callback, useCapture || false)
  }

  /**
   * Get the URL parameters
   * source: https://css-tricks.com/snippets/javascript/get-url-variables/
   * @param  {String} url The URL
   * @return {Object}     The URL parameters
   */
  methods.getParams = function(url) {
    var params = {}
    var parser = document.createElement('a')
    parser.href = url || window.location.href
    var query = parser.search.substring(1)
    var vars = query.split('&')
    if (vars.length < 2) return params
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=')
      params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1])
    }
    return params
  }

  /*!
 * Run event after the DOM is ready
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Function} fn Callback function
 */
  methods.ready = function(fn) {
    // Sanity check
    if (typeof fn !== 'function') return

    // If document is already loaded, run method
    if (
      document.readyState === 'interactive' ||
      document.readyState === 'complete'
    ) {
      return fn()
    }

    // Otherwise, wait until document is loaded
    document.addEventListener('DOMContentLoaded', fn, false)
  }

  /**
   * Traverse loop and call a method
   */
  methods.each = function(selector, callback) {
    if (!selector) throw new Error('Please provide a selector.')
    if (!callback || typeof callback !== 'function')
      throw new Error('Please provide a valid callback function to run')

    var elms = document.querySelectorAll(selector)

    Array.prototype.forEach.call(elms, callback)
  }

  /*!
 * Determine if an element is in the viewport
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}    elem The element
 * @return {Boolean}      Returns true if element is in the viewport
 */
  methods.isInViewport = function(elem) {
    var distance = elem.getBoundingClientRect()
    return (
      distance.top >= 0 &&
      distance.left >= 0 &&
      distance.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
      distance.right <=
      (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  // Expose the public methods
  return methods
})()
