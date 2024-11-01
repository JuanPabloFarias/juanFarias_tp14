

let productos = ["Heladera", "Microondas", "Licuadora", "Plancha", "Lavaropas", "Cafetera"];

//a. Acceder de manera arbitraria a diferentes elementos del array. 

console.log("Tarea A: ");
console.log("El elemento en el indice 2 es :" + productos[2]);

//b. Extraer el primer elemento del array y agregarlo al final del mismo.

let temp = productos.shift();
productos.push(temp);

console.log("Tarea B: ");
console.log(productos);

//c. Agregar al final del array dos (2) nuevos productos.

productos.push("Aspiradora", "Ventilador");

console.log("Tarea C: ");
console.log(productos);

//d. Mostrar por la consola la cantidad de elementos que contiene el array.

console.log("Tarea D: ");
console.log(`Actualmente el array contiene ${productos.length} elementos`);

//e. Buscar un elemento del array y crear una condición responsable de
//establecer si existe o no el producto dentro del array. De existir, se le debe
//mostrar el mensaje: “Producto encontrado”. En el caso contrario mostrar el
//mensaje “El producto buscado no existe”.


function buscarElementoDelArray(arreglo, elemento){
    for (let i = 0; i < arreglo.length; i++) {
        if(arreglo[i] == elemento){
            return console.log("Producto encontrado");
        }
    }
    return console.log("El producto buscado no existe")
}

console.log("Tarea E: ");
buscarElementoDelArray(productos, "Heladera");
buscarElementoDelArray(productos, "Mesa");

//f. Unificar todos los elementos del array en una cadena de texto (string),
//separando los elementos por espacios en blanco.

let arrayAString = ""
productos.forEach(element => {
    arrayAString += element
    arrayAString += " "
});

arrayAString = arrayAString.trimEnd() //Elimina el ultimo espacio en blanco del string

console.log("Tarea F: ");
console.log(arrayAString);

//g. Determinar la cantidad de elementos que posee la cadena de texto
//obtenida.

let palabrasContadas = 0;

for (let i = 0; i < arrayAString.length; i++) {
    if(arrayAString[i] === " " || i === arrayAString.length - 1){
        palabrasContadas++
    }
}

console.log("Tarea G: ");
console.log(`Este string contiene un total de ${arrayAString.length} de letras y espacios en blanco`);
console.log(`Este string contiene un total de ${palabrasContadas} palabras`);

//h. Cambiar el nombre de algún producto de la cadena de texto por otro,
//valiéndose de la función adecuada para ello.

console.log("Tarea H: ");

let nuevoArrayAString = arrayAString.replace("Heladera", "Television");
console.log(nuevoArrayAString);

// i. Con la cadena de texto obtenida generar un nuevo array con cada una de
// las palabras de la cadena de texto. Tener en cuenta que los elementos
// deben estar separados por una coma.

console.log("Tarea I: ");
let StringAArray = nuevoArrayAString.split(' ');

console.log(StringAArray);