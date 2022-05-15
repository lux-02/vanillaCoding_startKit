//Hyper Param (temp)
const inputArea = document.getElementById('input-param');
const form = document.querySelector('form');

makePalette("default");

//makePalette('100 101 148');
form.addEventListener('submit', ()=>{(removeCircle(), makePalette(inputArea.value))});

function removeCircle(){
	const mainArea = document.querySelector('main');
	mainArea.removeChild(circledivwrap);
}


//make every
function makePalette(x){
	const mainArea = document.querySelector('main');
	const circledivwrap = document.createElement('div');
	mainArea.appendChild(circledivwrap);
	circledivwrap.setAttribute('id', 'circledivwrap');
	
	let inputData;
	x == "default" ? inputData = '299 081 048' : inputData = x;
	let id = inputData.split(' ');
	
	const currentHsl = document.querySelector('span');
	currentHsl.textContent = inputData;
	
	//make array
	function changeL(){ //Lightness Value Change(0~100)
		let arr = [];
		for (let i=0; i<10; i++){ 
			arr.push("hsl("+id[0]+","+id[1]+"%,"+i+id[2][2]+"%)");
		}
		return arr;
	}

	function changeH(hval){ //Hue Value Change(hval param) -> (30, 120, 150, 180, 210, 240, 300)
		let arr2 = [];
		for (let i=0; i<10; i++){
			let pid = parseInt(id[0])+hval;
			arr2.push("hsl("+pid+","+id[1]+"%,"+i+id[2][2]+"%)");
		}
		return arr2;
	}
		
	// make Circle
	function makeCircle(arr){
		const circledivwrap = document.getElementById('circledivwrap');
		const circlediv = document.createElement('div');
		circledivwrap.appendChild(circlediv);
		circlediv.setAttribute('class', 'circlediv flex flex-center flex-row');
		for (let i=0; i<10; i++){
			const circleWrap = document.createElement('div');
			const circle = document.createElement('div');
			const br = document.createElement('br');
			const br2 = document.createElement('br');
			const ctextH = document.createTextNode('H'+arr[i][4]+arr[i][5]+arr[i][6]);	
			const ctextS = document.createTextNode('S'+arr[i][8]+arr[i][9]+arr[i][10]);	
			const ctextL = document.createTextNode('L'+arr[i][13]+arr[i][14]+arr[i][15]);	
			const ctext = document.createElement('p');
			circlediv.appendChild(circleWrap);
			circleWrap.appendChild(circle);
			circleWrap.appendChild(ctext);
			ctext.appendChild(ctextH);
			ctext.appendChild(br);
			ctext.appendChild(ctextS);
			ctext.appendChild(br2);
			ctext.appendChild(ctextL);
			circleWrap.setAttribute('class', 'circle-wrap flex flex-center');
			circle.setAttribute('class', 'circle');
			ctext.setAttribute('class', 'hsltext');
			circle.style.backgroundColor = arr[i];
		}
	}
	

	let HvalArr = [30, 120, 150, 180, 210, 240, 300];
	
	for(let x=0; x<HvalArr.length; x++){
		makeCircle(changeH(HvalArr[x]));
	}
	
}


