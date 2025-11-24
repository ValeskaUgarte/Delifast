// ========== MANEJADORES DE EVENTOS ==========

// Submit Login
function submitLogin(event) {
  event.preventDefault();
  
  var email = document.getElementById('login-email').value;
  var password = document.getElementById('login-password').value;
  
  var result = handleLogin(email, password);
  
  if (result.success) {
    navigate('home'); // Redirigir a home después de login
  } else {
    document.getElementById('login-error').innerHTML = '<div class="alert alert-danger">' + result.message + '</div>';
  }
}

// Submit Register
function submitRegister(event) {
  event.preventDefault();
  
  var formData = {
    name: document.getElementById('register-name').value,
    email: document.getElementById('register-email').value,
    phone: document.getElementById('register-phone').value,
    address: document.getElementById('register-address').value,
    password: document.getElementById('register-password').value,
    confirmPassword: document.getElementById('register-confirm').value
  };
  
  var result = handleRegister(formData);
  
  if (result.success) {
    navigate('home'); // Redirigir a home después de registro
  } else {
    document.getElementById('register-error').innerHTML = '<div class="alert alert-danger">' + result.message + '</div>';
  }
}

// Submit Forgot Password
function submitForgotPassword(event) {
  event.preventDefault();
  
  var email = document.getElementById('forgot-email').value;
  var result = handleForgotPassword(email);
  
  if (result.success) {
    alert(result.message);
    navigate('login');
  }
}

// Submit Checkout
// Submit Checkout
function submitCheckout(event) {
  event.preventDefault();
  
  var user = getCurrentUser();
  if (!user) {
    navigate('login');
    return;
  }
  
  var orderId = 'ORD-' + Date.now();
  var cart = getCart();
  
  // Actualizar contador de pedidos del usuario
  user.totalOrders = (user.totalOrders || 0) + 1;
  saveUser(user);
  
  // Limpiar carrito
  clearCart();
  
  // Mostrar confirmación
  alert('¡Pedido realizado con éxito! 🎉\n\nID del Pedido: ' + orderId + '\nProductos: ' + cart.length + '\n\nTu pedido llegará pronto.');
  
  // Redirigir a home
  navigate('home');
}

// Actualizar perfil
function updateProfile(event) {
  event.preventDefault();
  
  var user = getCurrentUser();
  if (!user) return;
  
  user.name = document.getElementById('profile-name').value;
  user.email = document.getElementById('profile-email').value;
  user.phone = document.getElementById('profile-phone').value;
  user.address = document.getElementById('profile-address').value;
  
  saveUser(user);
  alert('Perfil actualizado correctamente');
  renderView();
}

// Actualizar perfil
function updateProfile(event) {
  event.preventDefault();
  
  var user = getCurrentUser();
  if (!user) return;
  
  user.name = document.getElementById('profile-name').value;
  user.email = document.getElementById('profile-email').value;
  user.phone = document.getElementById('profile-phone').value;
  user.address = document.getElementById('profile-address').value;
  
  saveUser(user);
  alert('✅ Perfil actualizado correctamente');
  renderView();
}
