
let op ;
let numeros;
let myarray = [];
let num1 = 0;
let num2 = 0;
let array2;
let borrador;


alert("Hola, bienvenido a la calculadora");

while(true){
    
    do{
        op = prompt ('Elije una de las siguientes operacion: +, -, x, /', ' ');
        op = op.trim();

        if(op === '+' || op === '-' || op === '/' || op === 'x'){
            //lets go
            alert("funciona")
        }else{
            alert("datos introducidos erroneamente, vuelve a probar");
        }
    }while(op !== '+' && op !== '-' && op !== 'x' && op !== '/');


    do{
        numeros = prompt ("Pon dos numeros separados por un espacio entre ellos");
        numeros = numeros.trim();
        myarray = numeros.split(" ");
        array2 = myarray.filter(Number);
        num1 = Number (array2[0]);
        num2 = Number (array2[1]);
        if(isNaN(num1) === true || isNaN(num2) === true){
            alert("Solo se aceptan números");
        }
    }while(isNaN(num1) === true || isNaN(num2) === true);


    switch(op){
        case "x" :
            alert(num1 * num2);
            break;
        case "/" :
            alert(num1 / num2);
            break;
        case "+" :
            alert(num1 + num2);
            break;
        case "-":
            alert(num1 - num2);
            break;
    }

    let seguir = confirm("Deseas seguir o no?");
    if(seguir === false){
        break;
    }
}
