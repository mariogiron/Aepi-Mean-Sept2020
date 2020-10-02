const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const { getCurrentTime, appendLog, consoleMd, productosMd } = require('./routes/middlewares');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productosRouter = require('./routes/productos');
const documentosRouter = require('./routes/documentos');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// MIDDLEWARES
// Middleware que lanza un console.log
app.use(consoleMd);

// Middleware que escriba en un log todas las peticiones que entran
app.use(appendLog);

// Middleware que obtiene la fecha actual y la coloca dentro de la Petición (req)
app.use(getCurrentTime);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/productos', productosMd, productosRouter);
app.use('/documentos', documentosRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


//! DESTRUCTURING
// const persona = {
//   nombre: 'Mario',
//   apellidos: 'Girón',
//   edad: 23,
//   direccion: {
//     calle: 'Gran vía',
//     numero: 30
//   }
// };

// // const nombre = persona.nombre;
// // const apellidos = persona.apellidos;

// const { nombre, apellidos, direccion: { calle } } = persona;

// console.log(calle)