const http = require('http');
const movies = require('./movies.js'); // Oletetaan, että movies.js on samassa kansiossa

const favouriteTitles = [
  "The Matrix",
  "Inception",
  "Breaking Bad"
];

function generateTable(moviesList) {
  let rows = moviesList.map(movie => `
    <tr>
      <td>${movie.Title}</td>
      <td>${movie.Year || ''}</td>
      <td>${movie.Type || ''}</td>
    </tr>
  `).join('');
  return `
    <table border="1" cellpadding="5">
      <tr>
        <th>Title</th>
        <th>Year</th>
        <th>Type</th>
      </tr>
      ${rows}
    </table>
  `;
}

const server = http.createServer(async (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });

  let allResults = [];
  for (const title of favouriteTitles) {
    // Oletetaan, että movies.searchMovies palauttaa promisen ja listan elokuvista
    const results = await movies.searchMovies(title);
    if (results && results.length > 0) {
      allResults.push(results[0]); // Otetaan ensimmäinen osuma
    }
  }

  const tableHtml = generateTable(allResults);

  response.end(`
    <html>
      <head><title>Favourite Movies/Series</title></head>
      <body>
        <h1>Favourite Movies/Series</h1>
        ${tableHtml}
      </body>
    </html>
  `);
});

server.listen(8081);

console.log('Server running at http://127.0.0.1:8081/');