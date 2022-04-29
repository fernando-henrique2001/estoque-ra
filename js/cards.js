const cards_div = document.getElementById("cards");
const buttonBack_tag = document.querySelector("#back-home");



const renderPosts = async () => {
    const url = "http://localhost:3000/products";
    const res = fetch(url).then((response) => response.json());
    const table = await res;

    let cards = "";

    for (const value of table) {
        cards += `<div class="card card-box-shadow" style="width: 18rem;">
        <div class="card-body">`

        cards += `<h5 class="card-title">${value.productName}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${value.department}</h6>
            <p class="card-text">${value.productDescription}</p>
            <a href="#" class="card-link">${value.price}</a>
            <a href="#" class="card-link">${value.productQuantity}</a>`

        cards += "</div></div>"
    }

    cards_div.innerHTML = cards;

};

window.addEventListener("DOMContentLoaded", () => renderPosts());

buttonBack_tag.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.replace("./home.html");
});