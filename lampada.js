const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');
const informacao = document.getElementById ('informacao');
const turnOnOff = document.getElementById ('turnOnOff');

function isLampBroken () {
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOn () {  
    if (!isLampBroken ()) {
        lamp.src = 'img/ligada.jpg'; 
    }
}

function lampOff () {
    if (!isLampBroken ()) {
        lamp.src = 'img/desligada.jpg'
    }
}

function lampBroker () {
    lamp.src = 'img/quebrada.jpg'
    informacao.textContent = "Para voltar a ligar e desligar a lâmpada, dê F5 no site!"
}

function lampOnOff() {
    if ( turnOnOff.textContent == 'Ligar' ){
        lampOn();
        turnOnOff.textContent = 'Desligar';
    }else{
        if (turnOnOff.textContent == 'Desligar'){
            lampOff();
            turnOnOff.textContent = 'Ligar';
        }
    }
}



turnOnOff.addEventListener ('click', lampOnOff);
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener ('dblclick', lampBroker)
