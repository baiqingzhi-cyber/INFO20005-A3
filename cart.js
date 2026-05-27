let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartContainer = document.getElementById("cartContainer");
const subtotalEl = document.getElementById("subtotal");
const gstEl = document.getElementById("gst");
const deliveryFeeEl = document.getElementById("deliveryFee");
const finalTotalEl = document.getElementById("finalTotal");
const deliveryMethod = document.getElementById("deliveryMethod");
const addressInput = document.getElementById("addressInput");
const addressLabel = document.getElementById("addressLabel");
const pickupTimeInput = document.getElementById("pickupTimeInput");

const checkoutBtn = document.querySelector(".checkout-btn");
const nameInput = document.getElementById("nameInput");
const phoneInput = document.getElementById("phoneInput");


function renderCart() {
    cartContainer.innerHTML = "";

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        updateSummary();
        return;
    }

    let total = 0;

    cart.forEach((item, index) => {
        const subtotal = item.price * item.quantity;
        total += subtotal;

        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `
        <img src="${item.img}" class="cart-img">

        <div class="cart-info">
            <h3>${item.title}</h3>
            <p>$${item.price.toFixed(2)} / ${item.weight}</p>

            <div class="cart-controls">
                <button class="minus-btn" data-index="${index}">-</button>
                <span>${item.quantity}</span>
                <button class="plus-btn" data-index="${index}">+</button>
            </div>

            <p class="cart-subtotal">Subtotal: $${subtotal.toFixed(2)}</p>

            <button class="remove-btn" data-index="${index}">Remove</button>
        </div>
        `;

        cartContainer.appendChild(cartItem);
    });

    updateSummary();
  
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

cartContainer.addEventListener("click", (e) => {
  const index = e.target.dataset.index;

  if (e.target.classList.contains("plus-btn")) {
    cart[index].quantity++;
  }

  if (e.target.classList.contains("minus-btn")) {
    cart[index].quantity--;

    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }
  }

  if (e.target.classList.contains("remove-btn")) {
    cart.splice(index, 1);
  }

  saveCart();
  renderCart();
});

renderCart();

function updateSummary() {
    let subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    let gst = subtotal * 0.1;

    let deliveryFee = 0;
    if (deliveryMethod.value === "delivery") {
        deliveryFee = 6.0; // assume delivery fee is $6
    }

    let finalTotal = subtotal + gst + deliveryFee;

    subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    gstEl.textContent = `$${gst.toFixed(2)}`;
    deliveryFeeEl.textContent = `$${deliveryFee.toFixed(2)}`;
    finalTotalEl.textContent = `$${finalTotal.toFixed(2)}`;
}


// dynamic required field depending on delivery method

function updateRequiredField() {
    if (deliveryMethod.value === "pickup") {
        pickupTimeInput.required = true;
        addressInput.required = false;
        addressInput.value = "";
        addressLabel.textContent = `Address (Optional)`
    } else {
        pickupTimeInput.required = false;
        addressInput.required = true;
        addressInput.value = "";
        addressLabel.textContent = `Address (Required)`
    }
}

deliveryMethod.addEventListener("change", () => {
    updateRequiredField();
    updateSummary();
});

// send information to checkout page
checkoutBtn.addEventListener("click", () => {
    const orderInfo = {
        method: deliveryMethod.value,
        name: nameInput.value,
        phone: phoneInput.value,
        address: addressInput.value,
        pickupTime: pickupTimeInput.value
    };

    localStorage.setItem("orderInfo", JSON.stringify(orderInfo));

    window.location.href = "checkout.html";
});

document.querySelector(".back-btn").addEventListener("click", () => {
    if (history.length > 1) {
        history.back();
    } else {
        window.location.href = "home.html";
    }
});

// init
updateRequiredField();
updateSummary();