

const jsValidate = () => {
  const _form = document.getElementById(formID)
  const inputs = _form.querySelectorAll(elements)
  forEach(inputs, function (input) {
    input.addEventListener('invalid', function (event) {
      input.classList.add('border-danger')
      /*  showing custom error message if we have in data attribute  */
      const customMessage = getCustomMessage(input)
      appendValidationMsg(input, customMessage)
    }, false)

    input.addEventListener('blur', function (event) {
      input.classList.remove('border-danger')
      if (!input.checkValidity()) {
        input.classList.add('border-danger')
        /*  showing custom error message if we have in data attribute  */
        var customMessage = getCustomMessage(input)
        appendValidationMsg(input, customMessage)
      } else {
        appendValidationMsg(input, '*') // reset the message
      }
    })
  })
}

export default jsValidate
