/*
After reading product info from product.js, this program will create product 
cards and insert them to expected pages.
*/

function createProductCard(product) {
    return `
        <article class="product-card"
            data-desc="${product.desc}"
            data-allergens="${product.allergens}"
            data-storage="${product.storage}"
        >
            <div class="product-img">
                <img src="${product.img}" alt="${product.title}" />
            </div>

            <div class="product-info">
                <h3 class="product-name">${product.title}</h3>

                <div class="price-spec">
                    <p class="price">$${product.price.toFixed(2)}</p>
                    <p>/</p>
                    <p class="spec">${product.weight}</p>
                </div>

                <button class="add-btn">Add to cart</button>
            </div>
        </article>
    `;
}

// categories：cookie / bread / cake / pie
const categoryList = document.querySelector("[data-category]");

if (categoryList) {
    const category = categoryList.dataset.category;

    const categoryProducts = products.filter(product =>
        product.category === category
    );

    categoryList.innerHTML = categoryProducts
        .map(createProductCard)
        .join("");
}

// shop.html：New Arrivals / Popular
const tagLists = document.querySelectorAll("[data-tag]");

tagLists.forEach(list => {
    const tag = list.dataset.tag;

    const taggedProducts = products.filter(product =>
        product.tags.includes(tag)
    );

    list.innerHTML = taggedProducts
        .map(createProductCard)
        .join("");
});