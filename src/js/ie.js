/* eslint-disable no-unused-vars */

/**
 * Detect if any version of Internet is running
 */


var isIE = () => {
  var ua = window.navigator.userAgent; //Check the userAgent property of the window.navigator object
  var msie = ua.indexOf('MSIE '); // IE 10 or older
  var trident = ua.indexOf('Trident/'); //IE 11
  console.log(msie, 'msie');
  return (msie > 0 || trident > 0);
}

if(isIE()) {
  const ieElm = document.getElementById('ie-warning')
  ieElm.classList.remove('ie-hidden')
  console.info("User is using IE/MSIE...");
}
