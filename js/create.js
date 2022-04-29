const form_html = document.querySelector("form");
const buttonBack_tag = document.querySelector("#back-home");


const getProduct = async () => {

    const form = `<div class="mb-3">
    <label class="form-label">Department</label>
    <input class="form-control" name="department" aria-describedby="emailHelp">
</div>
<div class="mb-3">
    <label class="form-label">Product Name</label>
    <input class="form-control" name="productName">
</div>
<div class="mb-3">
    <label class="form-label">Price</label>
    <input class="form-control" name="price">
</div>
<div class="mb-3">
    <label class="form-label">Product Adjective</label>
    <input class="form-control" name="productAdjective">
</div>
<div class="mb-3">
    <label class="form-label">Product Material</label>
    <input class="form-control" name="productMaterial">
</div>
<div class="mb-3">
    <label class="form-label">Product</label>
    <input class="form-control" name="product">
</div>
<div class="mb-3">
    <label class="form-label">Product Description</label>
    <textarea class="form-control" name="productDescription"></textarea>
</div>
<div class="mb-3">
    <label class="form-label">Product Quantity</label>
    <input class="form-control" name="productQuantity" >
</div>
<div class="mb-3">
    <label class="form-label">Minimun Quantity</label>
    <input class="form-control" name="minimunQuantity">
</div>
<div class="mb-3">
    <label class="form-label">Total Value</label>
    <input class="form-control" name="totalValue" readonly>
</div>
<button type="submit" class="btn btn-primary">Submit</button>
`;


    form_html.innerHTML = form;
}

const dataAtualFormatada = () => {
    const date = new Date().toISOString().replace("T", " ");
    return date.slice(0, 19);
}

const a = () => {

    const product = {
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
        created_at: dataAtualFormatada(),
        updated_at: dataAtualFormatada()
    };

    fetch("http://localhost:3000/products/", {
        method: "POST",
        body: JSON.stringify(product),
        headers: { "Content-Type": "application/json" },
    });
}

form_html.addEventListener("submit", (e) => {
    e.preventDefault();
    a();
});

window.addEventListener("DOMContentLoaded", () => getProduct());

buttonBack_tag.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.replace("./home.html");
});