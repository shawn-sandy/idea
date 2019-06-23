/* eslint-disable no-unused-vars */
var jsValidate = function() {

  var methods = {};

  var forEach = function(arr, callback) {
      Array.prototype.forEach.call(arr, callback);
    };

  methods.validate = function(formID, inputElm, options = {}) {

    var borderClass = options.borderClass || "border_danger";
    var messageElm = options.messages || ".js-error-message"


    var _form = document.getElementById(formID);
    var inputs = _form.querySelectorAll(inputElm);

   forEach(inputs, function(input) {
      input.addEventListener(
        "invalid",
        function(e) {
          input.classList.add(borderClass);
          /*  showing custom error message if we have in data attribute  */
          const customMessage = getCustomMessage(input);
          appendValidationMsg(input, customMessage, messageElm);
        },
        false
      );

      input.addEventListener("blur", function(e) {
        input.classList.remove(borderClass);
        if (!input.checkValidity()) {
          input.classList.add(borderClass);
          /*  showing custom error message if we have in data attribute  */
          var customMessage = getCustomMessage(input);
          appendValidationMsg(input, customMessage, messageElm);
        } else {
          appendValidationMsg(input, "*", messageElm); // reset the message
        }
      });
    });

  }

  function appendValidationMsg(inputElement, message, messageElm) {
    var parent = inputElement.parentNode;
    var errMsg = parent.querySelector(messageElm);
    // errMsg.textContent = '*'
    errMsg && (errMsg.textContent = message || inputElement.validationMessage);
  }

  function getCustomMessage(inputElement) {
    if (inputElement.validity.valueMissing) {
      return inputElement.dataset.requirederror;
    } else if (inputElement.validity.typeMismatch) {
      return inputElement.dataset.typeerror;
    } else {
      return false;
    }
  }

  return methods;

};
