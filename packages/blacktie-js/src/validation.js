/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

var validate = (function () {
  var methods = {}
  var _each = function (arr, callback) {
    Array.prototype.forEach.call(arr, callback)
  }

/**
 * @description Validate HTML5 forms
 * @param {*} formID the id for the form
 * @param {*} elements input elements `input, textarea, select` or input class-name(s) `.js-required`
 * @param {Object} opts options, input error class-name, error display element {errorClass: 'border-danger', errorElm: '.js-error-msg' }
 */
methods.validate = function (formID, elements, opts = {}) {
    console.log(opts)

    // Loop through them...
    var _form = document.getElementById(formID)
    if (!_form) {
      _form = document.querySelector('form')
    }
    var inputs = _form.querySelectorAll(elements)
    _each(inputs, function (input) {
      input.addEventListener('invalid', function (event) {
        input.classList.add(opts.border || 'border-danger')
        /*  showing custom error message if we have in data attribute  */
        var customMessage = getCustomMessage(input)
        appendValidationMsg(input, customMessage)
      }, false)

      input.addEventListener('blur', function (event) {
        input.classList.remove(opts.border || 'border-danger')
        input.setCustomValidity('')
        if (!input.checkValidity()) {
          input.classList.add(opts.border || 'border-danger')
          /*  showing custom error message if we have in data attribute  */
          var customMessage = getCustomMessage(input)

          appendValidationMsg(input, customMessage, opts.errorElm || null)
        } else {
          appendValidationMsg(input, '*', opts.errorElm || null) // reset the message
        }
      })
    })
  }

  /**
   * @description
   * @param {*} inputElement
   * @param {*} message
   * @param {*} errorElm
   */
  function appendValidationMsg (inputElement, message, errorElm) {
    var parent = inputElement.parentNode
    var errMsg = parent.querySelector(errorElm || '.js-error-msg')
    // errMsg.textContent = '*'
    if (!errMsg) {
      throw new Error(`Error: missing validation selector`)
      // return confirm(message || inputElement.validationMessage)
    }
    errMsg && (errMsg.textContent = message || inputElement.validationMessage)
  }

  function getCustomMessage (inputElement) {
    if (inputElement.validity.valueMissing) {
      inputElement.setCustomValidity(inputElement.dataset.requirederror || inputElement.validationMessage)
      return inputElement.dataset.requirederror
    } else if (inputElement.validity.patternMismatch) {
      inputElement.setCustomValidity(inputElement.dataset.mismatch || inputElement.validationMessage)
      return inputElement.dataset.mismatch
    } else {
      return false
    }
  }

  return methods
})()
