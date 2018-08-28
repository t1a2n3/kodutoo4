function registerServiceWorker(){
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful: ', registration)
            }, function (err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err)
            })
        }
}

var ticketNumbersVariableNames = [];
var numberCheckedValues = [];
var ticketNumbers = [];
var randomNumbers = [];
var numbers = [];
var options = [];
var betSize = null;
var koeficient = null;
var numbersWork = true;
var generateNumbersWork = true;

var winTable = new Array(10);
winTable[0] =[0, 1.5, null, null, null, null, null, null, null, null];
winTable[1] =[0, 0, 5, null, null, null, null, null, null, null];
winTable[2] =[0, 0, 1, 11, null, null, null, null, null, null];
winTable[3] =[1, 0, 0, 2, 20, null, null, null, null, null];
winTable[4] =[1, 0, 0, 1, 4, 50, null, null, null, null];
winTable[5] =[1, 0, 0, 0, 2, 20, 200, null, null, null];
winTable[6] =[2, 0, 0, 0, 1, 4, 40, 600, null];
winTable[7] =[2, 0, 0, 0, 1, 2, 10, 100, 2000, null];
winTable[8] =[3, 0, 0, 0, 0, 1, 5, 50, 400, 7000, null];
winTable[9] =[3, 0, 0, 0, 0, 1, 2, 10, 140, 1400, 20000];

window.onload = function () {	
	registerServiceWorker();

	document.getElementById("bet").style.display = "none";
	document.getElementById("betSize").style.display = "none";
	document.getElementById("fixBet").style.display = "none";
	document.getElementById("fixNumbers").style.display = "none";
	document.getElementById("rightNumbers").style.display = "none";
	document.getElementById("winTitle").style.display = "none";
	document.getElementById("playAgain").style.display = "none";

	for(var i=1; i<=10; i++){
		randomNumbers.push("randomNumber"+i);
	}
	
	document.getElementById("titleKeno").style.display = "none";
	
	for(var i=0; i<10; i++){
		document.getElementById(randomNumbers[i]).style.display = "none";
	}
	
	document.getElementById("generateNumbers").style.display = "none";
	
	for(var i = 1; i <= 10; i++) {
		ticketNumbersVariableNames.push("ticketNumberPlace" + i);
	}
	
	for(var i = 1; i <= 64; i++) {
		numberCheckedValues.push(false);
	}

	for(var i = 1; i <= 10; i++) {
		options.push("randomNumber"+i);
	}
}

function lotoNumbers(value) {
	if(numbersWork == true){
		if(numberCheckedValues[value-1] == false){
			if(ticketNumbers.length<10){
				ticketNumbers.push(value);
				for(var i=0; i<ticketNumbers.length; i++){
					document.getElementById(ticketNumbersVariableNames[i]).value = ticketNumbers[i];
				}
			}
			numberCheckedValues[value-1] = true;
		}else if(numberCheckedValues[value-1] == true){
			ticketNumbers.splice(ticketNumbers.indexOf(value), 1);
			document.getElementById(ticketNumbersVariableNames[ticketNumbers.length]).value = "";
			for(var i=0; i<ticketNumbers.length; i++){
				document.getElementById(ticketNumbersVariableNames[i]).value = ticketNumbers[i];
			}
			numberCheckedValues[value-1] = false;
		}
		
		if(ticketNumbers.length==0){
			document.getElementById("fixNumbers").style.display = "none";
		}else{
			document.getElementById("fixNumbers").style.display = "block";
		}
	}
}

function generateNumbers() {
	if(generateNumbersWork == true){
		numbers = [];
	for(var i=0; i<10; i++){
		document.getElementById(options[i]).value = "";
	}
	
    for(var i=0; i<10; i++){
        while(true){
			var number = Math.floor((Math.random() * 64) + 1);
			console.log(number);
			if(!numbers.includes(number)){
				numbers.push(number);
				break;
			}
		}
		document.getElementById(options[i]).value = numbers[i];
    }
	
	document.getElementById("rightNumbers").style.display = "block";
	
	var counter = 0;
	
	for(var i=0; i<ticketNumbers.length; i++){
		for(var j=0; j<numbers.length; j++){
			if(ticketNumbers[i]==numbers[j]){
				counter++;
			}
		}
	}
	
	if(counter==1){
		document.getElementById("rightNumbers").innerHTML = "Teie piletil on "+counter+" õige number";
	}else{
		document.getElementById("rightNumbers").innerHTML = "Teie piletil on "+counter+" õiget numbrit";
	}
	
	document.getElementById("winTitle").style.display = "block";
	
	koeficient = winTable[ticketNumbers.length-1][counter];
	if(betSize*koeficient!=1){
		document.getElementById("winTitle").innerHTML = "Teie võidusumma on "+betSize*koeficient+" eurot";
	}else{
		document.getElementById("winTitle").innerHTML = "Teie võidusumma on "+betSize*koeficient+" euro";
	}
	
	document.getElementById("playAgain").style.display = "block";
	generateNumbersWork = false;
	}	
}

function fixNumbers() {
	document.getElementById("bet").style.display = "block";
	document.getElementById("betSize").style.display = "block";
	document.getElementById("fixBet").style.display = "block";
	numbersWork = false;
}

function fixBet() {
	document.getElementById("titleKeno").style.display = "block";
	
	for(var i=0; i<10; i++){
		document.getElementById(randomNumbers[i]).style.display = "inline-block";
	}
	
	document.getElementById("generateNumbers").style.display = "block";
	
	betSize = document.getElementById("betSize").value;
}

function playAgain() {
	window.location.href='http://www.tlu.ee/~t1a2n3/Keno/';
}






