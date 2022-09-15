/*
  WRITE YOUR SOLUTION HERE
*/

// To do:
// # 01_01 Available Books

// ## What You'll Do

// You're developing an inventory application for a bookstore.
// You need to create a JavaScript class, "Book", that accepts a title, author,
// ISBN (International Standard Book Number), and the number of available copies.

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

  // Methods
  getAvailability() {
    if (this.numCopies === 0) {
      return "Out of stock";
    } else if (this.numCopies < 10) {
      return "Low in stock";
    }
    //If none of those criteria are met, then just return "in stock". 
    return "In stock";
  }

  // You should add a sell method which accepts the number of copies to sell and subtracts it from the number of copies. The number of copies to sell should have a default value of one.

  //Why use this and -= instead of mine??:
  //Because my function returns: Low, in, in:
  // sell(numberSold = 1){
  //   console.log(numberSold)
  //   //That is because you need another = to set the value 
  //   let sdf = this.numCopies = this.numCopies - numberSold;
  //   console.log(sdf);
  //   console.log(this.numCopies)
  //   return sdf
  // }

  //Hence this one is better because it is shorter and easy to read:

  sell(numCopiesSold) {
    numCopiesSold = numCopiesSold ?? 1;
    console.log(numCopiesSold);
    this.numCopies -= numCopiesSold;
    console.log(this.numCopies);
  }

  // You should add a restock method which accepts the number of copies to restock and adds it to the number of total copies. The number of copies to restock should have a default value of five.
  restock(numCopiesRestocked = 5){
    this.numCopies += numCopiesRestocked;
  }
}

//Remember to call functions in order to test:
//First create a book to test methods with. Make bood const and call "Book" Class with parameters filled in:
const Neuromancer = new Book("Neuromancer", "William Gibbons", 123919, 5);
console.log("Your book is currently " + Neuromancer.availability);
Neuromancer.restock(12);
console.log("Your book is currently " + Neuromancer.availability);
Neuromancer.sell();
console.log("Your book is currently " + Neuromancer.availability);

