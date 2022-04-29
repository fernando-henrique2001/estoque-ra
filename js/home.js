const div = document.querySelector(".home");
const id_html = document.querySelector("#id");
const div_html = document.querySelector(".id");
const button_tag = document.querySelector("#search");
const input_html = document.querySelector(".input");
const create_html = document.querySelector("#create");

const getProduct = () => {
    const id = id_html.value;
    console.log(id);
    window.location.href = ("/edit.html?id=" + id);
}


button_tag.addEventListener("click", (e) => {
    e.preventDefault;
    getProduct();
});

