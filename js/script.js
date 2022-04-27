function changeHeader(){
	const header = document.querySelector('.js1-header')
	const input = document.querySelector(".js1-input");
	header.textContent = input.value;
	if(!header.textContent) {
		header.textContent = "Typing.."
	}
}


function changeUser(){
	const username = document.querySelector('.js2-input').value;
	const introduction = "당신의 이름은 " + username + "입니다.";
	alert(introduction + "🎉");
}