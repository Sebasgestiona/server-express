const express = require('express');
const app = express();
//PAth se utiliza para no tener que crear rutas absolutas.
const path = require('path');

app.get('/', (req, res) => {
  //creamos una ruta simplificada para no tener que crear rutas absolutas en el futuro.
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'hello por GET' });
});

// Definir la ruta para GET /api
app.get('/api', (req, res) => {
  // Crear el objeto JSON con la información de la API
  const apiInfo = {
    version: '1.0',
    endpoints: [
      {
        url: '/users',
        methods: ['GET', 'POST'],
        description: 'Endpoint para obtener y crear usuarios.',
      },
      {
        url: '/posts',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        description: 'Endpoint para gestionar publicaciones de usuarios.',
      },
      {
        url: '/comments',
        methods: ['GET', 'POST'],
        description: 'Endpoint para manejar comentarios en publicaciones.',
      },
    ],
  };

  // Enviar la respuesta como JSON
  res.json(apiInfo);
});

app.listen(3000, () => {
  //mensaje que queremos que aparezca cada vez que se reinicia el servidor.
  console.log('Server listening on port 3000');
});

//Instalamos un nuevo modulo para que el servidor se reinicie solo cada vez que hagamos una modificación,
//npm i nodemon -d (-d para que sea una dependencia de desarrollo)
//Añadimos en package.json, dentro de "script" añadimos: "start": nodemon app.js" (nombre aplicación, app.js)
//Para iniciar el nuevo modulo, lo hacemos en la consola con la siguiente linea: npm run start
