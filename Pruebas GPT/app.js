const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const port = 3030;

// Lee el archivo JSON con los personajes
const personajes = JSON.parse(fs.readFileSync('personajes.json', 'utf-8'));

// Ruta para la página principal
app.get('/', (req, res) => {
  let content = '<ul>';
  // Crea una lista de enlaces a las páginas de cada personaje
  personajes.forEach((personaje) => {
    content += `<li><a href="/${personaje.nombre}">${personaje.nombre}</a></li>`;
  });
  content += '</ul>';
  res.send(content);
});

// Ruta para cada página de personaje
app.get('/:nombre', (req, res) => {
  // Busca el personaje con el nombre correspondiente
  const personaje = personajes.find((p) => p.nombre === req.params.nombre);
  if (personaje) {
    // Crea la página con la información del personaje
    const content = `
      <h1>${personaje.nombre}</h1>
      <img src="${personaje.imagen}" alt="${personaje.nombre}">
      <p><strong>Nombre:</strong> ${personaje.nombre}</p>
      <p><strong>Superpoderes:</strong> ${personaje.superpoderes.join(', ')}</p>
      <p><strong>Enemigos:</strong> ${personaje.enemigos.join(', ')}</p>
      <p><strong>Descripción:</strong> ${personaje.descripcion}</p>
    `;
    res.send(content);
  } else {
    // Si no se encuentra el personaje, muestra un mensaje de error
    res.send(`<h1>Error 404: Personaje no encontrado</h1>`);
  }
});

// Inicia el servidor en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});