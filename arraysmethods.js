var articulos = [
    { nombre: 'Bici', costo: 3000 },
    { nombre: 'TV', costo: 2500 },
    { nombre: 'Libro', costo: 320 },
    { nombre: 'Celular', costo: 10000 },
    { nombre: 'laptop', costo: 20000 },
    { nombre: 'teclado', costo: 500 },
    { nombre: 'audifonos', costo: 1700 }
]


// Metodos para recorrer arrays


//   Metodo Filter
/* Válida si es un true o false para poder meterlos al nuevo array, y éste método no modifica el array original */

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500  /* Menor o igual a 100 */
});

console.log(articulosFiltrados);

 //   Metodo Map

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

console.log(nombreArticulos);

 //   Metodo Find
 /* De igual forma, con este método se valida un true o false para encontrar un elemento y si está lo regresa y si no, no pasa nada */

 var encuentraArticulos = articulos.find(function(articulo){
    return articulo.nombre === 'laptop';
});

console.log(encuentraArticulos);

//   Metodo forEach con este método lo que haremos será que para nuestra array va a devolver el nombre solamente de los articulos que estén acá adentro.

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

//   Metodo Some
/* Este método nos regresa un false o un true para validar si hay o no artículos que cumplan la validación */

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});

console.log(articulosBaratos); 

//   Metodo Every

/* Este método checa que todos los elementos en el array cumplan con la validación que ponemos, y al final nos regresa un true o un false */

var articulosBaratos = articulos.every(function(articulo){
    return articulo.costo <= 700;
});

console.log(articulosBaratos); 

//   Metodo Reduce
/* Este método corre una función en cada elemento del array, para comenzar a sumar los costos de cada elemento. */

var costoTotal = articulos.reduce(function(totalActual, articulo){
    return articulo.costo + totalActual;
}, 0); // El 0 será la cantidad inicial con la que comenzará el totalActual

console.log(costoTotal); 

//   Metodo Includes

var numeros = [1, 2, 3, 4, 5, 6];

var incluyeNumero = numeros.includes(2); 

console.log(incluyeNumero);


//Por si desean entender un poco el uso de esto que estamos aprendiendo que parece ser un poco confuso, les dejo mis apuntes contando una historia, siento que es más fácil entender las cosas así.

// Este ejemplo es imaginando que recibimos una lista de 30 carros diferentes y se nos solicita que se almacene esta información, como estamos aprendiendo a usar js por que es un lenguaje cool y no queremos tipiar todo de manera normal y aburrida, usaremos este lenguaje c: así hacemos un pequeño trabajo de separar todas las marcas, modelos y años respectivamente en distintos arrays para así lograr juntarlos en uno solo usando una función constructiva la cual indicara cada auto ingresado con su marca, modelo y año respectivamente.

var marca = ["Audi", "Subaru", "Lexus", "Porsche", "BMW", "Mazda", "Buick", "Toyota", "Kia", "Honda", "Hyundai", "Volvo", "Mini", "Mercedes-Benz", "Volkswagen", "Ford", "Lincoln", "Scion", "Acura", "Chevrolet", "Nissan", "Infiniti", "GMC", "Cadillac", "Dodge", "Land", "Rover", "Mitsubishi", "Jeep", "Fiat"];
var modelo = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
var annio = [2020,2019,2018,2020,2020,2020,2018,2018,2020,2020,2020,2018,2018,2020,2020,2019,2020,2020,2019,2019,2020,2020,2019,2019,2019,2020,2019,2019,2018,2020];
var listaAutos = [];
function autoN(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
} 
for (var i = 0; i<30; i++){   
    var autoNuevo = new autoN(marca[i],modelo[i],annio[i]);
    listaAutos.push(autoNuevo);
}

// Luego se nos solicito que filtremos los carros por medio del año actual, ya que deseaban saber la cantidad de autos nuevos ingresados. Gracias a nuestro trabajo esto se podía saber de la siguiente manera:

var autosFiltrados = listaAutos.filter(function(auto){
    return auto.annio === 2020;
});
console.log(autosFiltrados);

// Así logramos obtener una lista con todos los autos del año 2020 c:

// Posterior a eso, se necesitaba obtener una lista urgentemente de las marcas de los 30 autos que acababan de ingresar por razones ajenas que no nos interesan c: Obviando que nosotros ya tenemos esta lista creada xD y queremos usar js para esto, esta tarea es tan sencilla como hacer: 

var marcasRecientes = listaAutos.map(function(auto){
    return auto.marca;
});
console.log(marcasRecientes);

// Así obtenemos nuestra lista de marcas recientemente ingresadas c:

//ejemplo de otro estudiante.

var cars = [];
var year = 2010;
function addCar(marca, modelo, anio){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
}
for (let index = 0; index < 10; index++) {
    var carName = "auto"+ index; //nombre unico modelo de carro
    cars[index] = new addCar(carName, "model", year);
    year++; //incremento de cada año
    console.log(cars[index]);
}


var cars = [];
var year = 2010;

function addCar(marca, modelo, anio){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
}

for (let index = 0; index < 10; index++) {
    var carName = "auto"+ index; //nombre unico modelo de carro
    cars[index] = new addCar(carName, "model", year);
    year++; //incremento de cada año
    console.log(cars[index]);
}

//Metodo 1
//Me ayuda a filtrar todos los autos con un año menor o igual a 2014
var filtroAutos = cars.filter(function(carro){return carro.anio <= 2014});

//Metodo 2
//me ayuda a mapear los autos, esto me retorna todos las marcas de los autos
var nombreAutos = cars.map(function(carro){return carro.marca});

//Metodo 3
//Me ayuda a buscar todos los autos que se llamen auto4
var filtroAutos = cars.find(function(carro){return carro.marca === "auto4"});

//metodo 4
//me ayuda a filrar sin necesidad de crear una nueva variable
cars.forEach(function(car){console.log(car.marca);});

//metodo 5
//me ayuda a validar si una funcion es verdadera solo retorna true o false… Solo me ayuda a saber si algo es verdad (ejemplo si hay autos viejos en mi array de objetos)
var autosViejos = cars.some(function(car){return car.anio < 2014;});

//otro apunte :D

var articulos = [
    { nombre: "Tv", costo: 1500 },
    { nombre: "PC", costo: 4000 },
    { nombre: "Bombillo", costo: 1 },
    { nombre: "Mesa", costo: 100 },
];

  // .filter = filtra segun lo necesitemos
var filtro = articulos.filter(function (articulo) {
    return articulo.costo <= 1000;
});

  // .map = regresa el parametro del objeto
var nombre = articulos.map( function (articulo) {
      return articulo.nombre
  })
  
  //.find = encuentra el objeto buscado segun el parametro
  var encuentra = articulos.find(function (articulos) {
      return articulos.nombre === "PC"
  })
  
  //.foreach = listar 
  articulos.forEach(function (articulos) {
      console.log(articulos.nombre);
  })
  
  //some = comprobar si existe o no
  var baratos = articulos.some(function (articulos) {
      return articulos.costo <= 1000
  })