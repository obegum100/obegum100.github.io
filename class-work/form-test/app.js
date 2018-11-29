$('#myForm').submit(handleSubmit)

function handleSubmit(event) {
	console.log(event)

	//prevent a form from submitting, so now you have to use your own ajax code to submit the code
	//preventing one default behavior of an element
	event.preventDefault()

	var input = $('#name-input').val()

	$('#target').html(input)
}