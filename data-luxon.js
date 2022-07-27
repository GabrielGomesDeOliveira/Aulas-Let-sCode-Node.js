import { DateTime } from "luxon";

// // pegar a data atual
// const now = DateTime.local();
// console.log(now.toLocaleString())

// // pegar a data de algum lugar especifico
// const now = DateTime.local().setZone("America/New_York");
// console.log(now.toLocaleString());

// // podemos especificar um formato desejavel
// let now = DateTime.local();
// // minus => subtrai 1 semana da data atual
// now = now.minus({ weeks: 1})
// console.log(now.toFormat("dd/MM/yyyy HH:mm"));

// // diff => faz a subtração entre as datas
// let now = DateTime.local();
// const nowPlus = now.plus({ days: 2});
// const result = nowPlus.diff(now, "hours");
// console.log(result);