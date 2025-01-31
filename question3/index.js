const fs = require("fs");
const { exit } = require("process");

const rawData = fs.readFileSync(`${__dirname}/dados.json`, "utf8");

const dados = JSON.parse(rawData);

const faturamentosValidos = dados.filter((item) => item.valor > 0);

if (faturamentosValidos.length === 0) {
  console.log("Não há faturamento registrado para análise.");
  exit(0);
}

const menorFaturamento = Math.min(...faturamentosValidos.map((item) => item.valor));

const maiorFaturamento = Math.max(...faturamentosValidos.map((item) => item.valor));

const formatador = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

console.log(`Menor faturamento diário do mês: ${formatador.format(menorFaturamento)}`);
console.log(`Maior faturamento diário do mês: ${formatador.format(maiorFaturamento)}`);
