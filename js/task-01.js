let categories = document.getElementsByClassName("item");
console.log("Number of categories: " + categories.length);

for (let i = 0; i < categories.length; i++) {
  console.log(`Category: ${categories[i].firstElementChild.innerHTML}`);
  console.log(
    `Elements: ${categories[i].firstElementChild.nextElementSibling.children.length}`
  );
}

let genre = document.getElementsByClassName("item");
console.log("Number of genre: " + genre.length);

for (let i = 0; i < genre.length; i++) {
  console.log(`Genre: ${genre[i].firstElementChild.innerHTML}`);
  console.log(
    `Elements: ${genre[i].firstElementChild.nextElementSibling.children.length}`
  );
}
