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