const id = new URLSearchParams(window.location.search).get("id");

const form_html = document.querySelector("form");
const deleteButton_tag = document.querySelector("#deleteButton");
const editButton_tag = document.querySelector("#editButton");
const buttonBack_tag = document.querySelector("#back-home");



console.log(id)

const getProduct = async () => {
    const url = "http://localhost:3000/products/" + id;
    const product = await fetch(url).then((response) => response.json());
    console.log(product);

    const form = `<div class="mb-3">
    <label class="form-label">Department</label>
    <input class="form-control" name="department" aria-describedby="emailHelp" value="${product.department}">
</div>
<div class="mb-3">
    <label class="form-label">Product Name</label>
    <input class="form-control" name="productName" value="${product.productName}">
</div>
<div class="mb-3">
    <label class="form-label">Price</label>
    <input class="form-control" name="price" value="${product.price}">
</div>
<div class="mb-3">
    <label class="form-label">Product Adjective</label>
    <input class="form-control" name="productAdjective" value="${product.productAdjective}">
</div>
<div class="mb-3">
    <label class="form-label">Product Material</label>
    <input class="form-control" name="productMaterial" value="${product.productMaterial}">
</div>
<div class="mb-3">
    <label class="form-label">Product</label>
    <input class="form-control" name="product" value="${product.product}">
</div>
<div class="mb-3">
    <label class="form-label">Product Description</label>
    <textarea class="form-control" name="productDescription">${product.productDescription}</textarea>
</div>
<div class="mb-3">
    <label class="form-label">Product Quantity</label>
    <input class="form-control" name="productQuantity" value="${product.productQuantity}">
</div>
<div class="mb-3">
    <label class="form-label">Minimun Quantity</label>
    <input class="form-control" name="minimunQuantity" value="${product.minimunQuantity}">
</div>
<div class="mb-3">
    <label class="form-label">Total Value</label>
    <input class="form-control" name="totalValue" value="${Number(product.productQuantity) * Number(product.price)}" readonly>
</div>
`;


    form_html.innerHTML = form;
}

getProduct();

const editButton = document.querySelector("#editButton");


const a = () => {

    const product = {
        id,
        department: form_html.department.value,
        productName: form_html.productName.value,
        price: form_html.price.value,
        productAdjective: form_html.productAdjective.value,
        productMaterial: form_html.productMaterial.value,
        product: form_html.product.value,
        productDescription: form_html.productDescription.value,
        productQuantity: form_html.productQuantity.value,
        minimunQuantity: form_html.minimunQuantity.value,
        totalValue: null,
        created_at: new Date(),
        updated_at: new Date()
    };

    fetch("http://localhost:3000/products/" + id, {
        method: "PUT",
        body: JSON.stringify(product),
        headers: { "Content-Type": "application/json" },
    });
}

const deleteProduct = () => {
    fetch("http://localhost:3000/products/" + id, {
        method: "DELETE",
    });
    window.location.replace("/");
}

form_html.addEventListener("submit", (e) => e.preventDefault());

editButton_tag.addEventListener("click", () => a());
deleteButton_tag.addEventListener("click", () => deleteProduct());

buttonBack_tag.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.replace("./home.html");
});