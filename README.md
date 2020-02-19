# LIRI (Language Interpretation and Recognition Interface)
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

## *Link to Live Page*
(https://pprchang.github.io/unit-4-game/)

## *Built With*

#### Code Editor: 
- Visual Stuido Code (https://code.visualstudio.com/)

#### Javascript:

#### Node.js (https://nodejs.org/en/):
- Node-Spotify-API (https://www.npmjs.com/package/node-spotify-api)
- Axios (https://www.npmjs.com/package/axios)
- OMDB API (http://www.omdbapi.com)
- Bands In Town API (http://www.artists.bandsintown.com/bandsintown-api)
- Moment (https://www.npmjs.com/package/moment)
- DotEnv (https://www.npmjs.com/package/dotenv)

## *Setup*
1. Visit Spotify API website (https://developer.spotify.com/my-applications/#!/) and create a account.
2.  Once logged in, navigate to (https://developer.spotify.com/my-applications/#!/applications/create) to register a new application to be used with the Spotify API.
3.On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the node-spotify-api package (https://www.npmjs.com/package/node-spotify-api).
4. Clone the repository
5. Run npm install and install the below modules:
  -Node-Spotify-API
  -Axios 
  -Moment
  -DotEnv
6. Create a .env file in the same directory as the rest of the files. 
7. In the .env file add the following items:
  - '# Spotify API keys'
  - 'SPOTIFY_ID=your-spotify-ID-here'
  - 'SPOTIFY_SECRET=your-spotify-secret-here'
  
## *Avaiblabe Commands* 

#### concert-this <artist/band name here> 
This will show the following information about the song in your terminal/bash window:
     - Artist(s)
     - The song's name
     - A preview link of the song from Spotify
     - The album that the song is from
 - If no song is provided then your program will default to "The Sign" by Ace of Base.

#### spotify-this-song "<song name here>"
This will show the following information about the song in your terminal/bash window
     * Artist(s)
     * The song's name
     * A preview link of the song from Spotify
     * The album that the song is from
  * If no song is provided then your program will default to "The Sign" by Ace of Base.
 
#### movie-this '<movie name here>'
This will output the following information to your terminal/bash window:
     * Title of the movie.
     * Year the movie came out.
     * IMDB Rating of the movie.
     * Rotten Tomatoes Rating of the movie.
     * Country where the movie was produced.
     * Language of the movie.
     * Plot of the movie.
     * Actors in the movie.
  * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody'.
  
#### do-what-it-says 
* Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

## *Contributing* 
When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.  Thank you for your corporation.
