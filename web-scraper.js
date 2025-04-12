const axios = require('axios');
const cheerio = require('cheerio');

axios
    // Issue 1: TexasRoadhouse error: does not allow web scaping
    // Issue 2: Sushi Garden menu is pdf format
    .get('https://sushigarden.com/menu/new-menus/broadway.pdf')
    .then ((response) => {
        // console.log(response.data)
        const $ = cheerio.load(response.data);
        const title = $('h1').text();
        console.log(`Page Title: ${title}`);

    })
    .catch((error) => {
        console.error('Error fetching the page:', error);
    });