import FoodPhoto1 from './pexels-monica-silvestre-803897.jpg'

const galleryTab = () => {
  const galleryDiv = document.createElement("div");
  galleryDiv.classList.add("gallery-div");
  galleryDiv.classList.add("hidden");
  galleryDiv.innerHTML = `<div class="gallery-item">
  <img class="gallery-item-photo" src="${FoodPhoto1}" alt="food">
</div>`;
  return galleryDiv;
};

export default galleryTab;
