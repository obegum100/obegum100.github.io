// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

// function firstImg() {
// 	  $('#bigimage').attr('src', 'img/1.jpg')
// }

// function secondImg() {
// 	  $('#bigimage').attr('src', 'img/2.jpg')
// }

// function thirdImg() {
// 	  $('#bigimage').attr('src', 'img/3.jpg')
// }

// function fourthImg() {
// 	  $('#bigimage').attr('src', 'img/4.jpg')
// }

// $('#first').click(firstImg)
// $('#second').click(secondImg)
// $('#third').click(thirdImg)
// $('#fourth').click(fourthImg)

function changeThumbImgOnClick() {
	console.log(this)
	//need to obtain data on which image clicked
	var src = $(this).attr('src')
	//output: #bigimage has changed
	$('#bigimage').attr('src', src)
}

$('.thumb').click(changeThumbImgOnClick)