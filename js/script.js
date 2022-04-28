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


function fizzBuzz(){
	const outputWrap = document.querySelector('.js3-output-wrap');
	const outputIndex = document.querySelector('.js3-output1');
	const output = document.querySelector('.js3-output2');
	function loopx(){
		let arr = [];
		let fb=0; let fi=0; let bu=0;
		for (i=1; i<=100; i++) {
			if (i%3==0 && i%5==0){
				console.log('fizzbuzz');
				arr.push('fizzbuzz');
				fb += 1;
			}			
			else if (i%3==0){
				console.log('fizz');
				arr.push('fizz');
				fi += 1;
			}
			else if(i%5==0){
				console.log('buzz');
				arr.push('buzz');
				bu += 1;
			}
			else {
				console.log(i);	
				arr.push(i);
			}
		}
		arr.push(fb, fi, bu);
		return arr;
	}
	console.log(loopx().toString());
	fb = loopx()[100];
	fi = loopx()[101];
	bu = loopx()[102];
	
	output.textContent = loopx().toString().slice(0, -8);
	
	const contents1 = document.createTextNode("FizzBuzz: " + fb);
	const contents2 = document.createTextNode("Fizz: " + fi);
	const contents3 = document.createTextNode("Buzz: " + bu);
	
	let arrx = [contents1, contents2, contents3];
	for (i=0; i<3; i++){
		const contentsWrap = document.createElement('p');
		outputIndex.appendChild(contentsWrap);
		contentsWrap.appendChild(arrx[i]);	
	}
}