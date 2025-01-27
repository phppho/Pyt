// إضافة منتج جديد إلى الصفحة
document.getElementById("add-product-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const productName = document.getElementById("product-name").value;
    const productDescription = document.getElementById("product-description").value;
    const productPrice = document.getElementById("product-price").value;
    const productImage = document.getElementById("product-image").files[0];

    const productContainer = document.createElement("div");
    productContainer.classList.add("product");

    const productImg = document.createElement("img");
    productImg.src = URL.createObjectURL(productImage);
    productContainer.appendChild(productImg);

    const productTitle = document.createElement("h3");
    productTitle.textContent = productName;
    productContainer.appendChild(productTitle);

    const productDesc = document.createElement("p");
    productDesc.classList.add("description");
    productDesc.textContent = productDescription;
    productContainer.appendChild(productDesc);

    const productPriceElem = document.createElement("p");
    productPriceElem.classList.add("price");
    productPriceElem.textContent = "سعر: " + productPrice + " ريال";
    productContainer.appendChild(productPriceElem);

    document.getElementById("products").appendChild(productContainer);

    // مسح النموذج بعد الإضافة
    document.getElementById("add-product-form").reset();
});