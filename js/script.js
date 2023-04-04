"use strict";

//Лекция  19

const number0fFilms = +prompt('How many films did you watch?', '');

const personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastFilms = prompt('What is the last movie did you watch?', '');
const score = prompt('How do you rate the film? 1-10', '');
const lastFilms2 = prompt('What is the last movie did you watch?', '');
const score2 = prompt('How do you rate the film? 1-10', '');


personalMovieDB.movies[lastFilms] = score;
personalMovieDB.movies[lastFilms2] = score2;

console.log(personalMovieDB);






