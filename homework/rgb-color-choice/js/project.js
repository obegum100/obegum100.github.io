/*
  Project:
    RGB Color Choice

  Desired Functionality:
    1. User enters three values into each respective input: #red, #green, #blue
    2. User clicks "Change the Color!" button, afterwhich steps 3 and 4 occur
    3. The content within #colorful-text needs to update to reflect the user's input
      ex: If the user enters: 143, 56, 200 then #colorful-text should contain: rgb(143, 56, 200)
    4. The background color of #wrapper changes to the rgb-value the user entered
      ex: If the user enters: 143, 56, 200 then the background of #wrapper should be rgb(143, 56, 200)
  Hints:
    1. You will have to rely on string concatenation to build the rgb-value given the user's input: 'rgb(' + ...
*/



function changeBgOnClick() {
 var r = document.querySelector('#red').value
 var g = document.querySelector('#green').value
 var b = document.querySelector('#blue').value  
 document.querySelector('#wrapper').style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b +')'
 document.querySelector('#colorful-text').innerHTML = 'rgb(' + r + ',' + g + ',' + b +')'
}

document.querySelector('#color-button').onclick=changeBgOnClick


