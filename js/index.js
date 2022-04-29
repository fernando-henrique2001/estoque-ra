const headerTable_thead = document.getElementById("header");
const rowsTable_tbody = document.getElementById("rows");
const select_tag = document.querySelector(".form-select");
const form_tag = document.querySelector(".form-header");
const buttonBack_tag = document.querySelector("#back-home");


const getHeaderTable = async () => {

    const url = `http://localhost:3000/products`;
    const res = fetch(url).then((response) => response.json());
    const table = await res;
    return table;
}

const getHeaderTableFilter = async (value) => {
    console.log(value[0]);
    const url = `http://localhost:3000/products?${value[0]}=${value[1]}`;
    const res = fetch(url).then((response) => response.json());
    const table = await res;
    return table;
}

const renderFilter = async () => {
    const table = await getHeaderTable();

    let options = "<option selected>Open this select menu</option>";

    for (column in table[0]) {
        options += `
        <option value="${column}">${column}</option>
        `
    }

    select_tag.innerHTML = options;
}


const renderPosts = async (boolean) => {
    let table;
    if (boolean) {
        table = await getHeaderTableFilter([select_tag.value, form_tag.key.value]);
    } else {
        table = await getHeaderTable();
    }
    let header = "";

    for (column in table[0]) {
        header += `
            <th scope="col">${column}</th>
        `
    }

    let rows = "";

    for (let value of table) {
        console.log(value.id);
        rows += `<tr onclick="redirectEdit(${value.id})">`
        value = {
            ...value
        }

        for (let row in value) {
            rows += ` <td>${row == "totalValue" ? "R$ " + (value["price"] * value["productQuantity"]) + ",00" : value[row]}</td>`
        }

        rows += "</tr>"
    }




    headerTable_thead.innerHTML = header;
    rowsTable_tbody.innerHTML = rows;

};

const redirectEdit = (id) => {
    window.location.href = ("/edit.html?id=" + id);
}

window.addEventListener("DOMContentLoaded", () => {
    renderFilter();
    renderPosts(false)
});

form_tag.addEventListener('submit', (e) => {
    e.preventDefault();
    renderPosts(true);
});

buttonBack_tag.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.replace("./home.html");
});