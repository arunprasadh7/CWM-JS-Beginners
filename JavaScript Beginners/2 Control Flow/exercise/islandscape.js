// to check whether landscape or portrait

// function isLandscape(width, height) {
//   if (width > height) console.log("Image is Landscape");
//   else console.log("Image is Portrait");
// }

function isLandscape(width, height) {
  return width > height ? "Landscape" : "Portrait";
}

console.log(isLandscape(100, 150));
console.log(isLandscape(300, 150));
