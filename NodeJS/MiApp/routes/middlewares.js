const fs = require('fs');
const moment = require('moment');

const consoleMd = (req, res, next) => {
    console.log('Pasa por el middleware');
    next();
};

const appendLog = (req, res, next) => {
    fs.appendFile('./app.log', `[${moment().format('DD-MM-YYYY HH:mm')}] Método: ${req.method}. Url: ${req.url}\n`, (error) => {
        if (error) return res.send('Ha ocurrido un error');
        next();
    });
};

const getCurrentTime = (req, res, next) => {
    req.fechaActual = moment();
    next();
};

const productosMd = (req, res, next) => {
    console.log('Petición contra PRODUCTOS');
    next();
};

module.exports = {
    consoleMd, appendLog, getCurrentTime, productosMd
}