// String properties in JS
// display the title and director values from the movie object

const movie = {
  title: "a",
  releaseYear: 2021,
  rating: 4.5,
  director: "b",
};

function showProperites(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      console.log(key, obj[key]);
    }
  }
}

showProperites(movie);
