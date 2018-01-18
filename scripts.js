// // GLOBAL DATA // //

//Counter
let created = 0;

//Storage Arrays
let circlesOnScreen = [];
let trianglesOnScreen = [];
let rectanglesOnScreen = [];
let squaresOnScreen = [];

//Make life easier things
let body = $("body");
let btnContainer = $("#btns");
let easleContainer = $("#easle");
let statsContainer = $("#stats");
let max = 601;

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
  let radiusInput = $('.circle-input').val();
  heightWidth = radiusInput
  if (heightWidth >= max) {
      alert('Enter a number between 0 - 600')
  } else {
  new Circle(heightWidth);
};
});
createTriangleBtn.click(function() {
  console.log("Draw Triangle Button has been clicked.");
  let heightInput = $('.triangle-input').val();
  if (heightInput >= max) {
    alert('Enter a number between 0 - 600')
} else {
  new Triangle(heightInput);
}
});
createRectangleBtn.click(function() {
  console.log("Draw Rectangle Button has been clicked.");
  let heightInput = $('.rectangle-height-input').val();
  let widthInput = $('.rectangle-width-input').val();
  console.log(`Rectangle: Height Input = ${$('.rectangle-height-input').val()}`);
  console.log(`Rectangle: Width Input = ${$('.rectangle-width-input').val()}`);
  if (heightInput >= max) {
    alert('Enter a number between 0 - 600')
} else if (widthInput >= max) {
    alert('Enter a number between 0 - 600')
} else {
  new Rectangle(heightInput, widthInput);
}
});
createSquareBtn.click(function() {
  console.log("Draw Square Button has been clicked.");
  console.log(`A div should have generated.`);
  let sideLengthVal = $('.square-input').val();
  console.log(`Square: Side Length = ${$('.square-input').val()}`);
  if (sideLengthVal >= max) {
    alert('Enter a number between 0 - 600')
} else {
  new Square(sideLengthVal);
}
//   new Shape(xVal, yVal).style();
});

// // CLASS AND SUBCLASSES // //
class Shape {
  constructor(height, width) {
    //Parent Class Properties
    this.height = height;
    this.width = width;
    this.area = parseInt(this.width) * parseInt(this.height);
    this.radius = 'Radius is resevered for circles... Stupid...';

  }
  //Parent Class Methods
  describe() {
    console.log(`Stats would populate.`);
    console.log(this.div.class);
    $('#stats').html(`
        Shape: ${this.div.class}<br>
        Height: ${this.height}<br>
        Width: ${this.width}<br>
        Radius: ${this.radius}<br>
        Area: ${this.area}<br>
        Perimeter: ${this.perimeter}<br>
        `);

  }

  draw() {
    console.log(this);
    this.div = $("<div></div>");
    easleContainer.append(this.div);
    this.div.attr('id', `${created}`);
    $(`#${created}`).css({
        'height': `${this.height}px`, 
        'width': `${this.width}px`,
        'top': `${getRandomVal(this.height, 601)}px`,
        'left': `${getRandomVal(this.width, 601)}px`,
    })
    created++;
    this.div.click( () => {
        this.describe();
    });
    this.div.dblclick( () => {
        this.div.remove()
        $('#stats').html(`
        Shape: <br>
        Height: <br>
        Width: <br>
        Radius: <br>
        Area: <br>
        Perimeter: <br>
        `)
    })
    }
   
    randomLocation() {
        let top = getRandomVal(min, max);
        let left = getRandomVal(min, Max);
        $
    }
  
    getArea() {
        area = this.width * this.height;
        return area;
    }


  
}

class Circle extends Shape {
  constructor(radius) {
    //Inherited Properties go in Super(here, here)
    super(radius, radius);
    //class specific properties go here
    this.draw();
    this.height = radius * 2;
    this.width = radius * 2;
    this.radius = radius;
    this.div.attr('class', 'circle')
    this.div.class = 'Circle';
    this.area = radius * radius * Math.PI
    this.perimeter = radius * 2 * Math.PI;
    console.log(this);
  }
  classSpecificMethod() {
    //class specific method
  }
}

class Triangle extends Shape {
  constructor(height) {
    //Inherited Properties go in Super(here, here)
    super(height, height);
    //class specific properties go here
    this.draw()
    this.div.attr('class', 'triangle')
    this.div.class = 'Triangle'
    this.area = this.height * this.width / 2
    this.perimeter = 2 * this.height + Math.sqrt(2) * this.height;
    this.div.css({
        'border-bottom': `solid ${height}px yellow`,
        'border-right': ` solid ${height}px transparent`
    })
    this.div.css({
        'height': '0',
        'width': '0'
    });
  }
  classSpecificMethod() {
    //class specific method
  }
}

class Rectangle extends Shape {
  constructor(height, width) {
    //Inherited Properties go in Super(here, here)
    super(height, width);
    //class specific properties go here
    this.draw();
    this.div.attr('class', 'rectangle')
    this.div.class = 'Rectangle'
    this.perimeter = this.height * 2 + this.width * 2;
    console.log(this);
  }
  classSpecificMethod() {
    //class specific method
  }
}

class Square extends Shape {
  constructor(sideLength) {
    //Inherited Properties go in Super(here, here)
    super(sideLength, sideLength);
    //class specific properties go here
    // this.style.backgroundColor = 'red'
    this.draw();
    this.div.attr("class", 'square');
    this.div.class = 'Square';
    this.perimeter = this.sideLength * 4;
    console.log(this);
    // this.div.style.backgroundColor = "red";
  }
  classSpecificMethod() {
    //class specific method
  }
}
