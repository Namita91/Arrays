// var marks = [35,30,45,50,62,40];
// console.log(marks);
// console.log(marks[2]);
// console.log(marks.length);

var days = ["Sunday", "Monday"];
console.log(days);
days.push("Tuesday");
days.push("Wednesday");
days.push("Thursday");
days.push("Friday");
days.push("Saturday");
console.log(days);
days.pop();
console.log(days);

// var m1 = [['maths', 35], ['science', 30], ['geography', 45], ['german',50], ['civics', 62], ['history', 40]];
// console.log(m1[3][0]);

// var dob = [3, "jan", 2010];



// function score_average() {
//   var sum = marks[0] + marks[1] + marks[2] + marks[3] + marks[4] + marks[5];
//   var avg = sum/marks.length;
//   console.log(avg);
// }

// function setup() {
//   createCanvas(400,400);

//   score_average();
// }

// function draw() {
//   background(180);
// }





// var marks = [35,30,45,50,62,40];
// var sum, average;
// var sprite = [];

// function setup() {
//   createCanvas(400, 400);

//   //averageMarks();

//   s1 = createSprite(150, 200, 20,35);
//   s2 = createSprite(25, 55, 10, 10);
//   s3 = createSprite(300, 100, 50, 30);
//   s4 = createSprite(10, 350, 20, 40);

//   sprite = [s1, s2, s3, s4];

//   for(var i=0; i<sprite.length; i++) {
//     console.log(sprite[i]);
//   }
// }

// function draw() {
//   background(220);

//   drawSprites();
// }

// function averageMarks() {
//   sum = 0;
//   for(var i = 0; i<6; i++) {
//     sum = sum + marks[i];
//   }
  
//   //sum = marks[0] + marks[1] + marks[2] + marks[3] + marks[4] + marks[5];
//   average = sum/marks.length;
//   console.log(sum);
//   console.log(average);

// }