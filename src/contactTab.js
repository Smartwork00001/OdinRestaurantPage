const contactTab = () => {
    const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact-div");
  contactDiv.classList.add("hidden");
  contactDiv.innerHTML = `<div class="white-text medium-text">WhatsApp : 93458 28934</div>
  <div class="white-text medium-text">Email : service@foodhut.com </div>
  `;
  return contactDiv;
};
export default contactTab;
