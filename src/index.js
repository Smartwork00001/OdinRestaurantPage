import "./style.css";
import pageLoad from "./pageLoad";
import homeTab from "./homeTab";
import contactTab from "./contactTab";
import galleryTab from "./galleryTab";

const content = document.querySelector("#content");
const navBarDiv = pageLoad();
const homeDiv = homeTab();
const galleryDiv = galleryTab();
const contactDiv = contactTab();

content.appendChild(navBarDiv);
content.appendChild(homeDiv);
content.appendChild(contactDiv);
content.appendChild(galleryDiv);

const pageInit = function () {
  homeDiv.classList.remove("hidden");
};

pageInit();

const makeHidden = function () {
  if (!homeDiv.classList.contains("hidden")) {
    homeDiv.classList.add("hidden");
  }
  if (!contactDiv.classList.contains("hidden")) {
    contactDiv.classList.add("hidden");
  }
  if (!galleryDiv.classList.contains("hidden")) {
    galleryDiv.classList.add("hidden");
  }
};

const navBarEventHandler = function (event) {
  const navElement = event.target.closest("span");
  makeHidden();
  if (navElement) {
    if (navElement.textContent === "Contact-us") {
      contactDiv.classList.remove("hidden");
    } else if (navElement.textContent === "Home") {
      homeDiv.classList.remove("hidden");
    } else if (navElement.textContent === "Gallery") {
      galleryDiv.classList.remove("hidden");
    }
  }
};

navBarDiv.addEventListener("click", navBarEventHandler);
