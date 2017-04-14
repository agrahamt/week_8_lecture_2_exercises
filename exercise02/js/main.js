var buttonEl = document.querySelector('.calc-btn')
var combineNumbers = function(x, y) {
  return x + y
}
var getResult = function() {
  var result = combineNumbers(3, 5)
  return 'the result is ' + result
}
// Your code goes here
buttonEl.addEventListener("click", getResult)
/* research: https://www.w3schools.com/jsref/met_element_addeventlistener.asp */
