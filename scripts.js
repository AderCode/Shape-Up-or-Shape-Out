// // GLOBAL DATA // //

//Storage Arrays
let circlesOnScreen = [];
let trianglesOnScreen = [];
let rectanglesOnScreen = [];
let squaresOnScreen = [];

//Make life easier things
let body = $("body");

//Buttons
let createCircleBtn = $(".create-circle");
let createTriangleBtn = $(".create-triangle");
let createRectangleBtn = $(".create-rectangle");
let createSquareBtn = $(".create-square");

// // GLOBAL FUNCTIONS // //

function getRandomVal(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

//Button Click Listeners
createCircleBtn.click(function() {
  console.log("Draw Circle Button has been clicked.");
});
createTriangleBtn.click(function() {
  console.log("Draw Triangle Button has been clicked.");
});
createRectangleBtn.click(function() {
  console.log("Draw Rectangle Button has been clicked.");
});
createSquareBtn.click(function() {
  console.log("Draw Square Button has been clicked.");
});

// // CLASS AND SUBCLASSES // //
class Shape {
  construstor(width, height, radius) {
    //Parent Class Properties
    this.width = width;
    this.height = height;
    this.radius = radius;
  }
  //Parent Class Methods
  method() {
    //method actions
  }
}

class Circle extends Shape {
  constructor() {
    //Inherited Properties go in Super(here, here)
    super();
    //class specific properties go here
  }
  classSpecificMethod() {
    //class specific method
  }
}

class Triangle extends Shape {
  constructor() {
    //Inherited Properties go in Super(here, here)
    super();
    //class specific properties go here
  }
  classSpecificMethod() {
    //class specific method
  }
}

class Rectangle extends Shape {
  constructor() {
    //Inherited Properties go in Super(here, here)
    super();
    //class specific properties go here
  }
  classSpecificMethod() {
    //class specific method
  }
}

class Square extends Shape {
  constructor() {
    //Inherited Properties go in Super(here, here)
    super(width);
    //class specific properties go here
  }
  classSpecificMethod() {
    //class specific method
  }
}
