import { format, parse } from "date-fns"

let myDate = "01/06/2022";
// parse =>
let dateAsStr = parse(myDate, "dd/MM/yyyy", new Date());
console.log(dateAsStr);

//format =>
let myDateStr = format(new Date(), "dd/MM/yyyy");
console.log(myDateStr);