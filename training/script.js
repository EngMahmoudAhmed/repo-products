// var productNameInput = document.getElementById('productName');
// var productPriceInput = document.getElementById('productPrice');
// var productCategoryInput = document.getElementById('productCategory');
// var productDescInput = document.getElementById('productDesc');
// var productsContainer;

// if (localStorage.getItem('products') == null) {
//     productsContainer = [];
// }
// else {
//     productsContainer = JSON.parse(localStorage.getItem("products"))
//     displayProduct();
// }

// function addProduct() {
//     var products = {
//         name: productNameInput.value,
//         price: productPriceInput.value,
//         category: productCategoryInput.value,
//         desc: productDescInput.value,
//     }
//     // console.log(products)
//     productsContainer.push(products);
//     localStorage.setItem("products", JSON.stringify(productsContainer));
//     displayProduct();
//     // clearForm();


// }


// function displayProduct() {
//     var cartoona = ``;
//     for (var i = 0; i < productsContainer.length; i++) {

//         cartoona += `<tr>
//                 <td>${i}</td>
//                 <td>${productsContainer[i].name}</td>
//                 <td>${productsContainer[i].price}</td>
//                 <td>${productsContainer[i].category}</td>
//                 <td>${productsContainer[i].desc}</td>
//                 <td><button onclick ="updateProduct (${i})"  class="btn btn-danger">update</button></td>
//                 <td><button onclick = "deleteProduct (${i});" class="btn btn-info">delete</button></td>
//                 </tr>`
//     }
//     document.getElementById('tboody').innerHTML = cartoona;
// }


// function deleteProduct(x) {
//     productsContainer.splice(x, 1)
//     displayProduct();
// }

// function updateProduct(i) {
//     productsContainer[i].name;
// }


// function clearForm() {
//     productNameInput.value = '';
//     productPriceInput.value = '';
//     productCategoryInput.value = '';
//     productDescInput.value = '';
// }

var productNameInput = document.getElementById('productName');
var productPriceInput = document.getElementById('productPrice');
var productCategoryInput = document.getElementById('productCategory');
var productDescInput = document.getElementById('productDesc');
var productContainer;

if(localStorage.getItem('products') == null)
{
    productContainer = [];
}
else
{
    productContainer = JSON.parse(localStorage.getItem('products'));
    displayProduct(productContainer);
    

}


function addProduct ()
{
    var product = {
        name:productNameInput.value,
        price:productPriceInput.value,
        category:productCategoryInput.value,
        desc:productDescInput.value,
    }
    productContainer.push(product)
    localStorage.setItem('products',JSON.stringify(productContainer));
    var z = localStorage.length;
    console.log(z)
    console.log(productContainer)
    displayProduct(productContainer);
    clearForm ();
}

function displayProduct (produtsList)
{
    var cartoona = ``;
    for (var i=0 ; i<produtsList.length ; i++)
    {
        cartoona += `<tr>
                <td>${i}</td>
                <td>${produtsList[i].name}</td>
                <td>${produtsList[i].price}</td>
                <td>${produtsList[i].category}</td>
                <td>${produtsList[i].desc}</td>
                <td><button class="btn btn-danger">Update</button></td>
                <td><button onclick ="deleteProduct (${i});" class="btn btn-success">Delete</button></td>
                </tr>`
    }
    document.getElementById('tboody').innerHTML=cartoona;
    
}

function clearForm ()
{
    productNameInput,value = '';
    productPriceInput.value = '';
    productCategoryInput.value = '';
    productDescInput.value = '';
}

function deleteProduct (x)
{
    productContainer.splice(x,1);
    localStorage.setItem('products',JSON.stringify(productContainer));
    displayProduct(productContainer);
    console.log(productContainer)

}
