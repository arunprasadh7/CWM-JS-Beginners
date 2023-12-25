// If else

// ex : if hour is 6am and 12pm - Good morning
// 12pm - 6pm : Good afternoon
// otherwise : Good evening

let time = 20;
let greet;

if (time >= 6 && time < 12) {
  console.log("Good Morning");
} else if (time > 12 && time <= 18) {
  console.log("Good afternoon!!");
} else {
  console.log("Good Night ");
}
