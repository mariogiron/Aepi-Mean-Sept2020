const chalk = require('chalk');
const axios = require('axios');

console.log(chalk.red.bgBlueBright('Hola NPM!'));

axios.get('https://restcountries.eu/rest/v2/region/europe')
    .then(response => {
        // filter, find, map, foreach, reduce...
        const nombres = response.data.map(pais => pais.name);
        console.log(nombres);
    })
    .catch(error => {
        console.log(error);
    });