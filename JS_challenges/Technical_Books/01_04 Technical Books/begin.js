class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  // Getter
  get availability() {
    return this.getAvailability();
  }

  // Method
  getAvailability() {
    if (this.numCopies === 0) {
      return "Out of stock";
    } else if (this.numCopies < 10) {
      return "Low stock";
    }
    return "In stock";
  }

  sell(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
  }

  restock(numCopiesStocked = 5) {
    this.numCopies += numCopiesStocked;
  }
}

/*
  WRITE YOUR SOLUTION HERE
*/

class TechnicalBook extends Book {
  //new class also needs its own constructor with bookEdition added. 
  constructor(title, author, ISBN, numCopies, edition){
    // The super keyword is used to access properties on an object literal or class's [[Prototype]], or invoke a superclass's constructor.
    super(title, author, ISBN, numCopies);
    //initialize bookEdition parameter:
    this.edition = edition;
  }

  // You should add a getEdition method which prints `The current version of this book is ${version}`.

  getEdition(){
    //don't forget the this keywork when calling parameter
    return `The current version of this book is ${this.edition}`;
  }

}

//Create book variable and call function to test:
const Neuromancer = new Book("Neuromancer", "William Gibbons", 123919, 5);
console.log("Your book is currently " + Neuromancer.availability);
Neuromancer.restock(12);
console.log("Your book is currently " + Neuromancer.availability);
Neuromancer.sell();
console.log("Your book is currently " + Neuromancer.availability);
//Test technical book class and method:

const CrackingTheCodingInterview = new TechnicalBook(
  "Cracking The Coding Interview",
  "Gayle Laackmann McDowell",
  1209123,
  7,
  "2.3"
);

console.log("Your book is currently " + CrackingTheCodingInterview.availability);
//don't forget to add the () when calling the getEdition function. 
console.log(CrackingTheCodingInterview.getEdition());

