
console.log('work');

function changeColor(){
	var colorName = document.querySelector('#getColorName')
	console.log(colorName.value);
	document.querySelector('.brush').style.backgroundColor = colorName.value;
	event.preventDefault();
}

var setColorButton = document.querySelector('#setColorButton')
// setColorButton.addEventListener("click",changeColor)
document.querySelector('.brush').addEventListener("mouseover",changeColor)

document.querySelector('#getColorName').addEventListener("keydown",function(){
	if(13 == event.keyCode){
		// alert('browser enter key down');
		changeColor();
	}
})

for(var i = 0; i < 100; i++ ){
	var newDiv = document.createElement('div')
	newDiv.classList.add("square");
	newDiv.addEventListener("click",function(event){

		event.target.style.backgroundColor = document.querySelector('#getColorName').value;
	})
	document.querySelector('body').append(newDiv);
}

function changePicture(){
	var movieName = document.querySelector('#getMovieName').value
	console.log(movieName.value);

	$.ajax(options(movieName)).done(function(response){
		console.log(response)
		var $newImg = $('<img>')
		$newImg.attr("src", response["Poster"]);

		$('.stampBrush').append($newImg)
		event.preventDefault();
	})
}

function options(search){
  return {url: 'http://www.omdbapi.com/?apikey=2f6435d9&t='+ search}
}

document.querySelector('.stampBrush').addEventListener("mouseover",changePicture)
