const readline = require("readline");

function calcularNivel(vitorias, derrotas) {
  let saldo = vitorias - derrotas;
  let nivel = "";

  if (saldo <= 10) {
    nivel = "Ferro";
  } else if (saldo <= 20) {
    nivel = "Bronze";
  } else if (saldo <= 50) {
    nivel = "Prata";
  } else if (saldo <= 80) {
    nivel = "Ouro";
  } else if (saldo <= 90) {
    nivel = "Diamante";
  } else if (saldo <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  return `O herói tem saldo de ${saldo} Vitórias e está no nível ${nivel}.`;
}

const dl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

dl.question("Digite a quantidade de vitórias: ", (vitorias) => {
  dl.question("Digite a quantidade de derrotas: ", (derrotas) => {
    const resultado = calcularNivel(parseInt(vitorias), parseInt(derrotas));
    console.log(resultado);

    dl.close();
  });
});
