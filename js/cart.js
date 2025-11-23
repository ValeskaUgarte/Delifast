// ========== SISTEMA DE CARRITO ==========

// Obtener carrito
function getCart() {
  const cartJson = localStorage.getItem('delifastCart');
  return cartJson ? JSON.parse(cartJson) : [];
}

// Guardar carrito
function saveCart(cart) {
  localStorage.setItem('delifastCart', JSON.stringify(cart));
  updateCartBadge();
}

// Agregar producto al carrito
function addToCart(product) {
  let cart = getCart();
  const existingItem = cart.find(item => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }

  saveCart(cart);
  showNotification('Producto agregado al carrito');
}

// Remover producto del carrito
function removeFromCart(productId, removeAll) {
  removeAll = removeAll || false;
  let cart = getCart();
  const itemIndex = cart.findIndex(item => item.id === productId);

  if (itemIndex !== -1) {
    if (removeAll || cart[itemIndex].quantity === 1) {
      cart.splice(itemIndex, 1);
    } else {
      cart[itemIndex].quantity -= 1;
    }
  }

  saveCart(cart);
}

// Vaciar carrito
function clearCart() {
  localStorage.removeItem('delifastCart');
  updateCartBadge();
}

// Obtener total del carrito
function getCartTotal() {
  const cart = getCart();
  return cart.reduce(function(total, item) {
    return total + (item.price * item.quantity);
  }, 0);
}

// Obtener cantidad de productos
function getCartCount() {
  const cart = getCart();
  return cart.reduce(function(count, item) {
    return count + item.quantity;
  }, 0);
}

// Actualizar badge del carrito
function updateCartBadge() {
  const badge = document.getElementById('cart-count');
  const count = getCartCount();
  
  if (badge) {
    if (count > 0) {
      badge.textContent = count;
      badge.style.display = 'inline-block';
    } else {
      badge.style.display = 'none';
    }
  }
}

// Mostrar notificación
function showNotification(message) {
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.style.cssText = 'position: fixed; top: 80px; right: 20px; background: #28a745; color: white; padding: 15px 20px; border-radius: 5px; box-shadow: 0 4px 6px rgba(0,0,0,0.2); z-index: 9999;';
  
  document.body.appendChild(notification);
  
  setTimeout(function() {
    document.body.removeChild(notification);
  }, 3000);
}