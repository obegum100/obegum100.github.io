/*

  Users should be able to:
  1. Enter an item into #item
  2. Click on #clickme
  3. New item is appended as a <li> element to the #list
  4. After the <li> is added, the text inside #item should clear

  Requirements: Create a separate function, called appendItem, that accepts one argument, item, that is called when #clickme is clicked and appends the <li> to #list

  Bonus: Focus on #item after the item is added (research jQuery focus method)
  Itermediate Bonus: If the value of #item is blank, do not append the <li> and alert user (if/else conditions)
  Legendary Bonus: Remove individual <li> elements when they are clicked (will have to use $(this) + research how to remove dynamically added elements)

  To Get Started:
  1. Attach a .click() event to #clickme
  2. This .click() should call a function: handleClick
  3. Inside handleClick, create a variable, newItem, that is equal to the value of #item
  4. handleClick should call a separate function, named appendItem, and pass it the variable newItem
  5. handleClick should then clear the text inside of #item
  6. Finally, write the function, appendItem (see above)

*/
$('#clickme').click(handleClick)

function handleClick() {
  var newItem = $('#item').val()
  appendItem(newItem)
  clearTextField(newItem)
  }

function appendItem (item){
    $('#list').append('<li>' + item + '</li>')
  }

function clearTextField(item){
    $('#item').val('')
}

// Below here is what instructor did

$('#clickme').click(appendItem)

function appendItem(){
//1. Get user input
var newItem = $('#item').val()
var listItem = '<li>' + newItem + '</li>'
//2. Output a new list item
$('#list').append(listItem)
// 3. Focus on <input id = "item"> 
//combined 3. & 4.
$('#item').focus().val('')
//4. Clear <inout id="item"/> of any inout
    //$('#item').val('')

}
//does not work because it is looking for list items before the page loads. as in it should already be there.
// hence why we have to do a dynamically handleRemove
$('li').click(handleRemove)

function handleRemove() {
$(this).remove()
}

//this one will work, this will run on every click, but it sees if it is a list item, if isn't a list item it
//will short circuit and stop
//Remove dynamically created <li>'s'
$(document).on('click', 'li', handleRemove)



















