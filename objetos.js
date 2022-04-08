// Un objeto es una colección de propiedades, y una propiedad es una asociación de key (nombre, o clave) y valores.

var objecto = {}; // Object Literal Syntax

var miPc = {
    marca: "Lenovo",
    modelo: "Legion 5 series",
    year: 2017,
    videocard: "GeForceRTX 2060 6Gb",
    ram: "12 gb",
    procesador: "i7-10700hq",
    specificaciones: function () { // Metodo de un objeto (una función dentro de un objeto)
        console.log(`Posee: ${this.procesador} ${this.ram} ${this.videocard}`);
    }
}

function auto(marca, modelo, annio) {  // Creas una función con los parametros que va a recibir,
    this.marca = marca;   // Utilizamos el "this" para asignar valores a las propiedades del objeto
    this.modelo = modelo;
    this.annio = annio;
}

var newAuto = new auto("Tesla", "Model 3", 2020);

//ejercicio

var marca = ["Toyota", "Nissan", "Hyunday", "Mitsubishi", "Toyota", "Ford", "Tesla", "Nissan", "Mitsubishi", "Toyota"];
var modelo = ["Corolla", "Volkswagen", "Elantra", "optra", "Explorer", "Chevete", "Blazer", "Celica", "Model X", "Explorer"];
var year = [1999, 2002, 1985, 2016, 2014, 2000, 2015, 2019, 2020, 2009]

function auto (marca, modelo, year) {
    this.marca = marca;
    this.modelo = modelo;
    this.year = year;
}

for (var i = 0; i < marca.length && i < modelo.length && i < year.length; i++) {
    var nuevoAuto = new auto (marca[i], modelo[i], year[i]);
    console.log(nuevoAuto);
}

//entonces se leería, para cuando i es igual a 0, dentro de cada array se generará un loop agregando la marca del index que le corresponda, hasta que ya no hayan más elementos en la index.
