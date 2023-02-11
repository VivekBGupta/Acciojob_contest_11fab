
fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => {
    // console.log(data.products)
    let arr = data.products
    let product_data = ""
    arr.map((value)=>{
        product_data +=`<div class="card">
                            <img src="${value.images[0]}" alt=""> 
                            <p class="title">${value.title} </p>
                            <p class="brand">Brand : ${value.brand}</p>
                            <p class="desc"><b>Description</b> :<i> ${value.description}</i></p>
                            <p class="price">${value.price}$  <span id="discount">${value.discountPercentage}% discount</span></p>
                            <p class="rating">Rating : ${value.rating}</p>
                            <p class="stock">Only ${value.stock} in Stock</p>
                        </div>`;   
    });
    document.getElementsByClassName("cards")[0].innerHTML = product_data;
});