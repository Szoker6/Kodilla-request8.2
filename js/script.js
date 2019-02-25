'use strict';

var numberOfDegrees = document.getElementById('numberOfDegrees');
var waterCondition = document.getElementById('waterCondition');
var wayOfDres = document.getElementById('wayOfDress');
var buttonCelc = document.getElementById('buttonCelc');
var buttonFahr = document.getElementById('buttonFahr');
var degreesC;
var degreesF;

numberOfDegrees.innerHTML = 'Wcisnij guzik jeśli chcesz zamieić stopnie' + '<br><br>'; 

buttonCelc.addEventListener('click', function() { 	
    degreesC = window.prompt('Prosze podać stopnie celcjusza');
    var valueC = parseInt(degreesC);
    var degreesF = degreesC * 1.8 + 32;  
    if (!isNaN(valueC)) { 
        numberOfDegrees.innerHTML = 'Stopnie Celsjusza: ' + degreesC + '&#x2103 ' + '<br>' +
        'Stopnie Fahrenheita: ' + degreesF + '&#x2109' + '<br>'; 
    } else if (isNaN(valueC)) { 
        numberOfDegrees.innerHTML = 'Nie wpisałeś cyfry';
    } else {
        numberOfDegrees.innerHTML = 'Nic nie wpisałeś';
    }
}); 

buttonCelc.addEventListener('click', function() { 
    var valueC = parseInt(degreesC);
    if (valueC === 0) { 
        waterCondition.innerHTML = 'To jest temperatura zamarzania';
    } else if (valueC === 100) { 
        waterCondition.innerHTML = 'To jest temperatura wrzenia';
    } else if (valueC < 0) { 
        waterCondition.innerHTML = 'Woda zmieniła się w lód';
    } else if (valueC > 100) { 
        waterCondition.innerHTML = 'Woda zmieniła się w parę';
    } else {  
        waterCondition.innerHTML = '';
    } 
});

buttonCelc.addEventListener('click', function() {
    var valueC = parseInt(degreesC);
    if (valueC <= 0 ) {
        wayOfDress.innerHTML = 'Należy ubrać cieplutkie ubranie';
    } else if (valueC >= 20 && valueC < 40) {
        wayOfDress.innerHTML = 'Można spokojnie ubrać krótkie spodenki';
    } else if (valueC <= 10) {
        wayOfDress.innerHTML = 'Należy ubrać kurtkę i czapkę';
    } else {
        wayOfDress.innerHTML = '';
    }
});

buttonFahr.addEventListener('click', function() {	
    degreesF = window.prompt('Prosze podać stopnie Fahrenheita');
    var valueF = parseInt(degreesF);
    var degreesC = (degreesF -32) / 1.8;  
    if (!isNaN(valueF)) {
        numberOfDegrees.innerHTML = 'Stopnie Fahrenheita: ' + degreesF + '&#x2109 ' + '<br>' +
        'Stopnie Celsjusza: ' + degreesC + '&#x2103' + '<br>'; 
    } else if (isNaN(valueF)) {
        numberOfDegrees.innerHTML = 'Nie wpisałeś cyfry';
    } else {
        numberOfDegrees.innerHTML = 'Nic nie wpisałeś';
    }
});

buttonFahr.addEventListener('click', function() {
    var valueF = parseInt(degreesF);
    if(valueF === 32) {
        waterCondition.innerHTML = 'To jest temperatura zamarzania';
    } else if(valueF === 212) {
        waterCondition.innerHTML = 'To jest temperatura wrzenia';
    } else if(valueF < 32) {
        waterCondition.innerHTML = 'Woda zamienia się w lód';
    } else if(valueF > 212) {
        waterCondition.innerHTML = 'Woda zamienia się w parę';
    } else {
        waterCondition.innerHTML = '';
    }
});

buttonFahr.addEventListener('click', function() {
    var valueF = parseInt(degreesF);
    if (valueF <= 32) {
        wayOfDress.innerHTML = 'Należy ubrać cieplutkie ubranie';
    } else if (valueF >= 68 && degreesF < 104) {
        wayOfDress.innerHTML = 'Można spokojnie ubrać krótkie spodenki';
    } else if (valueF <= 50) {
        wayOfDress.innerHTML = 'Należy ubrać lekką kurtkę';
    } else {
        wayOfDress.innerHTML = '';
    }
});