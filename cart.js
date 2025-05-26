let cart = JSON.parse(localStorage.getItem("cart")) || [];
cart.push({ name: "ورق Hi Plus", quantity: 1 });
localStorage.setItem("cart", JSON.stringify(cart));
    