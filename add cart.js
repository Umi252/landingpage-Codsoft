document.addEventListener('DOMContentLoaded', function() {
    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
    const cartOverlay = document.getElementById('cart-overlay');
    const closeCartBtn = document.getElementById('close-cart-btn');
  
    addToCartBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        cartOverlay.style.display = 'flex';
      });
    });
  
    closeCartBtn.addEventListener('click', function() {
      cartOverlay.style.display = 'none';
    });
  });
  