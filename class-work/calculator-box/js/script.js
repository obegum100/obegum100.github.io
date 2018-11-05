 /*
	
	Add .click() handlers for each of the boxes:

	A) Boxes #a10, #a20, and #a30 should each add 10, 20, and 30, respectively, to the value in the center box, #out

	B) Boxes #m10, #m20, and #m30 should each subtract 10, 20, and 30, respectively, from the value in the center box, #out

	C) #red and #blue should change the background color of #out to red and blue, respectively
	
	D) #out should change the background of #out to white, and set the value back to zero

	HINT: define a variable, var count = 0 outside of any functions. Use this variable to keep track of what to display inside of #out
	Ex: when the user clicks #a10, add 10 to the "count" and then reflect this change in the HTML

	jQuery Methods Needed:
	- .click()
	- .html()
	- .css()

*/

//variable assignment
var total = 0

function addTens() {
//then we have variable reassignment, you are changing the value of total, by reassigning
total = total + 10// total += 10
$('#out').html(total)
}

function addTwenties() {
total += 20
$('#out').html(total)
}

function addThirties() {
total += 30
$('#out').html(total)
}

function changeRed() {
$('#out').css('background', 'red')
}

function changeBlue() {
$('#out').css('background', 'blue')

}

function minusThirties() {
total -= 30
$('#out').html(total)
}

function minusTwenties() {
total -= 20
$('#out').html(total)
}

function minusTens() {
total -= 10
$('#out').html(total)
}

function reset() {
total = 0

//this is called jQuery method chaining 
$('#out').css('background', 'white').html(total)
}


$('#a10').click(addTens)
$('#a20').click(addTwenties)
$('#a30').click(addThirties)
$('#m10').click(minusTens)
$('#m20').click(minusTwenties)
$('#m30').click(minusThirties)

$('#red').click(changeRed)
$('#blue').click(changeBlue)
$('#out').click(reset)



