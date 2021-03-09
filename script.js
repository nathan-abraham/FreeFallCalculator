/*
I used w3schools.com as a general reference

Images used in website were taken from Google Images, specifically these websites: 

https://traveltriangle.com/blog/beautiful-landscapes-around-the-world/

https://www.geek.com/news/what-would-it-be-like-to-stand-on-jupiter-1599006/

https://www.smithsonianmag.
com/smart-news/mars-surface-may-be-toxic-bacteria-180963966/
*/

function ComputeTimeAndVelocity(height, g) {
  var answer = Math.sqrt((parseFloat(height) * 2) / g);
  var result2 = Math.sqrt(2 * g * parseFloat(height));

  x = answer.toFixed(2)
  y = result2.toFixed(2)

  document.querySelector("#Time").innerHTML = x;
  document.querySelector("#Velocity").innerHTML = y;
}

function ComputeHeightAndVelocity(time, g) {
  var answer = 0.5 * g * (parseFloat(time) * parseFloat(time));
  result2 = Math.sqrt(2 * g * answer);

  x = answer.toFixed(2)
  y = result2.toFixed(2)

  document.querySelector("#Height").innerHTML = x;
  document.querySelector("#Velocity").innerHTML = y;
}

function ComputeHeightAndTime(velocity, g) {

  var answer = (parseFloat(velocity) ** 2) / (2 * g);
  var result2 = parseFloat(velocity) / g;

  x = answer.toFixed(2)
  y = result2.toFixed(2)

  document.querySelector("#Height").innerHTML = x;
  document.querySelector("#Time").innerHTML = y;
}

function ComputeFreeFallEarth() {
  //Get user input
  var height = document.querySelector("#height").value
  var velocity = document.querySelector("#velocity").value
  var time = document.querySelector("#time").value
  //Gravitational Acceleration of earth is 9.8
  var g = 9.8

  if (time == "" && velocity == "") {
    ComputeTimeAndVelocity(height, g);
  } 
  else if (height == "" && velocity == "") {
    ComputeHeightAndVelocity(time, g);
  } 
  else if (height == "" && time == "") {
    ComputeHeightAndTime(velocity, g);
  }
}

function ComputeFreeFallJupiter() {
  var height = document.querySelector("#height").value
  var velocity = document.querySelector("#velocity").value
  var time = document.querySelector("#time").value
  var g = 24.79

  if (time == "" && velocity == "") {
    ComputeTimeAndVelocity(height, g);
  } 
  else if (height == "" && velocity == "") {
    ComputeHeightAndVelocity(time, g);
  } 
  else if (height == "" && time == "") {
    ComputeHeightAndTime(velocity, g);
  }
}

function ComputeFreeFallMars() {
  var height = document.querySelector("#height").value
  var velocity = document.querySelector("#velocity").value
  var time = document.querySelector("#time").value
  var g = 3.71
  
  if (time == "" && velocity == "") {
    ComputeTimeAndVelocity(height, g);
  } 
  else if (height == "" && velocity == "") {
    ComputeHeightAndVelocity(time, g);
  } 
  else if (height == "" && time == "") {
    ComputeHeightAndTime(velocity, g);
  }
}



