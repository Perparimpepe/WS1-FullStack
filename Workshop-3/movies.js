const https = require('https');

const API_KEY = 'b163a364'; // Vaihda oikeaan jos tarvitsee

function searchMovies(title) {
    return new Promise((resolve, reject) => {
        const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(title)}`;
        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const jsData = JSON.parse(data);
                    if (jsData.Search) {
                        resolve(jsData.Search);
                    } else {
                        resolve([]); // Ei löytynyt
                    }
                } catch (e) {
                    reject(e);
                }
            });
        }).on('error', (e) => {
            reject(e);
        });
    });
}

module.exports = { searchMovies };