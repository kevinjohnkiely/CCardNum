// Accept credit card input from user and return a number with only last 4 digits showing

// let inputUser = prompt("please enter your credit card number");



// this code only needed when loading from console
// if(isNaN(inputUser)) {
// 	// inputUser = prompt("Not a number! please try again");
// }

let inputUser, res;

document.getElementById('checkNum').addEventListener('click', function(){

	inputUser = document.getElementById("inputNum").value;
	// console.log(inputUser);

	 if (isNaN(inputUser) || inputUser < 10000000 || inputUser > 999999999) {
	 	document.getElementById('errorMsg').style.display = 'block';
    	document.getElementById('errorMsg').textContent = "Please enter number of 8 or 9 digits!!";
    	document.getElementById("inputNum").value = 0;

	  }

	  else {
	  	res = cardHide(inputUser);
	  	document.getElementById('errorMsg').style.display = 'none';
	  }

	document.getElementById('result').textContent = res;
});

const cardHide = (input) => {
	let arrNums = input.slice((input.length) - 4);
	let arrStars = input.slice(0, (input.length) - 4);
	let arrStars2 = Array.from(arrStars);
	let arrStars3=[];
	arrStars2.forEach(el => {
		
		arrStars3.push("*");
	})

	let finalArr = arrStars3.concat(arrNums);
	let stringRes = "";
	finalArr.forEach(el => {
		stringRes += el;
	})
	return stringRes;
};





