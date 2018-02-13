console.log('work');

function changeColor(){
	colorName = document.querySelector('#getColorName')
	console.log(colorName.value);
	document.querySelector('.brush').style.backgroundColor = colorName.value;
	event.preventDefault();
}

setColorButton = document.querySelector('#setColorButton')
setColorButton.addEventListener("click",changeColor)

document.querySelector('#getColorName').addEventListener("keydown",function(){
	if(13 == event.keyCode){
		// alert('browser enter key down');
		changeColor();
	}
})