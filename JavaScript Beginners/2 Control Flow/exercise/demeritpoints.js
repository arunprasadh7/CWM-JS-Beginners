// demerit points
// speed limit 70
// less than 70 print ok
// every 5 more than 70 --> point
// more than 12 points - license suspended

// let point = 0;
// function checkSpeed(speed) {
//   if (speed <= 70) return "Ok";

//   if (speed > 70) {
//     let extraSpeed = speed - 70;
//     let extraPoint = extraSpeed / 5;
//     let final = Math.floor(extraPoint);
//     point += final;
//     return point;
//   }

//   if (point > 12) return "License Suspended";
// }

// cwm solution
function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) {
    return "Ok";
  } else {
    let point = Math.floor((speed - speedLimit) / kmPerPoint);

    if (point > 12) {
      console.log("License Suspended");
    } else {
      console.log("Points", point);
    }
  }
}

console.log(checkSpeed(50));
console.log(checkSpeed(70));
console.log(checkSpeed(71));
console.log(checkSpeed(80));
console.log(checkSpeed(300));
