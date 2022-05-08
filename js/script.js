// JS.1 - CRUD
function changeHeader(){
	const header = document.querySelector('.js1-header')
	const input = document.querySelector(".js1-input");
	header.textContent = input.value;
	if(!header.textContent) {
		header.textContent = "Typing.."
	}
}


// JS.2 - Variables

function changeUser(){
	const username = document.querySelector('.js2-input').value;
	const introduction = "당신의 이름은 " + username + "입니다.";
	alert(introduction + "🎉");
}


// JS.3 - FizzBuzz

function fizzBuzz(){
	const outputWrap = document.querySelector('.js3-output-wrap');
	const outputIndex = document.querySelector('.js3-output1');
	const output = document.querySelector('.js3-output2');
	function loopx(){
		let arr = [];
		let fb=0; let fi=0; let bu=0;
		for (i=1; i<=100; i++) {
			if (i%3==0 && i%5==0){
				arr.push('fizzbuzz');
				fb += 1;
			}			
			else if (i%3==0){
				arr.push('fizz');
				fi += 1;
			}
			else if(i%5==0){
				arr.push('buzz');
				bu += 1;
			}
			else {
				arr.push(i);
			}
		}
		arr.push(fb, fi, bu);
		return arr;
	}
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


// JS.4 - Find KEN

function findKen(array){
	let arrayArea = document.querySelector('.js4-par');
	let returnArea = document.querySelector('.js4-ret');
	let kenLoc = array.indexOf('Ken');
	arrayArea.textContent = array.toString();
	returnArea.textContent = (kenLoc+1).toString()+"번째 위치에 있네요!";
}

const kenArr = [['Jett', 'Leo', 'Ken', 'Justin'], ["Lee", "Park", "Jung", "Ken"]]
findKen(kenArr[0]);

let arrState = 1;
	
function changeArray(){
	const changeArea = document.querySelector('.js4-btn');	
	if(arrState === 1){
		findKen(kenArr[1]);
		changeArea.textContent = "1번 예시 보기"
		arrState = 2;
	}
	else {
		findKen(kenArr[0]);
		changeArea.textContent = "2번 예시 보기"
		arrState = 1;
	}
}

// JS.5 - BACOBACOBACOBA

function baco(){
	const bacoWrap = document.querySelector('.js5-baco');
	let y = document.querySelector('.js5-param');
	let resultArr = [];
	if(y.value){
		for(let i=0; i<y.value; i++){
			if(i%2==0){
				resultArr.push("바");
			}
			else{
				resultArr.push("코");
			}
		}
		bacoWrap.textContent = resultArr.join('');
		return resultArr;
	}
	else {
		y.value = 1;
		baco();
	}
}

baco();


// JS.6 - Minimum Number

function findMin(array){
	let arrayArea = document.querySelector('.js6-par');
	let returnArea = document.querySelector('.js6-ret');
	let min = 999;
	
	for(let i=0; i<array.length; i++){
		if(min > array[i]){
			min = array[i];
		}
	}	
	arrayArea.textContent = array.toString();
	returnArea.textContent = "제일 작은 숫자는 "+min.toString()+"입니다!";
}

const numArr = [[5, 4, 3, 2, 1], [4, 5, 1, 2, 3], [10, 7, 13, 2, 6]];
findMin(numArr[0]);

function changeArray2(){
	const changeArea = document.querySelector('.js6-btn');	
	switch (arrState){
		case 1 :
			findMin(numArr[1]);
			changeArea.textContent = "3번 예시 보기"
			arrState = 2;
			break;
		case 2 :
			findMin(numArr[2]);
			changeArea.textContent = "1번 예시 보기"
			arrState = 3;
			break;
		default :
			findMin(numArr[0]);
			changeArea.textContent = "2번 예시 보기"
			arrState = 1;
	}
}



// JS.7 - Double Array

function makeDouble(array){
	let arrayArea = document.querySelector('.js7-par');
	let returnArea = document.querySelector('.js7-ret');
	let copyArr = [...array];
	let returnArr = [];
	
	for (let i=0; i<copyArr.length; i++){
		returnArr[i] = copyArr[i];
		returnArr[i+copyArr.length] = copyArr[i];
	}
	
	arrayArea.textContent = copyArr.toString();
	returnArea.textContent = returnArr.toString()+"입니다!";
}

const doubleArr = [[1, 2], [1, 2, 3], [5, 7, 3, 2]];
makeDouble(doubleArr[0]);

function changeArray3(){
	const changeArea = document.querySelector('.js7-btn');	
	switch (arrState){
		case 1 :
			makeDouble(doubleArr[1]);
			changeArea.textContent = "3번 예시 보기"
			arrState = 2;
			break;
		case 2 :
			makeDouble(doubleArr[2]);
			changeArea.textContent = "1번 예시 보기"
			arrState = 3;
			break;
		default :
			makeDouble(doubleArr[0]);
			changeArea.textContent = "2번 예시 보기"
			arrState = 1;
	}
}




// JS.8 - Split Int Array

function splitArr(int){
	let arrayArea = document.querySelector('.js8-par');
	let returnArea = document.querySelector('.js8-ret');
	let returnArr = [];
	let x = int.toString();
	
	for (let i=0; i<x.length; i++){
		returnArr.push(parseInt(x[i]));
	}
	
	arrayArea.textContent = int.toString();
	returnArea.textContent = '['+returnArr+"] 입니다!";
}

const testArr = [2854, 96586, 136326];
splitArr(testArr[0]);

function changeArray4(){
	const changeArea = document.querySelector('.js8-btn');	
	switch (arrState){
		case 1 :
			splitArr(testArr[1]);
			changeArea.textContent = "3번 예시 보기"
			arrState = 2;
			break;
		case 2 :
			splitArr(testArr[2]);
			changeArea.textContent = "1번 예시 보기"
			arrState = 3;
			break;
		default :
			splitArr(testArr[0]);
			changeArea.textContent = "2번 예시 보기"
			arrState = 1;
	}
}



// JS.9 - Make Object
function makeObj(arr1, arr2){
	let arrayArea = document.querySelector('.js9-par');
	let returnArea = document.querySelector('.js9-ret');
	let returnObj = {};
	let arrx = [];
	
	for (let prop in arr1){
		returnObj[arr1[prop]] = arr2[prop];
	}
	
	arrx.push("{");
	for (let prop in returnObj) {
		if(prop && arrx[1]){
			arrx.push(", ");
		}
		arrx.push(prop);
		arrx.push(": ");
		arrx.push(returnObj[prop]);
	}
	arrx.push("}");
	
	arrayArea.textContent = arr1.toString() + " / " + arr2.toString();
	returnArea.textContent = arrx.join('') + "입니다!";
}

const js9param = [[["A", "B", "C"], [10, 20, 30]], [["D", "E", "F", "G"], [7, 4, 6, 8]], [["Jett", "Ken"], [30, 40]]];
makeObj(js9param[0][0], js9param[0][1]);

function changeArray5(){
	const changeArea = document.querySelector('.js9-btn');	
	switch (arrState){
		case 1 :
			makeObj(js9param[1][0], js9param[1][1]);
			changeArea.textContent = "3번 예시 보기"
			arrState = 2;
			break;
		case 2 :
			makeObj(js9param[2][0], js9param[2][1]);
			changeArea.textContent = "1번 예시 보기"
			arrState = 3;
			break;
		default :
			makeObj(js9param[0][0], js9param[0][1]);
			changeArea.textContent = "2번 예시 보기"
			arrState = 1;
	}
}