var checkboxes = document.querySelectorAll('input')

var customAlert = function (event) {
  alert(event.target.value)
}

checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener('change', customAlert) // add event listener
})
/* research: https://www.w3schools.com/jsref/met_element_addeventlistener.asp */
