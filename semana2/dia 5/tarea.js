// 3.1 votar en base a la edad.
var edad = 2;
if(edad > 17){
    console.log("Apto para votar")
}else{
    console.log("No apto para votar")
}

// 3.2 horas de trabajo
var hora = 70;
var pago = 10;
if(hora < 40){
    console.log("horas trabajo =" +hora)
    console.log("10 por hora")
    console.log("Total Pago =" +(pago*hora))
}else{
    console.log("horas trabajo =" +hora)
    console.log("10 por hora las primeras 40, luego 20 por hora")
    console.log((pago*40)+((hora-40)*(pago*2)))
} 
