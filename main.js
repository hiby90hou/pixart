console.log('work');

setColorButton = document.querySelector('#setColorButton').addEventListener("click",function(){
	colorName = document.querySelector('#getColorName')
	console.log(colorName.value);
	document.querySelector('.brush').style.backgroundColor = colorName.value;
	event.preventDefault();
})