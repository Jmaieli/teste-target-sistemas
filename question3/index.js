const fs = require("fs");

const rawData = fs.readFileSync("dados.json", "utf8");

const dados = JSON.parse(rawData);

const faturamentosValidos = dados.filter((item) => item.valor > 0);

if (faturamentosValidos.length === 0) {
  console.log("Não há faturamento registrado para análise.");
} else {
  const menorFaturamento = Math.min(...faturamentosValidos.map((item) => item.valor));

  const maiorFaturamento = Math.max(...faturamentosValidos.map((item) => item.valor));

  const formatador = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  console.log(`Menor faturamento diário do mês: ${formatador.format(menorFaturamento)}`);
  console.log(`Maior faturamento diário do mês: ${formatador.format(maiorFaturamento)}`);
}
