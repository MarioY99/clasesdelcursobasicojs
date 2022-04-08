// Los loops (bucles), son manera rápida y sencilla de hacer algo (una tarea) repetidamente.
//Los loops es una forma facil de ordenarle al código que genere una acción repetida sin la necesidad de hacerla nosotros manualmente
//Paso 1: Para generarlo primero debemos agregar un array mediante una variable

var frutas = [ "Manzanas", "Peras", "Duraznos", "Limones", "Naranjas", "Uvas", "Cambures"];

//Paso 2: agregamos una función que va a ser la tarea que va a hacer nuestro loop

function listaDeCompras (fruta){ //este parámetro que va a estar dentro de la función va a ser el singular del array que hicimos en la variable
        console.log(`Compra 4 ${fruta}`); //acá es la orden que hará nuestro loop con el array y dentro del string de la orden va el $ con el mismo parámetro de la función que es el singular del array realizado.
}

//Paso 3: se genera el loop, tenemos 2 tipos, el for y también tenemos el "for of" primero vamos con "for"

for (var i = 0; i < frutas.length; i++){ //siempre agrega el incremento usando el operador para que se genere el loop en cada elemento del array
    listaDeCompras(frutas[i]);
}
//esto lo podemos leer como "Mientras que i sea menor a la longitud de nuestro array se va a realizar la acción que está establecida en la función, y mientras se vaya generando se va a sumar 1 a la i hasta que deje de ser menor que nuestra array y allí se para el loop"

//tenemos también el otro tipo de loop que es el "for of" que se genera de la siguiente manera

for (fruta of frutas) {
    listaDeCompras(fruta);
}

//que esto se puede leer, como "frutas" es nuestro array y "fruta" será un singular de ese array, por lo tanto, el loop será que: cada elemento singular de nuestro array frutas va a verse afectado por la orden de la función generada en un principio.

//también tenemos el otro método de hacer loop que es "while" de la siguiente manera y lo que nos dice es que mientras sea verdad la condición que se genere dentro de while se va a realizar la acción que se ejecute dentro de las llaves "{}"

while (frutas.length > 0) { //acá estamos diciendo que mientras la longitud de nuestro array sea mayor a 0 elementos
    var fruta = frutas.shift(); //el shift lo que hace es sacar un elemento del inicio de nuestro array puede ser denominado como metodo de mutación
    listaDeCompras(fruta);
}
// Aquí la tarea se hará siempre y cuando sea true, cuando llegué a false, dejará de hacer la tarea
//se puede leer como mientras que la longitud de mi array de frutas sea mayor que 0, se le va a sacar un elemento que esté al inicio del array y ese elemento va a ser mostrado en la consola con la ayuda del console.log de la función.
// shift() es un método que saca un elemento del array de la posición 0 a la última, Pop() comienza de la última a la primera.