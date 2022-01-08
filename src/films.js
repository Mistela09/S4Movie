// Exercise 1: Get the array of all directors.



const getAllDirectors = movies.map(listado => (listado.director));

console.log('Listado de todos los directores ',getAllDirectors);





// Exercise 2: Get the films of a certain director
const getMoviesFromDirector = movies.filter(certainDirector => (certainDirector.director == 'Francis Ford Coppola'));

console.log('Películas de Francis Ford Coppola', getMoviesFromDirector);

/*function getMoviesFromDirector(array, director) {
 
}*/

// Exercise 3: Calculate the average of the films of a given director.

const moviesAverageOfDirector = getMoviesFromDirector.reduce((total, rate) => {
  return total + ((rate.score) / (getMoviesFromDirector.length));
  }, 0);


console.log('La valoración media de las películas de Francis Ford Coppola es de',moviesAverageOfDirector);



// Exercise 4:  Alphabetic order by title 
// ordenados por una de las propiedades de movie (título)

const orderAlphabetically = movies.sort((a, b) => {
  if (a.title > b.title) {
    return 1;
  }
  if (a.title < b.title) {
    return -1;
  }
  return 0;
});

console.table(orderAlphabetically);



// Exercise 5: Order by year, ascending

// ordenados por el valor de una de las propiedades de movies

const orderByYear = movies.sort((a, b) => {
  if (a.year > b.year) {
    return 1;
  }
  if (a.year < b.year) {
    return -1;
  }
  return 0;
})

console.table(orderByYear);

//function orderByYear() {

//}

// Exercise 6: Calculate the average of the movies in a category

const categoryCrime = movies.filter(moviesAverageByCategory =>
  (moviesAverageByCategory.genre.includes('Crime')));

console.table(categoryCrime);


const moviesAverageByCategoryCrime = categoryCrime.reduce((total, rate) => {
  return total + ((rate.score) / (categoryCrime.length));
  }, 0);


console.log('La valoración media de las películas de categoría CRIME es de ', moviesAverageByCategoryCrime);



const categoryDrama = movies.filter(moviesAverageByCategory =>
  (moviesAverageByCategory.genre.includes('Drama')));

  console.table(categoryDrama);

const moviesAverageByCategoryDrama = categoryDrama.reduce((total, rate) => {
  return total + ((rate.score) / (categoryDrama.length));
  }, 0);


console.log('La valoración media de las películas de categoría DRAMA es de ', moviesAverageByCategoryDrama);


// Exercise 7: Modify the duration of movies to minutes


const hoola = movies.map(cambio => 
cambio.duration.replace('h ', ':'));

console.table(hoola);

const hoolaM = hoola.map(newCambio =>
  newCambio.replace('min', ''));

//const hoola = movies.duration.replace('h ', '');

console.table(hoolaM);

const hoolaX = hoolaM.map(threeCambio =>
  threeCambio.replace('h', ''));

  console.table(hoolaX);



// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}