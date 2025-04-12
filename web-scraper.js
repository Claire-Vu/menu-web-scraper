const axios = require('axios');
const cheerio = require('cheerio');

axios
    .get('https://www.texasroadhouse.com/location/204-maranaaz/menu')
    .then ((response) => {
        console.log(response.data);

    })
    .catch((error) => {
        console.error('Error fetching the page:', error);
    });