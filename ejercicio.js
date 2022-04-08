var opt1 = "piedra"
var opt2 = "papel"
var opt3 = "tijeras"

var resultado = function (player, cpu) {
        if      (player === opt1 && cpu === opt2)  {console.log("Perdiste :(")}
        else if (player === opt1 && cpu === opt3) {console.log("Ganaste, felicidades")}
        else if (player === opt2 && cpu === opt1) {console.log("Ganaste, felicidades")}
        else if (player === opt2 && cpu === opt3) {console.log ("Perdiste :(")}
        else if (player === opt3 && cpu === opt1) {console.log ("Perdiste :(")}
        else if (player === opt3 && cpu === opt2) {console.log ("Ganaste, felicidades")}
        else {console.log("Empate")}
    }


var resultado = function(user, cpu){
    if(user != cpu){
        if     (user === op1 && cpu === op3) {console.log("el usuario GANO con "+ op1)}
        else if(user === op2 && cpu === op1) {console.log( "el usuario GANO con " + op2)}
        else if(user === op3 && cpu === op2) {console.log("el usuario GANO con " + op3)}
        else{console.log("La CPU Gano!!")}
    }else if(user === cpu){
        console.log("Empate")
    }
};