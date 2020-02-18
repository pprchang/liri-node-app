//require modules
require('dotenv').config();
const axios = require('axios');
const keys = require('./keys.js');
const fs = require('fs');
const Spotify = require('node-spotify-api');
const spotify = new Spotify(keys.spotify);
const moment = require('moment');

//input var
let command = process.argv[2];
let search = process.argv[3];

//switch statments
switch (command) {
  //search bands in town
  case 'concert-this':
    concertThis(search);
    break;
  //spotify
  case 'spotify-this-song':
    spotifyThisSong(search);
    break;
  //OMDB for movies
  case 'movie-this':
    movieThis(search);
    break;
  //search what is in the random.txt file
  case 'do-what-it-says':
    doWhatItSays();
    break;
}

//concert-this <artis/band name>....search bands in Town Artist Events API
function concertThis(band) {
  axios
    .get(
      'https://rest.bandsintown.com/artists/' +
        band +
        '/events?app_id=codingbootcamp'
    )
    .then(function(response) {
      var data = response.data[0].venue;

      band != undefined
        ? console.log(
            `------------Concert Info------------ \n Event Veunue: ${
              data.name
            } \n Event Location: ${data.city}, ${
              data.country
            } \n Event Date: ${moment(response.data[0].datetime).format(
              'MM-DD-YYYY'
            )} \n ----------------------------------`
          )
        : console.log(
            `------------ERROR------------ \n No results found \n -----------------------------`
          );
    })
    .catch(function(error) {
      console.log(error);
      console.log(
        `------------ERROR------------ \n No results found \n -----------------------------`
      );
    });
}

//spotify-this-song "<song name>"....... search song
function spotifyThisSong(search) {
  //set "The Sign" as the default song
  search === undefined ? (search = 'The Sign') : console.log();

  spotify
    .search({ type: 'track', query: search })
    .then(function(response) {
      var dataResponse = response.tracks.items[0];

      search !== undefined
        ? console.log(
            `------------Song Info------------ \n Artist: ${dataResponse.artists[0].name} \n Track Name: ${dataResponse.name} \n Album: ${dataResponse.album.name} \n Song Preview Link: ${dataResponse.preview_url} \n ----------------------------------`
          )
        : console.log(
            `------------ERROR------------ \n No results found \n -----------------------------`
          );
    })
    .catch(function(error) {
      console.log(error);
      console.log(
        `------------ERROR------------ \n No results found \n -----------------------------`
      );
    });
}

//movie-this "<movie name>"......search movie
function movieThis(search) {
  //Set Mr. Nobody as the default movie
  search === undefined ? (search = 'Mr. Nobody') : console.log();

  axios
    .get(
      'http://www.omdbapi.com/?t=' +
        search +
        '&y=&plot=short&tomatoes=true&apikey=trilogy'
    )
    .then(function(response) {
      var dataInfo = response.data;
      search !== undefined
        ? console.log(
            `------------Movie Info------------ \n Title: ${dataInfo.Title} \n Year: ${dataInfo.Year} \n IMDB Rating: ${dataInfo.imdbRating} \n Rotten Tomatoes Rating: ${dataInfo.Ratings[1].Value} \n Produced in: ${dataInfo.Country} \n Language: ${dataInfo.Language} \n Plot: ${dataInfo.Plot} \n Actors: ${dataInfo.Actors} \n ----------------------------------`
          )
        : console.log(
            `------------ERROR------------ \n No results found \n -----------------------------`
          );
    })
    .catch(function(error) {
      console.log(error);
      console.log(
        `------------ERROR------------ \n No results found \n -----------------------------`
      );
    });
}

//Do-What-This-Says: process command and search from random.txt
function doWhatItSays() {
  fs.readFile('random.txt', 'utf8', function(err, data) {
    data = data.split(',');
    let command = data[0];
    let search = data[1];

    //log error
    err ? console.log(error) : console.log();

    //switch statement which allow to search according to what is in the radom.txt file
    switch (command) {
      //searh bands in town
      case 'concert-this':
        concertThis(search);
        break;
      //spotify
      case 'spotify-this-song':
        spotifyThisSong(search);
        break;
      //OMDB for movies
      case 'movie-this':
        movieThis(search);
        break;
    }
  });
}
