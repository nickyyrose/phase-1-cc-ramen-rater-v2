// index.js

const detailImg = document.querySelector(".detail-image");
const detailName = document.querySelector(".name");
const detailRestaurant = document.querySelector(".restaurant");
const detailRating = document.querySelector("#rating-display");
const detailComment = document.querySelector("#comment-display");
// Callbacks
const handleClick = (ramen) => {
  detailImg.src = ramen.image;
  detailImg.alt = ramen.name;
  detailName.textContent = ramen.name;
  detailRestaurant.textContent = ramen.restaurant;
  detailRating.textContent = ramen.rating;
  detailComment.textContent = ramen.comment;
};

const addSubmitListener = () => {
  const form = document.querySelector("#new-ramen");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const ramen = {
      name: e.target.name.value,
      restaurant: e.target.restaurant.value,
      image: e.target.image.value,
      rating: e.target.rating.value,
      comment: e.target["new-comment"].value,
    };

    displayRamen(ramen);
    e.target.reset();
  });
};

const ramenMenu = document.querySelector("#ramen-menu");

const displayRamen = (ramen) => {
  const img = document.createElement("img"); 
  img.addEventListener("click", () => handleClick(ramen));
  img.src = ramen.image;
  img.alt = ramen.name;
  ramenMenu.append(img); 
};

const displayRamens = async () => {
  const response = await fetch("http://localhost:3000/ramens");
  const ramens = await response.json();
  for (const ramen of ramens) {
    displayRamen(ramen);
  }
};

const main = () => {
  displayRamens();
  addSubmitListener();
};

main();

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
