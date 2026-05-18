// Load data from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let orderInfo = JSON.parse(localStorage.getItem("orderInfo")) || {};

// Receipt elements
const receiptItems = document.getElementById("receiptItems");

const receiptMethod = document.getElementById("receiptMethod");
const receiptName = document.getElementById("receiptName");
const receiptPhone = document.getElementById("receiptPhone");
const receiptAddress = document.getElementById("receiptAddress");
const receiptPickupTime = document.getElementById("receiptPickupTime");

const receiptSubtotal = document.getElementById("receiptSubtotal");
const receiptGST = document.getElementById("receiptGST");
const receiptDeliveryFee = document.getElementById("receiptDeliveryFee");
const receiptTotal = document.getElementById("receiptTotal");

// Payment form
const paymentForm = document.getElementById("paymentForm");

// Render receipt items
function renderReceiptItems() {
    receiptItems.innerHTML = "";

    if (cart.length === 0) {
        receiptItems.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    cart.forEach(item => {
        const row = document.createElement("div");
        row.classList.add("receipt-item");

        row.innerHTML = `
        <p>${item.title} x ${item.quantity}</p>
        <p>$${(item.price * item.quantity).toFixed(2)}</p>
        `;

        receiptItems.appendChild(row);
    });
}

// Load order info
function renderOrderInfo() {
    receiptMethod.textContent = orderInfo.method || "-";
    receiptName.textContent = orderInfo.name || "-";
    receiptPhone.textContent = orderInfo.phone || "-";

    // If pickup, address should show "-"
    if (orderInfo.method === "pickup") {
        receiptAddress.textContent = "-";
        receiptPickupTime.textContent = orderInfo.pickupTime || "-";
    } else {
        receiptAddress.textContent = orderInfo.address || "-";
        receiptPickupTime.textContent = "-";
    }
}

// Calculate price summary
function renderSummary() {
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const gst = subtotal * 0.1;

    let deliveryFee = 0;
    if (orderInfo.method === "delivery") {
        deliveryFee = 6.0; // same delivery fee as cart page
    }

    const total = subtotal + gst + deliveryFee;

    receiptSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    receiptGST.textContent = `$${gst.toFixed(2)}`;
    receiptDeliveryFee.textContent = `$${deliveryFee.toFixed(2)}`;
    receiptTotal.textContent = `$${total.toFixed(2)}`;
}

// Payment submit (Demo)
paymentForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    alert("Payment successful! (Demo)");

    // clear storage
    localStorage.removeItem("cart");
    localStorage.removeItem("orderInfo");

    // redirect
    window.location.href = "home.html"; 
});

// Init
renderReceiptItems();
renderOrderInfo();
renderSummary();