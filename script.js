var productNameInput = document.getElementById('productName');
var productPriceInput = document.getElementById('productPrice');
var productCategoryInput = document.getElementById('productCategory');
var productDescInput = document.getElementById('productDesc');
var productContainer;

if (localStorage.getItem('products') == null) {
    productContainer = [];
}
else {
    productContainer = JSON.parse(localStorage.getItem('products'));
    displayProduct(productContainer);
}


function addProduct() {
    var product = {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        desc: productDescInput.value,
    }
    productContainer.push(product)
    localStorage.setItem('products', JSON.stringify(productContainer));
    displayProduct(productContainer);
    clearForm();
}

function displayProduct(produtsList) {
    var cartoona = ``;
    for (var i = 0; i < produtsList.length; i++) {
        cartoona += `<tr>
                <td>${i}</td>
                <td>${produtsList[i].name}</td>
                <td>${produtsList[i].price}</td>
                <td>${produtsList[i].category}</td>
                <td>${produtsList[i].desc}</td>
                <td><button class="rounded-pill btn btn-danger">Update</button></td>
                <td><button onclick ="deleteProduct (${i});" class=" px-3 rounded-pill btn btn-success">Delete</button></td>
                </tr>`
    }
    document.getElementById('tboody').innerHTML = cartoona;

}

// function clearForm() {
//     productNameInput.value = '';
//     productPriceInput.value = '';
//     productCategoryInput.value = '';
//     productDescInput.value = '';
// }

function deleteProduct(x) {
    productContainer.splice(x, 1);
    localStorage.setItem('products', JSON.stringify(productContainer));
    displayProduct(productContainer);
}

function searchProduct(term) {
    var searchProduct = [];
    for (var i = 0; i < productContainer.length; i++) {
        if (productContainer[i].name.toLowerCase().includes(term.toLowerCase()) == true) {
            searchProduct.push(productContainer[i]);
        }
    }
    displayProduct(searchProduct)
}
