console.log("hello world");

/*goal: user will click on button and then background will be a randomized gradiant*/
/* how we set css background gradient: background-image: linear-gradient(color1, color2);*/
/*1 - button detect a click from the user, trigger a gradient color change function*/
/*2 - inside the function, we will geneate two random colors (color1, color2)*/
// 2.1 - create four variables, r, g, b, a, and use Math.random for each variable to generate four random numbers rgb(220, 210, 50, 0.4) for color1
// 2.2 - do the same for color2
/*3 - set the background image to linear gradient (color1, color2)*/

function GetRandomGradient(){
  console.log("randomize my background color");
  // create random rgba color1
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var a = Math.random();
  
  var color1 = "rgba(" + r + "," + g + "," + b + "," + a +")";
  
  var r2 = Math.floor(Math.random() * 256);
  var g2 = Math.floor(Math.random() * 256);
  var b2 = Math.floor(Math.random() * 256);
  var a2 = Math.random();
  var color2 = "rgba(" + r2 + "," + g2 + "," + b2 + "," + a2 +")";
  
  var randGradient = "linear-gradient(to left," + color1 + "," + color2 +")";
  
  document.body.style.backgroundImage = randGradient;
  
  console.log("gradient color:", randGradient)
  
  console.log("colors", color1, color2);
}