const numberOfFilms = +prompt('Сколько фильмов вы посмотрели', '');
console.log(numberOfFilms);


const personsMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних фильмов', '');
    const b = prompt('на сколько оцените его', '');
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personsMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

console.log(personsMovieDB);


if (personsMovieDB.count < 10) {
    console.log('просмотрено мало фильмов');
} else if (personsMovieDB.count < 30) {
    console.log('вы класическй зритель');
} else {
    console.log('вы киноман');
}


