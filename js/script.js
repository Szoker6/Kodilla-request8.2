'use strict';

var output = document.getElementById('output');
var outputinfo = document.getElementById('outputinfo');
var button = document.getElementById('button');
var button2 = document.getElementById('button2');
var degreesC;
var degreesF;

output.innerHTML = 'Wcisnij guzik jeśli chcesz zamieić stopnie' + '<br><br>'; 

button.addEventListener('click', function() { 	
    degreesC = window.prompt('Prosze podać stopnie celcjusza');
    var valueC = parseInt(degreesC);
    var degreesF = degreesC * 1.8 + 32;  
    if (!isNaN(valueC)) { 
        output.innerHTML = 'Stopnie Celsjusza: ' + degreesC + '&#x2103 ' + '<br>' +
        'Stopnie Fahrenheita: ' + degreesF + '&#x2109' + '<br>'; 
    } else if (isNaN(valueC)) { 
        output.innerHTML = 'Nie wpisałeś cyfry';
    } else {
        output.innerHTML = 'Nic nie wpisałeś';
    }
}); 

button.addEventListener('click', function() { 
    var outputinfo = document.getElementById('outputinfo');
    var valueC = parseInt(degreesC);
    if (valueC === 0) { 
        outputinfo.innerHTML = 'To jest temperatura zamarzania';
    } else if (valueC === 100) { 
        outputinfo.innerHTML = 'To jest temperatura wrzenia';
    } else if (valueC < 0) { 
        outputinfo.innerHTML = 'Woda zmieniła się w lód';
    } else if (valueC > 100) { 
        outputinfo.innerHTML = 'Woda zmieniła się w parę';
    } else {  
        outputinfo.innerHTML = '';
    } 
});

button.addEventListener('click', function()
{
    var outputinfo2 = document.getElementById('outputinfo2');
    var valueC = parseInt(degreesC);
    if (valueC <= 0 ) {
        outputinfo2.innerHTML = 'Należy ubrać cieplutkie ubranie';
    } else if (valueC >= 20 && valueC < 40) {
        outputinfo2.innerHTML = 'Można spokojnie ubrać krótkie spodenki';
    } else if (valueC <= 10) {
        outputinfo2.innerHTML = 'Należy ubrać kurtkę i czapkę';
    } else {
        outputinfo2.innerHTML = '';
    }
});

button2.addEventListener('click', function() {	
    degreesF = window.prompt('Prosze podać stopnie Fahrenheita');
    var valueF = parseInt(degreesF);
    var degreesC = (degreesF -32) / 1.8;  
    if (!isNaN(valueF)) {
        output.innerHTML = 'Stopnie Fahrenheita: ' + degreesF + '&#x2109 ' + '<br>' +
        'Stopnie Celsjusza: ' + degreesC + '&#x2103' + '<br>'; 
    } else if (isNaN(valueF)) {
        output.innerHTML = 'Nie wpisałeś cyfry';
    } else {
        output.innerHTML = 'Nic nie wpisałeś';
    }
});

button2.addEventListener('click', function() {
    var outputinfo = document.getElementById('outputinfo');
    var valueF = parseInt(degreesF);
    if(valueF === 32) {
        outputinfo.innerHTML = 'To jest temperatura zamarzania';
    } else if(valueF === 212) {
        outputinfo.innerHTML = 'To jest temperatura wrzenia';
    } else if(valueF < 32) {
        outputinfo.innerHTML = 'Woda zamienia się w lód';
    } else if(valueF > 212) {
        outputinfo.innerHTML = 'Woda zamienia się w parę';
    } else {
        outputinfo.innerHTML = '';
    }
});

button2.addEventListener('click', function() {
    var outputinfo2 = document.getElementById('outputinfo2');
    var valueF = parseInt(degreesF);
    if (valueF <= 32) {
        outputinfo2.innerHTML = 'Należy ubrać cieplutkie ubranie';
    } else if (valueF >= 68 && degreesF < 104) {
        outputinfo2.innerHTML = 'Można spokojnie ubrać krótkie spodenki';
    } else if (valueF <= 50) {
        outputinfo2.innerHTML = 'Należy ubrać lekką kurtkę';
    } else {
        outputinfo2.innerHTML = '';
    }
});