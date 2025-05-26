// تفعيل القائمة الجانبية عند الضغط أو الضغط على Enter/مسافة
document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.querySelector('.bars-menu');
  const navItems = document.querySelector('.nav-items');

  if (menuIcon && navItems) {
    const toggleMenu = () => navItems.classList.toggle('active');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const messageBox = document.getElementById('message-box');

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    messageBox.textContent = 'تم إضافة المنتج إلى السلة';
    messageBox.style.display = 'block';

    setTimeout(() => {
      messageBox.style.display = 'none';
    }, 3000); // الرسالة تظهر 3 ثواني ثم تختفي
  });
});

    menuIcon.addEventListener('click', toggleMenu);

    menuIcon.setAttribute('tabindex', '0'); // دعم لوحة المفاتيح
    menuIcon.setAttribute('role', 'button');
    menuIcon.setAttribute('aria-label', 'قائمة التنقل');

    menuIcon.addEventListener('keypress', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        toggleMenu();
      }
    });
  }
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
cart.push({ name: "ورق Hi Plus", quantity: 1 });
localStorage.setItem("cart", JSON.stringify(cart));
    
});
