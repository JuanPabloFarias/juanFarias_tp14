// 2. Crear una estructura para almacenar un conjunto de películas, tales como: ‘Turno
// de día’, ‘30 noches con mi ex’, ‘Bestia’, ‘El monte’, ‘Top gun maverick',
// ‘Elvis’,‘Thor: amor y trueno’.

let peliculas = ""

function agregarPeliculas(listaPeliculas, ...arguments){
    if(listaPeliculas[0] !== undefined){ //identifica si es la primera pelicula que hay
        listaPeliculas += ", " //si NO es la primera pelicula, dejara un espacio en blanco
    }
    arguments.forEach(element => {
        listaPeliculas += `‘${element}’, `
    });
         listaPeliculas = listaPeliculas.slice(0, -1); //elimina el espacio en blanco al final 
         listaPeliculas = listaPeliculas.slice(0, -1); //elimina la coma al final
         return listaPeliculas;
}

console.log("Consigna 2")

peliculas = agregarPeliculas(peliculas, "Turno de día", "30 noches con mi ex", "Bestia", "El monte");
console.log(peliculas);

peliculas = agregarPeliculas(peliculas, "Top gun maverick", "Elvis", "Thor: amor y trueno")
console.log(peliculas);

//3. Más tarde desde la producción indicaron que la película más vendida era: ‘Thor:
// amor y trueno’. Por lo tanto, en la estructura creada querían ver primero dicha
// película y con letras en mayúsculas. Para ello el tech leader, te solicita que crees
// una función, la cual recibirá por parámetro la película indicada y deberá retornar la
// misma pero en mayúscula. Para ello sería bueno que investigues sobre el método
// .toUpperCase(). Con ese valor recibido, deberás colocarla primero en la
// estructura creada.

function peliculaPrimeroYEnMayusculas(nombrePelicula, lista){
    let arregloTemporal = [];
    arregloTemporal = lista.split(",");
    let nuevoArreglo = [];
    let temp = "" //variable donde se llenaran de letras una por una en el bucle de abajo

    for (let j = 1; j < arregloTemporal[0].length-1; j++){ //bucle aplicado unicamente al primer elemento, ya que el primer elemento no tiene una 'coma' ni un espacio en blanco
        temp += arregloTemporal[0][j];
    }
    nuevoArreglo.push(temp)

    for (let i = 1; i < arregloTemporal.length; i++) {
        temp = ""
    for (let j = 2; j < arregloTemporal[i].length-1; j++){
        temp += arregloTemporal[i][j];
    }
        nuevoArreglo.push(temp)
    }


    for (let i = 0; i < nuevoArreglo.length; i++) { //bucle para buscar y borrar la pelicula indicada
        if(nuevoArreglo[i] == nombrePelicula){
            nuevoArreglo.splice(i, 1)
        }
    }

    lista = "" //la nueva lista de peliculas
    nombrePelicula = nombrePelicula.toUpperCase()
    lista = agregarPeliculas(lista, nombrePelicula); //agrega la primer pelicula que se indica como parametro

    for (let i = 0; i < nuevoArreglo.length; i++) { //agregamos a la nueva lista todos los elementos del arreglo con este bucle
        lista = agregarPeliculas(lista, nuevoArreglo[i]);
    }

    return lista;
}

peliculas = peliculaPrimeroYEnMayusculas("Thor: amor y trueno", peliculas)
console.log("Consigna 3: ")
console.log(peliculas)

// 4. Una vez terminada la actividad, nos indican que debemos crear una cadena de
// texto para las siguientes películas próximas a estrenar:
// a. Counter-Strike
// b. NOP
// c. Vértigo
// d. Nick
// e. Avatar
// Nos piden crear una estructura parecida a la trabajada en el punto 2, teniendo en
// cuenta que cada elemento debe estar separado por una coma.

let masPeliculas = ""

masPeliculas = agregarPeliculas(masPeliculas, "Counter-Strike", "NOP", "Vértigo", "Nick", "Avatar");

console.log("Consigna 4: ")
console.log(masPeliculas);

// 5. Finalmente, el Tech Leader te solicita crear una función que reciba por parámetro
// ambas estructuras creadas y debe devolver un nueva nueva estructura con todas
// las películas, para ello te recomendamos que investigues lo que hace el método
// .concat().



function concatenarPeliculas(parametro1, parametro2){
    let peliculasConcatenadas = "";
    peliculasConcatenadas = peliculasConcatenadas.concat(parametro1, parametro2);
    return peliculasConcatenadas;
}

let todasLasPeliculas = ""
todasLasPeliculas = concatenarPeliculas(peliculas, masPeliculas);
console.log("Consigna 5: ")
console.log(todasLasPeliculas);