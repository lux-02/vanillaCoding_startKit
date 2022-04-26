function changeHeader(){
	const header = document.querySelector('.js1-header')
	const input = document.querySelector(".js1-input");
	header.textContent = input.value;
}