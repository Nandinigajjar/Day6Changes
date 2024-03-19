import Movie from './movie.js';

const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

const movies = [
    new Movie("Movie 1", "Studio 1", "PG"),
    new Movie("Movie 2", "Studio 2", "R"),
    new Movie("Movie 3", "Studio 3", "PG-13"),
    new Movie("Movie 4", "Studio 4", "PG"),
];

const pgMovies = Movie.getPG(movies);
console.log(pgMovies); 
