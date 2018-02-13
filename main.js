console.log('work');

function changeColor(){
	var colorName = document.querySelector('#getColorName')
	console.log(colorName.value);
	document.querySelector('.brush').style.backgroundColor = colorName.value;
	event.preventDefault();
}

var setColorButton = document.querySelector('#setColorButton')
setColorButton.addEventListener("click",changeColor)

document.querySelector('#getColorName').addEventListener("keydown",function(){
	if(13 == event.keyCode){
		// alert('browser enter key down');
		changeColor();
	}
})

for(var i = 0; i < 100; i++ ){
	var newDiv = document.createElement('div')
	newDiv.classList.add("square");
	document.querySelector('body').append(newDiv);
}