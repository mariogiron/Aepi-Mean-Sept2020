## Rutas disponibles

GET http://localhost:3000
```javascript
function(req, res, next) {
  res.render('index', { title: 'Express' });
}
```

GET http://localhost:3000/users
```javascript
function(req, res, next) {
  res.send('respond with a resource');
}
```

GET http://localhost:3000/users/new
GET http://localhost:3000/users/all

POST http://localhost:3000/productos/create - create.js
POST http://localhost:3000/productos/new - new.js
POST http://localhost:3000/productos/update - update.js
POST http://localhost:3000/productos/edit

GET http://localhost:3000/productos/4
GET http://localhost:3000/productos/5
GET http://localhost:3000/productos/467

GET http://localhost:3000/documentos/curriculum.doc
GET http://localhost:3000/documentos/curriculum.pdf
GET http://localhost:3000/documentos/hacienda.doc
GET http://localhost:3000/documentos/hacienda.csv

POST http://localhost:3000/documentos/nuevo

GET http://localhost:3000/documentos/all?pages=5&order=nombre&filter=autor

/aviones/London-Madrid
/aviones/Berlin-Munich