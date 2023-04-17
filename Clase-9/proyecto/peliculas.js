let peliculas = [
    {
        id : "Avengers",
        rating : "4.5",
        awards : "none",
        length : "120",
        price : 1200,
        genre : "Superheros",
        miCadena : function() {return "Pelicula: " + this.id + "| Rating: " + this.rating + "| Premios: " + this.awards + "| Duración: " + this.length + "| Precio: " + this.price + "| Genero: " + this.genre}
    },
    {
        id : "The Whale",
        rating : "4.9",
        awards : "Oscar",
        length : "107",
        price : 1500,
        genre : "Suspenso",
        miCadena : function() {return "Pelicula: " + this.id + "| Rating: " + this.rating + "| Premios: " + this.awards + "| Duración: " + this.length + "| Precio: " + this.price + "| Genero: " + this.genre}
    }
]

module.exports = peliculas;