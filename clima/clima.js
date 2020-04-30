const axios = require('axios');

const getClima = async(lat, lng) => {
    console.log("Lat: ", lat);
    console.log("Lng: ", lng);

    //let datos = await axios.get(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=bb7c7c139443e75e035b2e27a9531e09&units=metric`);
    let datos = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=-33.45999&lon=-70.639999&appid=bb7c7c139443e75e035b2e27a9531e09&units=metric`);
    return datos.data.main;
};



module.exports = {
    getClima: getClima
};