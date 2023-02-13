const homeTab = () => {
  const homeDiv = document.createElement("div");
  homeDiv.classList.add("home-div");
  homeDiv.classList.add("hidden");
  homeDiv.innerHTML = `<div class="white-text big-text">Food Hut</div>
  <div class="white-text medium-text">Always Fresh and Delightful </div>
  `;
  return homeDiv;
};

export default homeTab;
