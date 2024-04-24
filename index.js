function calcularSaldoDeVitorias(vitorias, derrotas) {
  return vitorias - derrotas;
}

let vitorias = 10;
let derrotas = 5;

let saldoVitorias = calcularSaldoDeVitorias(vitorias, derrotas);

let niveis = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"];
let pontos = [10, 20, 50, 80, 90, 100];

let i = 0;

while (vitorias > pontos[i]) {
  i++;
}

let nivel = niveis[i];

console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);