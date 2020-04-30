const axios = require('axios');

const getLugarLatLng = async(idireccion) => {

    //console.log(idireccion);
    // codificamos la direccion por espacios posibles
    let encodeUrl = encodeURI(idireccion);
    //console.log(encodeUrl);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        timeout: 11000,
        headers: { 'x-rapidapi-key': '7d5c2a8fe1mshf977d0d6fc4f1ebp1f0b93jsnbeb839161d04' }
    });

    const resp = await instance.get()
    if (resp.data.Results.length === 0) {
        throw Error(`No existen resultados para: ${encodeUrl}`);
    }

    //console.log('ok', resp.data.Results[0]);
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;
    const tipo = data.type;
    const zona = data.tz;
    return { direccion, lat, lng, tipo, zona };
};

module.exports = {
    getLugarLatLng: getLugarLatLng,
};