/*
  WRITE YOUR SOLUTION HERE
*/

// Create a Movie object that takes in five arguments:

// - title
// - director
// - genre
// - releaseYear
// - rating

// Can use class or function syntax to create movie object:
//class Movie {} or function Movie(){};

// class syntax below. Class syntax is syntactical sugar

class Movie {

  constructor(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }
// Add a function called `getOverview` on the Movie prototype which console
// logs the following overview for each film:
// "<movie>, a <genre> film directed by <director> was released in <releaseYear>. It received a rating of <rating>."
//function in this case means method, do not write function keyword.
  getOverview(){
    //final example returns even though instruction says to console log:
    return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}`;
  }

}

//Call your object prototypes and methods:
//First create your movie objects.
//Then console log them and call getOverview method of your Movie class

const Spiderman = new Movie("Spiderman", "Sam Raimi", "Action", 2002, 87);
const PulpFiction = new Movie("PulpFiction", "Quentin Tarantino", "Action", 1993, 100);

console.log(Spiderman);
console.log(Spiderman.getOverview());
console.log(PulpFiction);
console.log(PulpFiction.getOverview());




// Function Syntax:

// function Movie(title, director, genre, releaseYear, rating) {
//   this.title = title;
//   this.director = director;
//   this.genre = genre;
//   this.releaseYear = releaseYear;
//   this.rating = rating;
// }

// Movie.prototype.getOverview = function() {
//   return `${this.title}, a ${this.genre} film directed by ${
//     this.director
//   } was released in ${this.releaseYear}. It received a rating of ${
//     this.rating
//   }`;
// };

// const Spiderman = new Movie("Spiderman", "Sam Raimi", "Action", 2002, 87);
// const PulpFiction = new Movie("PulpFiction", "Quentin Tarantino", "Action", 1993, 100);

// console.log(Spiderman);
// console.log(Spiderman.getOverview());
// console.log(PulpFiction);
// console.log(PulpFiction.getOverview());
