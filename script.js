// Apex Gym Interactive Script
document.addEventListener("DOMContentLoaded", () => {
    let cartItemsCount = 0;
    const cartBadge = document.getElementById("cartCount");
    const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            cartItemsCount++;
            if (cartBadge) {
                cartBadge.textContent = cartItemsCount;
                cartBadge.style.transform = "scale(1.3)";
                setTimeout(() => {
                    cartBadge.style.transform = "scale(1)";
                }, 200);
            }
            alert("Item added to cart successfully!");
        });
    });
});