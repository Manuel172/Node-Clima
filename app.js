const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la cidad para buscar clima',
        demand: true
    }
}).argv;

// console.log(argv.direccion);

const getInfo = async(direccion) => {
    try {
        const coord = await lugar.getLugarLatLng(argv.direccion);
        const temp = await clima.getClima(coord.lat, coord.lng);
        return `La temperatura para la ciudad de ${direccion} es de ${temp.temp} grados y sensacion termica es de ${temp.feels_like}`;
    } catch (error) {
        console.log("Error: ", error);
    }
};

getInfo(argv.direccion)
    .then(resp => {
        console.log(resp);
    }).catch(error => {
        console.log(error);
    });