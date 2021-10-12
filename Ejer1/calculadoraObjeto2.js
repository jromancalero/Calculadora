let op ;
let numeros;
let myarray = [];
let num1 = 0;
let num2 = 0;
let array2;




const calculadora = {

    lastResult: 0,

    sumar: function(num1,num2){
        this.lastResult = num1 + num2;
        alert(this.lastResult)
    },
    restar: function(num1,num2){
        this.lastResult = num1 - num2;
        alert(this.lastResult)
    },
    multiplicar: function(num1,num2){
        this.lastResult = num1 * num2;
        alert(this.lastResult)
    },
    dividir: function(num1,num2){
        this.lastResult = num1 / num2;
        alert(this.lastResult)
    },
}

alert("Hola, bienvenido a la calculadora");


while(true){

    function operacion(op){

        do{
            op = prompt ('Elije una de las siguientes operacion: +, -, x, /', ' ');
            op = op.trim();
    
            if(op === '+' || op === '-' || op === '/' || op === 'x'){
                //lets go
            }else{
                alert("datos introducidos erroneamente, vuelve a probar");
            }
        }while(op !== '+' && op !== '-' && op !== 'x' && op !== '/');
        return op;
    };

   op = operacion(op);
    

    let numeradores = function (numeros){

        do{
            numeros = prompt ("Pon dos numeros separados por un espacio entre ellos");
            numeros = numeros.trim();
            myarray = numeros.split(" ");

            if(myarray[0] === 'R'){
                myarray[0] = calculadora.lastResult;
            };

            if(myarray[1] === 'R'){
                myarray[1] = calculadora.lastResult;
            };

            array2 = myarray.filter(Number);
            num1 = Number (array2[0]);
            num2 = Number (array2[1]);
            if(isNaN(num1) === true || isNaN(num2) === true){
                alert("Solo se aceptan números");
            };

        }while(isNaN(num1) === true || isNaN(num2) === true);
        return num1, num2;
    };

    numeradores(numeros);
   
    switch(op){
        case "x" :
           calculadora.multiplicar(num1,num2);
            break;
        case "/" :
            calculadora.dividir(num1,num2);
            break;
        case "+" :
            calculadora.sumar(num1,num2);
            break;
        case "-":
           calculadora.restar(num1,num2);
            break;
    }

    let seguir = confirm("Deseas seguir o no?");
    if(seguir === false){
        break;
    }
}