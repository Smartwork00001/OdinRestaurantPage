import "./style.css";

const pageLoad = () => {
  const navBar = document.createElement("div");
  navBar.classList.add("nav-bar");
  navBar.innerHTML = `
  <div class="nav-bar-group">
  <span class="white-text small-text">Home</span>
  <span class="white-text small-text">About</span>
  <span class="white-text small-text">Gallery</span>
  <span class="white-text small-text">Book-table</span>
</div>
<div class="nav-bar-group">
  <span class="white-text small-text">Blog</span>
  <span class="white-text small-text">Review</span>
  <span class="white-text small-text">Contact-us</span>
</div>
`;
  return navBar;
};

export default pageLoad ;
