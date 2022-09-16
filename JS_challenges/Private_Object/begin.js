/*
  WRITE YOUR SOLUTION HERE
*/
// Create a user object which has three properties:

// - username
// - password
// - age

// Username and password must not be accessible when accessed with
// alert() or console.log(). Age can be publicly accessed.

//New JavaScript ES6 primitive type is symbols:
  const username = Symbol("username");
  const password = Symbol("password");

  // use symbol factory function to return unique symbol and prevents access using this.username or this.password:
  // use [] to call variable assigned to symbol:

  //create a user:
  const user = {
  [username]: "valevale",
  [password]: "1234566",
  age: 29,
};



  console.log(username);
  console.log(password);
  console.log(user.username);



// const username = Symbol("username");
// const password = Symbol("password");

// const user = {
//   [username]: "emmabostian",
//   [password]: "1234566",
//   age: 27,
// };

// console.log(user.username);