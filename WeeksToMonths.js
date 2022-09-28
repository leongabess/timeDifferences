var semanas = 7;

var semanasIndividuais = semanas % 4;
var mesInteiro = semanas - semanasIndividuais;

console.log("Fazem aproximadamente " + mesInteiro/4 + " meses e " + semanasIndividuais + " semanas.")