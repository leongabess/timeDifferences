var minutoAtual = 59, horaAtual = 19, diaAtual = 2, mesAtual = 7, anoAtual = 2022;

var minutoInicial = 30, horaInicial = 20, diaInicial = 25, mesInicial = 4, anoInicial = 2001;


var minutoFinal = minutoAtual - minutoInicial;
var horaFinal = horaAtual - horaInicial;
var diaFinal = diaAtual - diaInicial; 
var mesFinal = mesAtual - mesInicial;
var anoFinal = anoAtual - anoInicial;

//Onde adicionar 12 equivale a 1 ano / 12 = 1 year
//Onde adicionar 30 equivale a 1 mês / 30 = 1 month
//Onde adicionar 24 equivale a 1 dia / 24 = 1 day
//Onde adicionar 60 equivale a 1 hora / 60 = 1 hour


if (diaAtual < diaInicial){
    var diaFinal = diaAtual + 30 - diaInicial;
    var mesFinal = mesAtual - mesInicial - 1;
} 

if (minutoAtual < minutoInicial) {
    var minutoFinal = minutoAtual + 60 - minutoInicial;
    var horaFinal = horaAtual - horaInicial - 1;
} 


if (horaAtual < horaInicial){
    var horaFinal = horaAtual + 24 - horaInicial;
    var diaFinal = diaFinal - 1;
}

if (horaFinal <= -1 && diaFinal >= 1){
    var diaFinal = diaFinal - 1;
    var horaFinal = 23;
}


if (minutoAtual < minutoInicial && horaAtual < horaInicial){
    var horaFinal = horaFinal - 1;
}


if (mesAtual < mesInicial){
    var mesFinal = mesAtual + 12 - mesInicial;
    anoFinal = anoFinal - 1;
}

if (mesFinal <= -1){
    mesFinal = 0;
}
if (mesFinal <= -1 && anoFinal >=1) {
    var anoFinal = anoFinal - 1;
}


if (anoInicial > anoAtual){
    console.log("Por favor, ao menos que você seja um viajante do tempo, coloque um ano válido")
} else {
    console.log("Fazem aproximadante " + anoFinal + " anos, " + mesFinal + " meses, " + diaFinal + " dias, " + horaFinal + " horas, e " + minutoFinal + " minutos.")
}

