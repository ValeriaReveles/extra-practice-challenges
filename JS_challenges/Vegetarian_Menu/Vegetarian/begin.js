/*
  WRITE YOUR SOLUTION HERE
*/
// Given an array of Italian dinner dishes, create a menu which contains only the vegetarian options.

// Each menu array index contains a dish object. A dish object contains the dish name and a boolean value indicating whether the dish is vegetarian.

// - Use the `array.filter()` method to differentiate dishes which are vegetarian
// - Dynamically generate each DOM node for the vegetarian dishes to append it as a list item to an unordered list:

// Solution:

// 1. Look at HTML provided. Don't forget to look at all your documentation before you panic. 
// 2. Copy and past the array provided, change name to reflect it is vegetarian menu.
// 3. Next create function to manipulate the DOM. 
  // To upend the array into a ul (an HTML element), you need to querySelect by id (#menu)
  // Pass your function the menu array:
function vegetarianMenu(menu) {
  //create a variable for element selected by ID:
  const menuNode = document.querySelector("#menu");
  //use array.filter() to differentiate dishes which are vegetarian by creating a new array that only outputs vegetarian options:
  const vegetarianOptions = menu.filter(
    //arrow function passing the parameter of options and calling the isVegetarian from the original array
    (option) => option.isVegetarian === true
  );
  //can dynamically generate list item for each. Use array for each loop to create list item for each veg menu item
  vegetarianOptions.forEach((option) => {
    //use createElement to create list item and then set text content to name of current element
    let dish = document.createElement("li");
    dish.textContent = option.name;
    //append new list item to unordered list using appendChild passing the dish variable as a parameter. Append child adds a node to the end of the list of children of a specified parent node. 
    menuNode.appendChild(dish);
  });
}


const menu = [
  {
    name: "Chicken parmesan",
    isVegetarian: false,
  },
  {
    name: "Penne a la vodka",
    isVegetarian: true,
  },
  {
    name: "Mushroom risotto",
    isVegetarian: true,
  },
  {
    name: "Veal saltambuca",
    isVegetarian: false,
  },
  {
    name: "Filet mignon",
    isVegetarian: false,
  },
];

// Call the function by creating a menu and pass it to vegetarianMenu function. (Different than original menu array provided).
vegetarianMenu([
  {
    name: "Chicken parmesan",
    isVegetarian: false,
  },
  {
    name: "Penne a la vodka",
    isVegetarian: true,
  },
  {
    name: "Mushroom risotto",
    isVegetarian: true,
  },
  {
    name: "Veal saltambuca",
    isVegetarian: false,
  },
  {
    name: "Filet mignon",
    isVegetarian: false,
  },
]);