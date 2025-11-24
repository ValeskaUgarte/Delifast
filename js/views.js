// ========== VISTAS DE LA APLICACIÓN ==========

// ========== FUNCIÓN AUXILIAR: Botón Volver al Inicio ==========
function getBackToHomeButton() {
  var html = '<div style="text-align: center; margin: 20px 0;">';
  html += '<img src="img/volverinicio.jpg" onclick="navigate(\'home\')" alt="Volver al Inicio" style="max-width: 150px; cursor: pointer; transition: transform 0.3s;" onmouseover="this.style.transform=\'scale(1.05)\'" onmouseout="this.style.transform=\'scale(1)\'">';
  //html += '<img src="https://pbs.twimg.com/media/G6Y5_hWXYAAhpIp?format=jpg&name=small" onclick="navigate(\'home\')" alt="Volver al Inicio Web" style="max-width: 150px; cursor: pointer; transition: transform 0.3s; margin-left: 10px;" onmouseover="this.style.transform=\'scale(1.05)\'" onmouseout="this.style.transform=\'scale(1)\'">';
  html += '</div>';
  return html;
}


// VISTA: HOME

/// VISTA: LANDING PAGE (Pantalla de Bienvenida)
function renderLanding() {
  var html = '<div style="min-height: 100vh; background-image: url(\'img/bienvenida.jpg\'); background-size: cover; background-position: center; display: flex; flex-direction: column; justify-content: space-between; padding: 0;">';
  
  html += '<div style="flex: 1;"></div>';
  
  html += '<div style="padding-bottom: 80px; text-align: center;">';
  html += '<img src="img/listordenar.jpg" onclick="navigate(\'home\')" alt="Listo" style="cursor: pointer; max-width: 250px; width: 80%; transition: transform 0.3s;" onmouseover="this.style.transform=\'scale(1.05)\'" onmouseout="this.style.transform=\'scale(1)\'">';
  html += '</div>';
  
  html += '<div style="background: rgba(75, 0, 130, 0.75); padding: 12px 15px; color: white; font-size: 0.75rem;">';
  html += '<p style="margin: 0; text-align: center;">Almirante Barroso 79, Santiago | +569 8765 4321 | contacto@delifast.cl</p>';
  html += '</div>';
  
  html += '</div>';
  return html;
}


// VISTA: HOME (Pantalla Principal)
function renderHome() {
  var html = '<div class="container my-4">';


  // === BOTONES SUPERIORES (3 EN FILA - MÁS PEQUEÑOS) ===
   html += '<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 15px;">';
  
  html += '<div onclick="navigate(\'membership\')" style="cursor: pointer; background: white; border-radius: 8px; padding: 5px; box-shadow: 0 2px 8px rgba(0,0,0,0.15); transition: transform 0.3s;" onmouseover="this.style.transform=\'scale(1.03)\'" onmouseout="this.style.transform=\'scale(1)\'">';
  html += '<img src="img/hastesocio.jpg" alt="Hazte Socio" style="width: 100%; height: 70px; object-fit: contain;">';
  html += '</div>';
  
  html += '<div onclick="navigate(\'promotions\')" style="cursor: pointer; background: white; border-radius: 8px; padding: 5px; box-shadow: 0 2px 8px rgba(0,0,0,0.15); transition: transform 0.3s;" onmouseover="this.style.transform=\'scale(1.03)\'" onmouseout="this.style.transform=\'scale(1)\'">';
  html += '<img src="img/promo.jpg" alt="Promociones" style="width: 100%; height: 70px; object-fit: contain;">';
  html += '</div>';
  
  html += '<div onclick="navigate(\'delivery\')" style="cursor: pointer; background: white; border-radius: 8px; padding: 5px; box-shadow: 0 2px 8px rgba(0,0,0,0.15); transition: transform 0.3s;" onmouseover="this.style.transform=\'scale(1.03)\'" onmouseout="this.style.transform=\'scale(1)\'">';
  html += '<img src="img/turepartidor.jpg" alt="Tu Repartidor" style="width: 100%; height: 70px; object-fit: contain;">';
  html += '</div>';
  
  html += '</div>';
  
  // === BOTONES SECUNDARIOS (2 BOTONES - MÁS PEQUEÑOS) ===
  html += '<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-bottom: 25px;">';
  
  html += '<div onclick="navigate(\'calldelivery\')" style="cursor: pointer; background: white; border-radius: 8px; padding: 5px; box-shadow: 0 2px 8px rgba(0,0,0,0.15); transition: transform 0.3s;" onmouseover="this.style.transform=\'scale(1.03)\'" onmouseout="this.style.transform=\'scale(1)\'">';
  html += '<img src="img/llamarepartidor.jpg" alt="Llamar Repartidor" style="width: 100%; height: 60px; object-fit: contain;">';
  html += '</div>';
  
  html += '<div onclick="navigate(\'tracking\')" style="cursor: pointer; background: white; border-radius: 8px; padding: 5px; box-shadow: 0 2px 8px rgba(0,0,0,0.15); transition: transform 0.3s;" onmouseover="this.style.transform=\'scale(1.03)\'" onmouseout="this.style.transform=\'scale(1)\'">';
  html += '<img src="img/seguimiento.jpg" alt="Seguimiento" style="width: 100%; height: 60px; object-fit: contain;">';
  html += '</div>';
  
  html += '</div>';
  
  // === TÍTULO CON IMAGEN ===
  html += '<div class="text-center mb-3">';
  html += '<img src="img/variedad.jpg" alt="Explora tu menú" style="max-width: 300px; width: 100%; height: auto; object-fit: contain;">';
  html += '</div>';
  
  // === CATEGORÍAS PRINCIPALES (3 POR FILA) ===
  html += '<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">';
  
  var categories = [
    { img: 'img/supermercado.jpg', title: 'Supermercados', view: 'supermarkets' },
    { img: 'img/pizza.jpg', title: 'Pizza', view: 'pizza' },
    { img: 'img/sushi2.jpg', title: 'Sushi', view: 'sushi' },
    { img: 'img/comidarapida.jpg', title: 'Comida Rápida', view: 'fastfood' },
    { img: 'img/restaurante.jpg', title: 'Restaurantes', view: 'restaurants' },
    { img: 'img/farmacia.jpg', title: 'Farmacias', view: 'pharmacies' }
  ];
  
  for (var i = 0; i < categories.length; i++) {
    html += '<div onclick="navigate(\'' + categories[i].view + '\')" style="cursor: pointer; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.15); transition: transform 0.3s; background: white;" onmouseover="this.style.transform=\'translateY(-5px)\'" onmouseout="this.style.transform=\'translateY(0)\'">';
    html += '<img src="' + categories[i].img + '" alt="' + categories[i].title + '" style="width: 100%; height: 110px; object-fit: contain; padding: 8px;">';
    html += '<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 8px; text-align: center;">';
    html += '<p style="margin: 0; font-size: 0.9rem; font-weight: 600; color: white;">' + categories[i].title + '</p>';
    html += '</div></div>';
  }
  
  html += '</div></div>';
  return html;
}


// VISTA: LOGIN
function renderLogin() {
  var html = '<div class="container fade-in" style="min-height: 80vh; display: flex; align-items: center; justify-content: center; padding: 40px 20px;">';
  html += '<div style="width: 100%; max-width: 500px;">';
  html += '<div class="card" style="background: white; padding: 40px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); width: 100%;">';
  html += '<div class="text-center mb-4">';
  html += '<h1 style="font-size: 4rem; margin-bottom: 10px;">🍔</h1>';
  html += '<h2 style="color: #333; margin-bottom: 10px;">Bienvenido a DeliFast</h2>';
  html += '<p style="color: #666;">Inicia sesión para continuar</p>';
  html += '</div>';
  html += '<div id="login-error"></div>';
  html += '<form onsubmit="submitLogin(event)">';
  html += '<div class="form-group">';
  html += '<label style="color: #333;">Correo Electrónico</label>';
  html += '<input type="email" id="login-email" class="form-control" placeholder="tu@email.com" required>';
  html += '</div>';
  html += '<div class="form-group">';
  html += '<label style="color: #333;">Contraseña</label>';
  html += '<input type="password" id="login-password" class="form-control" placeholder="••••••••" required>';
  html += '</div>';
  html += '<div class="text-end mb-3">';
  html += '<a href="#" onclick="navigate(\'forgotPassword\')" style="font-size: 0.9rem; color: #0d6efd;">¿Olvidaste tu contraseña?</a>';
  html += '</div>';
  html += '<button type="submit" class="btn btn-primary" style="width: 100%; margin-bottom: 15px; padding: 12px;">Iniciar Sesión</button>';
  html += '<hr style="margin: 20px 0;">';
  html += '<p class="text-center" style="color: #666;">¿No tienes cuenta? <a href="#" onclick="navigate(\'register\')" style="color: #0d6efd; font-weight: 600;">Regístrate aquí</a></p>';
  html += '</form>';
  html += '<div class="text-center mt-3">';
  html += '<a href="#" onclick="navigate(\'home\')" style="color: #666; text-decoration: none;">← Volver al inicio</a>';
  html += '</div>';
  html += '</div></div></div>';
  return html;
}

// VISTA: REGISTER
function renderRegister() {
  var html = '<div class="container fade-in" style="padding: 40px 20px;">';
  html += '<div style="max-width: 600px; margin: 0 auto;">';
  html += '<div class="card" style="background: white; padding: 40px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">';
  html += '<h2 class="text-center mb-3" style="color: #333;">Crear Cuenta</h2>';
  html += '<p class="text-center mb-4" style="color: #666;">Únete a DeliFast y disfruta de entregas rápidas</p>';
  html += '<div id="register-error"></div>';
  html += '<form onsubmit="submitRegister(event)">';
  html += '<div class="form-group">';
  html += '<label style="color: #333;">Nombre Completo *</label>';
  html += '<input type="text" id="register-name" class="form-control" placeholder="Juan Pérez" required>';
  html += '</div>';
  html += '<div class="form-group">';
  html += '<label style="color: #333;">Email *</label>';
  html += '<input type="email" id="register-email" class="form-control" placeholder="tu@email.com" required>';
  html += '</div>';
  html += '<div class="form-group">';
  html += '<label style="color: #333;">Teléfono</label>';
  html += '<input type="tel" id="register-phone" class="form-control" placeholder="+56 9 1234 5678">';
  html += '</div>';
  html += '<div class="form-group">';
  html += '<label style="color: #333;">Dirección</label>';
  html += '<input type="text" id="register-address" class="form-control" placeholder="Av. Providencia 1234">';
  html += '</div>';
  html += '<div class="form-group">';
  html += '<label style="color: #333;">Contraseña *</label>';
  html += '<input type="password" id="register-password" class="form-control" placeholder="••••••••" required>';
  html += '</div>';
  html += '<div class="form-group">';
  html += '<label style="color: #333;">Confirmar Contraseña *</label>';
  html += '<input type="password" id="register-confirm" class="form-control" placeholder="••••••••" required>';
  html += '</div>';
  html += '<button type="submit" class="btn btn-primary" style="width: 100%; margin-bottom: 15px; padding: 12px;">Crear Cuenta</button>';
  html += '<p class="text-center" style="color: #666;">¿Ya tienes cuenta? <a href="#" onclick="navigate(\'login\')" style="color: #0d6efd; font-weight: 600;">Inicia sesión aquí</a></p>';
  html += '</form>';
  html += '<div class="text-center mt-3">';
  html += '<a href="#" onclick="navigate(\'home\')" style="color: #666; text-decoration: none;">← Volver al inicio</a>';
  html += '</div>';
  html += '</div></div></div>';
  return html;
}

// VISTA: FORGOT PASSWORD
function renderForgotPassword() {
  var html = '<div class="container fade-in" style="min-height: 80vh; display: flex; align-items: center; justify-content: center; padding: 40px 20px;">';
  html += '<div style="max-width: 500px; width: 100%;">';
  html += '<div class="card" style="background: white; padding: 40px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">';
  html += '<div class="text-center mb-4">';
  html += '<div style="font-size: 4rem; margin-bottom: 10px;"></div>';
  html += '<h2 style="color: #333; margin-bottom: 10px;">¿Olvidaste tu contraseña?</h2>';
  html += '<p style="color: #666;">Te enviaremos instrucciones para recuperarla</p>';
  html += '</div>';
  html += '<form onsubmit="submitForgotPassword(event)">';
  html += '<div class="form-group">';
  html += '<label style="color: #333;">Correo Electrónico</label>';
  html += '<input type="email" id="forgot-email" class="form-control" placeholder="tu@email.com" required>';
  html += '</div>';
  html += '<button type="submit" class="btn btn-primary" style="width: 100%; margin-bottom: 15px; padding: 12px;">Enviar Instrucciones</button>';
  html += '<div class="text-center">';
  html += '<a href="#" onclick="navigate(\'login\')" style="color: #0d6efd; text-decoration: none;">← Volver a Iniciar Sesión</a>';
  html += '</div>';
  html += '</form>';
  html += '</div></div></div>';
  return html;
}

/// VISTA: RESTAURANTS (Solo restaurantes generales)
function renderRestaurants() {
  var html = '<div class="container my-4 fade-in">';
  html += '<h1 class="text-center mb-4" style="font-size: 2rem; color: #333;">🍽️ Restaurantes</h1>';
  html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">';
  html += renderRestaurantCards(restaurants);
  html += '</div>';
  html += getBackToHomeButton();
  html += '</div>';
  return html;
}

function renderRestaurantCards(restaurantsList) {
  if (restaurantsList.length === 0) {
    return '<div class="text-center" style="grid-column: 1/-1;"><h4>No hay resultados</h4></div>';
  }
  
  var html = '';
  for (var i = 0; i < restaurantsList.length; i++) {
    var r = restaurantsList[i];
    html += '<div class="restaurant-card" style="cursor: pointer; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1); transition: transform 0.3s;" onclick="navigate(\'restaurantDetail\', {restaurantId: ' + r.id + '})" onmouseover="this.style.transform=\'translateY(-5px)\'" onmouseout="this.style.transform=\'translateY(0)\'">';
    html += '<img src="' + r.image + '" alt="' + r.name + '" style="width: 100%; height: 140px; object-fit: cover;">';
    html += '<div style="padding: 12px;">';
    html += '<h3 style="font-size: 1.1rem; margin: 0 0 5px 0; font-weight: 600;">' + r.name + '</h3>';
    html += '<p style="font-size: 0.85rem; color: #666; margin: 0 0 8px 0; line-height: 1.3;">' + r.description + '</p>';
    html += '<div style="margin-bottom: 8px;">';
    html += '<span class="badge badge-category" style="font-size: 0.75rem; padding: 3px 8px;">' + r.category + '</span> ';
    html += '<span class="badge badge-rating" style="font-size: 0.75rem; padding: 3px 8px;">⭐ ' + r.rating + '</span> ';
    html += '<span class="badge ' + (r.available ? 'badge-available' : 'badge-closed') + '" style="font-size: 0.75rem; padding: 3px 8px;">' + (r.available ? 'Disponible' : 'Cerrado') + '</span>';
    html += '</div>';
    html += '<div style="display: flex; justify-content: space-between; font-size: 0.8rem; color: #666;">';
    html += '<span>' + r.deliveryTime + '</span>';
    html += '<span>' + formatPrice(r.deliveryFee) + '</span>';
    html += '</div>';
    html += '<div style="font-size: 0.8rem; color: #666; margin-top: 3px;">Pedido mínimo: ' + formatPrice(r.minOrder) + '</div>';
    html += '</div></div>';
  }
  return html;
}

function filterRestaurants() {
  var search = document.getElementById('search-input').value;
  var category = document.getElementById('category-select').value;
  
  var filtered = getRestaurantsByCategory(category);
  if (search) {
    var searchResults = searchRestaurants(search);
    filtered = filtered.filter(function(r) {
      return searchResults.indexOf(r) !== -1;
    });
  }
  
  document.getElementById('restaurants-grid').innerHTML = renderRestaurantCards(filtered);
}

// VISTA: RESTAURANTS
function renderRestaurants() {
  var html = '<div class="container my-4 fade-in">';
  html += '<h1 class="text-center mb-4" style="font-size: 2rem; font-weight: 700; color: #333;">Restaurantes</h1>';
  
  html += '<div style="display: flex; gap: 10px; margin-bottom: 25px; flex-wrap: wrap;">';
  html += '<input type="text" id="search-input" class="form-control" placeholder="Buscar..." onkeyup="filterRestaurants()" style="flex: 1; min-width: 200px;">';
  html += '<select id="category-select" class="form-control" onchange="filterRestaurants()" style="flex: 1; min-width: 200px;">';
  html += '<option value="Todos">Todas</option>';
  html += '<option value="Italiana">Italiana</option>';
  html += '<option value="Japonesa">Japonesa</option>';
  html += '<option value="Americana">Americana</option>';
  html += '<option value="Vegana">Vegana</option>';
  html += '<option value="Mexicana">Mexicana</option>';
  html += '<option value="China">China</option>';
  html += '</select></div>';
  
  var restaurantList = restaurants.filter(function(r) {
    return r.category !== 'Supermercado' && r.category !== 'Farmacia';
  });
  
  html += '<div id="restaurants-grid" class="card-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">' + renderRestaurantCards(restaurantList) + '</div>';
  
  html += getBackToHomeButton();
  
  html += '<div style="margin-top: 60px; padding: 12px; background: rgba(0,0,0,0.05); border-radius: 10px; text-align: center; font-size: 0.8rem; color: #666;">';
  html += '<p style="margin: 0;">Almirante Barroso 79, Santiago | +569 8765 4321 | contacto@delifast.cl</p>';
  html += '</div>';
  
  html += '</div>';
  return html;
}

// VISTA: RESTAURANT DETAIL (Funciona para TODOS los establecimientos)
function renderRestaurantDetail(restaurantId) {
  var restaurant = null;
  var allRestaurants = [...restaurants, ...fastFood, ...pizzaRestaurants, ...sushiRestaurants, ...supermarkets, ...pharmacies];
  
  for (var i = 0; i < allRestaurants.length; i++) {
    if (allRestaurants[i].id === parseInt(restaurantId)) {
      restaurant = allRestaurants[i];
      break;
    }
  }
  
  if (!restaurant) return '<div class="container"><h2>Establecimiento no encontrado</h2></div>';
  
  var restaurantProducts = products[restaurantId] || [];
  var restaurantAddress = addresses[restaurantId] || "Dirección no disponible";
  
  var html = '<div class="fade-in">';
  html += '<div style="background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(' + restaurant.image + '); background-size: cover; background-position: center; color: white; padding: 80px 20px 40px;">';
  html += '<div class="container">';
  html += '<a href="#" onclick="navigate(\'home\')" style="color: white; text-decoration: none; margin-bottom: 10px; display: inline-block;">← Volver</a>';
  html += '<h1 style="font-size: 2.5rem; font-weight: bold;">' + restaurant.name + '</h1>';
  html += '<p style="font-size: 1.1rem;">' + restaurant.description + '</p>';
  html += '<div style="margin-top: 15px;">';
  html += '<span class="badge badge-category">' + restaurant.category + '</span> ';
  html += '<span class="badge badge-rating">⭐ ' + restaurant.rating + '</span> ';
  html += '<span class="badge" style="background: #17a2b8; color: white;">' + restaurant.deliveryTime + '</span> ';
  html += '<span class="badge" style="background: #28a745; color: white;">Envío: ' + formatPrice(restaurant.deliveryFee) + '</span>';
  html += '</div></div></div>';
  
  html += '<div class="container my-4">';
  
  // Dirección del establecimiento
  html += '<div class="alert alert-info">';
  html += '<strong>📍 Dirección:</strong> ' + restaurantAddress;
  html += '</div>';
  
  if (!restaurant.available) {
    html += '<div class="alert alert-danger">Este establecimiento está cerrado temporalmente</div>';
  }
  html += '<div class="alert alert-warning">Pedido mínimo: ' + formatPrice(restaurant.minOrder) + '</div>';
  
  html += '<h4 class="mb-3">Productos Disponibles</h4>';
  
  if (restaurantProducts.length === 0) {
    html += '<div class="text-center" style="padding: 40px;">';
    html += '<p style="color: #666;">Próximamente tendremos productos disponibles</p>';
    html += '</div>';
  } else {
    html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px;">';
    
    for (var i = 0; i < restaurantProducts.length; i++) {
      var p = restaurantProducts[i];
      html += '<div style="background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 3px 10px rgba(0,0,0,0.1); transition: transform 0.3s;" onmouseover="this.style.transform=\'translateY(-3px)\'" onmouseout="this.style.transform=\'translateY(0)\'">';
      html += '<img src="' + p.image + '" alt="' + p.name + '" style="width: 100%; height: 120px; object-fit: cover;">';
      html += '<div style="padding: 12px;">';
      html += '<h5 style="font-size: 0.95rem; margin: 0 0 3px 0; font-weight: 600;">' + p.name + '</h5>';
      html += '<p style="font-size: 0.75rem; color: #999; margin: 0 0 5px 0;">' + p.category + '</p>';
      html += '<p style="font-size: 0.8rem; color: #666; margin: 0 0 8px 0; line-height: 1.3; min-height: 40px;">' + p.description + '</p>';
      html += '<div style="display: flex; justify-content: space-between; align-items: center;">';
      html += '<h5 style="margin: 0; color: #0d6efd; font-size: 1rem;">' + formatPrice(p.price) + '</h5>';
      var productJson = JSON.stringify(p).replace(/"/g, '&quot;');
      html += '<button onclick=\'addToCart(' + productJson + ')\' class="btn ' + (p.available ? 'btn-primary' : '') + '" ' + (!p.available ? 'disabled' : '') + ' style="padding: 6px 12px; font-size: 0.8rem;">';
      html += p.available ? '🛒 Agregar' : 'No disponible';
      html += '</button></div></div></div>';
    }
    html += '</div>';
  }
  
  html += '</div></div>';
  return html;
}

// VISTA: CART
function renderCart() {
  var cart = getCart();
  var total = getCartTotal();
  var deliveryFee = 2500;
  
  if (cart.length === 0) {
    var html = '<div class="container my-5 text-center fade-in">';
    html += '<div class="alert alert-warning" style="padding: 40px;">';
    html += '<h4> Tu carrito está vacío</h4>';
    html += '<p>Parece que aún no has agregado ningún producto.</p>';
    html += '<button onclick="navigate(\'restaurants\')" class="btn btn-primary mt-3">Ver Restaurantes</button>';
    html += '</div>';
    html += getBackToHomeButton();
    html += '</div>';
    return html;
  }
  
  var html = '<div class="container my-4 fade-in">';
  html += '<h2 class="mb-3" style="font-size: 1.5rem;">Tu Pedido</h2>';
  
  html += '<div style="max-width: 600px; margin: 0 auto;">';
  
  // Lista de productos
  html += '<div style="background: white; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); margin-bottom: 20px;">';
  
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    html += '<div style="display: flex; align-items: center; padding: 10px; border-bottom: 1px solid #eee; gap: 8px;">';
    html += '<img src="' + item.image + '" alt="' + item.name + '" style="width: 45px; height: 45px; object-fit: cover; border-radius: 5px; flex-shrink: 0;">';
    html += '<div style="flex: 1; min-width: 0;">';
    html += '<h6 style="margin: 0; font-size: 0.85rem; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">' + item.name + '</h6>';
    html += '<p style="margin: 0; font-size: 0.75rem; color: #666;">' + formatPrice(item.price) + '</p>';
    html += '</div>';
    html += '<div style="display: flex; align-items: center; gap: 5px; flex-shrink: 0;">';
    html += '<button onclick="removeFromCart(' + item.id + ')" class="btn btn-secondary" style="padding: 2px 6px; font-size: 0.75rem;">-</button>';
    html += '<span style="font-weight: 600; font-size: 0.85rem; min-width: 20px; text-align: center;">' + item.quantity + '</span>';
    var itemJson = JSON.stringify(item).replace(/"/g, '&quot;');
    html += '<button onclick=\'addToCart(' + itemJson + ')\' class="btn btn-primary" style="padding: 2px 6px; font-size: 0.75rem;">+</button>';
    html += '</div>';
    html += '<div style="font-weight: 600; font-size: 0.9rem; min-width: 70px; text-align: right; flex-shrink: 0;">' + formatPrice(item.price * item.quantity) + '</div>';
    html += '<button onclick="removeFromCart(' + item.id + ', true); renderView();" style="background: none; border: none; color: #dc3545; cursor: pointer; font-size: 1.1rem; padding: 0 5px; flex-shrink: 0;" title="Eliminar">🗑️</button>';
    html += '</div>';
  }
  
  html += '</div>';
  
  // Resumen
  html += '<div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">';
  html += '<h5 style="margin-bottom: 15px; font-size: 1rem;">Resumen de la Orden</h5>';
  html += '<div style="display: flex; justify-content: space-between; margin: 8px 0; font-size: 0.9rem;"><span>Subtotal</span><span>' + formatPrice(total) + '</span></div>';
  html += '<div style="display: flex; justify-content: space-between; margin: 8px 0; font-size: 0.9rem;"><span>Envío</span><span>' + formatPrice(deliveryFee) + '</span></div>';
  html += '<hr style="margin: 12px 0;">';
  html += '<div style="display: flex; justify-content: space-between; align-items: center;"><h4 style="margin: 0; font-size: 1.1rem;">Total</h4><h4 style="margin: 0; color: #28a745; font-size: 1.1rem;">' + formatPrice(total + deliveryFee) + '</h4></div>';
  html += '<button onclick="navigate(\'checkout\')" class="btn btn-primary" style="width: 100%; margin-top: 15px; padding: 10px; font-size: 0.9rem;">Finalizar Pedido</button>';
  html += '<button onclick="clearCart(); renderView();" class="btn btn-secondary" style="width: 100%; margin-top: 8px; padding: 8px; font-size: 0.85rem;">Vaciar Carrito</button>';
  html += '</div>';
  
  html += '</div>';
  
  html += getBackToHomeButton();
  
  html += '<div style="margin-top: 60px; padding: 15px; background: rgba(0,0,0,0.05); border-radius: 10px; text-align: center; font-size: 0.85rem; color: #666;">';
  html += '<p style="margin: 5px 0;">Almirante Barroso 79, Santiago | +569 8765 4321 | contacto@delifast.cl | WhatsApp: +569 8765 4321</p>';
  html += '</div>';
  
  html += '</div>';
  
  return html;
}

// VISTA: CHECKOUT
function renderCheckout() {
  var user = getCurrentUser();
  if (!user) {
    navigate('login');
    return '';
  }
  
  var cart = getCart();
  var subtotal = getCartTotal();
  var deliveryFee = 2000;
  var total = subtotal + deliveryFee;
  
  var html = '<div class="container my-5 fade-in">';
  html += '<h2 class="mb-4">Finalizar Pedido</h2>';
  html += '<div style="display: grid; grid-template-columns: 2fr 1fr; gap: 20px;"><div>';
  html += '<form onsubmit="submitCheckout(event)">';
  html += '<div class="card mb-4"><h5>Dirección de Entrega</h5>';
  html += '<div class="form-group"><label>Dirección *</label><input type="text" id="checkout-address" class="form-control" value="' + (user.address || '') + '" required></div>';
  html += '<div class="form-group"><label>Teléfono *</label><input type="tel" id="checkout-phone" class="form-control" value="' + (user.phone || '') + '" required></div>';
  html += '<div class="form-group"><label>Instrucciones (opcional)</label><textarea id="checkout-instructions" class="form-control" rows="2"></textarea></div>';
  html += '</div>';
  html += '<div class="card mb-4"><h5>💳 Método de Pago</h5>';
  html += '<label><input type="radio" name="payment" value="card" checked> 💳 Tarjeta</label><br>';
  html += '<label><input type="radio" name="payment" value="cash"> 💵 Efectivo</label></div>';
  html += '<button type="submit" class="btn btn-primary" style="width: 100%;">Confirmar Pedido - ' + formatPrice(total) + '</button>';
  html += '</form></div>';
  
  html += '<div class="card" style="height: fit-content;"><h5>Resumen</h5>';
  for (var i = 0; i < cart.length; i++) {
    html += '<div style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 8px;">';
    html += '<span>' + cart[i].quantity + 'x ' + cart[i].name + '</span>';
    html += '<span>' + formatPrice(cart[i].price * cart[i].quantity) + '</span></div>';
  }
  html += '<hr><div style="display: flex; justify-content: space-between;"><span>Subtotal</span><span>' + formatPrice(subtotal) + '</span></div>';
  html += '<div style="display: flex; justify-content: space-between;"><span>Envío</span><span>' + formatPrice(deliveryFee) + '</span></div>';
  html += '<hr><div style="display: flex; justify-content: space-between;"><strong>Total</strong><strong style="color: #0d6efd; font-size: 1.2rem;">' + formatPrice(total) + '</strong></div>';
  html += '</div></div></div>';
  
  return html;
}

// VISTA: SUPERMARKETS (Solo supermercados)
function renderSupermarkets() {
  var html = '<div class="container my-4 fade-in">';
  html += '<h1 class="text-center mb-4" style="font-size: 2rem; color: #333;">🛒 Supermercados</h1>';
  html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">';
  html += renderRestaurantCards(supermarkets);
  html += '</div>';
  html += getBackToHomeButton();
  html += '</div>';
  return html;
}

function renderFastFood() {
  var html = '<div class="container my-4 fade-in">';
  html += '<h1 class="text-center mb-4" style="font-size: 2rem; color: #333;">🍔 Comida Rápida</h1>';
  html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">';
  html += renderRestaurantCards(fastFood);
  html += '</div>';
  html += getBackToHomeButton();
  html += '</div>';
  return html;
}

// VISTA: PHARMACIES (Solo farmacias)
function renderPharmacies() {
  var html = '<div class="container my-4 fade-in">';
  html += '<h1 class="text-center mb-4" style="font-size: 2rem; color: #333;">💊 Farmacias</h1>';
  html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">';
  html += renderRestaurantCards(pharmacies);
  html += '</div>';
  html += getBackToHomeButton();
  html += '</div>';
  return html;
}


// VISTA: MEMBERSHIP (Hazte Socio)
function renderMembership() {
  var html = '<div class="container my-5 text-center fade-in">';
  html += '<img src="img/noeresmiembro.jpg" alt="No eres miembro" style="max-width: 500px; width: 90%; border-radius: 15px; box-shadow: 0 8px 20px rgba(0,0,0,0.2);">';
  html += getBackToHomeButton();
  
  html += '<div style="margin-top: 80px; padding: 15px; background: rgba(0,0,0,0.05); border-radius: 10px; text-align: center; font-size: 0.85rem; color: #666;">';
  html += '<p style="margin: 5px 0;">Almirante Barroso 79, Santiago | +569 8765 4321 | contacto@delifast.cl | WhatsApp: +569 8765 4321</p>';
  html += '</div>';
  
  html += '</div>';
  return html;
}

// VISTA: PROMOTIONS (Promociones reales)
function renderPromotions() {
  var html = '<div class="container my-4 fade-in">';
  html += '<h2 class="text-center mb-4" style="font-size: 1.5rem;">🎉 Promociones Activas</h2>';
  
  if (promotions.length === 0) {
    html += '<div class="text-center">';
    html += '<img src="img/sinpromo.jpg" alt="Sin promociones" style="max-width: 300px; width: 90%; border-radius: 10px; margin-bottom: 20px;">';
    html += '</div>';
  } else {
    html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 15px;">';
    for (var i = 0; i < promotions.length; i++) {
      var promo = promotions[i];
      html += '<div style="background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 3px 10px rgba(0,0,0,0.1); transition: transform 0.3s;" onmouseover="this.style.transform=\'translateY(-3px)\'" onmouseout="this.style.transform=\'translateY(0)\'">';
      html += '<img src="' + promo.image + '" alt="' + promo.title + '" style="width: 100%; height: 120px; object-fit: cover;">';
      html += '<div style="padding: 15px;">';
      html += '<h4 style="margin: 0 0 8px 0; font-size: 1rem; color: #333;">' + promo.title + '</h4>';
      html += '<p style="margin: 0 0 10px 0; font-size: 0.85rem; color: #666; line-height: 1.4;">' + promo.description + '</p>';
      html += '<div style="display: flex; justify-content: space-between; align-items: center;">';
      html += '<span style="font-size: 0.8rem; color: #888;">' + promo.restaurant + '</span>';
      html += '<span style="font-size: 0.75rem; color: #28a745; font-weight: 600;">Hasta ' + promo.validUntil + '</span>';
      html += '</div></div></div>';
    }
    html += '</div>';
  }
  
  html += getBackToHomeButton();
  html += '</div>';
  return html;
}

// VISTA: DELIVERY (Tu Repartidor)
function renderDelivery() {
  var user = getCurrentUser();
  var html = '<div class="container my-4 fade-in">';
  
  html += '<div class="text-center mb-4">';
  html += '<img src="img/turepartidor.jpg" alt="Tu Repartidor" style="max-width: 200px; width: 100%; height: auto; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">';
  html += '</div>';

  // Mostrar información del repartidor SI el usuario está logueado
    if (user && user.repartidor) {
    html += '<div style="background: white; max-width: 400px; margin: 0 auto 30px; padding: 20px; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); text-align: center;">';
    html += '<h3 style="color: #333; margin-bottom: 15px;">' + user.repartidor.nombre + '</h3>';
    html += '<p style="color: #666; font-size: 0.9rem; margin-bottom: 10px;">Repartidor #' + Math.floor(Math.random() * 9000 + 1000) + '</p>';
    html += '<p style="color: #666; font-size: 0.9rem; margin-bottom: 10px;">⭐ ' + (4.5 + Math.random() * 0.4).toFixed(1) + ' / 5.0</p>';
    html += '<p style="color: #666; font-size: 0.9rem;"> ' + Math.floor(Math.random() * 500 + 100) + ' entregas completadas</p>';
    html += '</div>';
  }

  // Imágenes de repartidores esperando
  html += '<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-bottom: 30px;">';
  
  html += '<div class="text-center">';
  html += '<img src="img/repartidoresperando.jpg" alt="Repartidor Esperando" style="width: 100%; max-width: 300px; height: auto; border-radius: 15px; box-shadow: 0 6px 15px rgba(0,0,0,0.2);">';
  html += '</div>';
  
  html += '<div class="text-center">';
  html += '<img src="img/repartidoraesperando.jpg" alt="Repartidora Esperando" style="width: 100%; max-width: 300px; height: auto; border-radius: 15px; box-shadow: 0 6px 15px rgba(0,0,0,0.2);">';
  html += '</div>';
  
  html += '</div>';
  
  html += '<div class="text-center mb-4">';
  html += '<p style="font-size: 1.2rem; color: #666; margin-bottom: 20px;">No tienes pedidos activos en este momento</p>';
  html += '<p style="font-size: 1rem; color: #999;">Cuando realices un pedido, podrás ver aquí la información de tu repartidor</p>';
  html += '</div>';
  
  // Sección de evaluación
  html += '<div style="background: white; padding: 30px; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); text-align: center; margin-bottom: 30px;">';
  html += '<h4 style="color: #333; margin-bottom: 20px;">⭐ Evalúa a tu Repartidor</h4>';
  html += '<p style="color: #666; margin-bottom: 20px;">Una vez completada tu entrega, podrás calificar el servicio</p>';
  html += '<div style="font-size: 2.5rem; letter-spacing: 10px; color: #ddd;">★ ★ ★ ★ ★</div>';
  html += '</div>';
  
  html += getBackToHomeButton();
  
  // Footer de contacto
  html += '<div style="margin-top: 60px; padding: 15px; background: rgba(0,0,0,0.05); border-radius: 10px; text-align: center; font-size: 0.85rem; color: #666;">';
  html += '<p style="margin: 5px 0;">Almirante Barroso 79, Santiago | +569 8765 4321 | contacto@delifast.cl | WhatsApp: +569 8765 4321</p>';
  html += '</div>';
  
  html += '</div>';
  return html;
}

// VISTA: TRACKING (Seguimiento del Pedido)
function renderTracking() {
  var html = '<div class="container my-4 fade-in">';
  
  var user = getCurrentUser();
  var totalOrders = user ? user.totalOrders || 0 : 0;
  
  html += '<div class="text-center mb-4">';
  if (totalOrders === 0) {
    html += '<img src="img/tupedidocamino3.jpg" alt="Aún no has pedido" style="max-width: 400px; width: 100%; height: auto; border-radius: 15px; box-shadow: 0 6px 20px rgba(0,0,0,0.2);">';
    html += '<p style="font-size: 1.2rem; color: #666; margin-top: 20px;">Aún no has realizado ningún pedido</p>';
  } else {
    html += '<img src="https://pbs.twimg.com/media/G6eyxMsXkAAbDT3?format=jpg&name=medium" alt="Tu Pedido en Camino" style="max-width: 400px; width: 100%; height: auto; border-radius: 15px; box-shadow: 0 6px 20px rgba(0,0,0,0.2);">';
  }
  html += '</div>';
  
  html += '<div style="background: #e0e0e0; border-radius: 15px; padding: 20px; margin-bottom: 30px; text-align: center; min-height: 300px; position: relative; overflow: hidden;">';
  html += '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.6857448784894!2d-70.64827368479468!3d-33.44476108076442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a6c5d3e3f5%3A0x4e5c5e5c5e5c5e5c!2sAlmirante%20Barroso%2079%2C%20Santiago!5e0!3m2!1ses!2scl!4v1234567890123!5m2!1ses!2scl" width="100%" height="300" style="border:0; border-radius: 10px;" allowfullscreen="" loading="lazy"></iframe>';
  html += '</div>';
  
  html += '<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-bottom: 30px;">';
  
  html += '<div class="text-center">';
  html += '<img src="img/repartidorencamino.jpg" alt="En Camino" style="width: 100%; max-width: 150px; height: auto; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.15);">';
  html += '<p style="margin-top: 8px; font-weight: 600; color: #333;">En camino</p>';
  html += '</div>';
  
  html += '<div class="text-center">';
  html += '<img src="img/repartidorllego.jpg" alt="Llegó" style="width: 100%; max-width: 150px; height: auto; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.15); opacity: 0.4;">';
  html += '<p style="margin-top: 8px; font-weight: 600; color: #999;">Llegó</p>';
  html += '</div>';
  
  html += '<div class="text-center">';
  html += '<img src="img/repartidorentrego.jpg" alt="Entregado" style="width: 100%; max-width: 150px; height: auto; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.15); opacity: 0.4;">';
  html += '<p style="margin-top: 8px; font-weight: 600; color: #999;">Entregado</p>';
  html += '</div>';
  
  html += '</div>';
  
  html += getBackToHomeButton();
  
  html += '<div style="margin-top: 60px; padding: 15px; background: rgba(0,0,0,0.05); border-radius: 10px; text-align: center; font-size: 0.85rem; color: #666;">';
  html += '<p style="margin: 5px 0;">Almirante Barroso 79, Santiago | +569 8765 4321 | contacto@delifast.cl | WhatsApp: +569 8765 4321</p>';
  html += '</div>';
  
  html += '</div>';
  return html;
}


// VISTA: TRACKING (Seguimiento del Pedido)
// function renderTracking() {
//   var html = '<div class="container my-4 fade-in">';
  
//   var user = getCurrentUser();
//   var totalOrders = user ? user.totalOrders || 0 : 0;
  
//   html += '<div class="text-center mb-4">';
//   if (totalOrders === 0) {
//     // ==== IMAGEN LOCAL ====
//     html += '<img src="img/tupedidoencamino.jpg" alt="Aún no has pedido" style="max-width: 400px; width: 100%; height: auto; border-radius: 15px; box-shadow: 0 6px 20px rgba(0,0,0,0.2);">';
//     html += '<p style="font-size: 1.2rem; color: #666; margin-top: 20px;">Aún no has realizado ningún pedido</p>';
//   } else {
//     // ==== URL WEB ====
//     html += '<img src="https://pbs.twimg.com/media/G6eL6RTWMAAn0nk?format=jpg&name=medium" alt="Tu Pedido en Camino" style="max-width: 400px; width: 100%; height: auto; border-radius: 15px; box-shadow: 0 6px 20px rgba(0,0,0,0.2);">';
//   }
//   html += '</div>';
  
//   html += getBackToHomeButton();
  
//   html += '<div style="margin-top: 60px; padding: 15px; background: rgba(0,0,0,0.05); border-radius: 10px; text-align: center; font-size: 0.85rem; color: #666;">';
//   html += '<p style="margin: 5px 0;">Almirante Barroso 79, Santiago | +569 8765 4321 | contacto@delifast.cl | WhatsApp: +569 8765 4321</p>';
//   html += '</div>';
  
//   html += '</div>';
//   return html;
// }

// VISTA: PIZZA (Solo pizzerías)
function renderPizza() {
  var html = '<div class="container my-4 fade-in">';
  html += '<h1 class="text-center mb-4" style="font-size: 2rem; color: #333;">🍕 Pizzerías</h1>';
  html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">';
  html += renderRestaurantCards(pizzaRestaurants);
  html += '</div>';
  html += getBackToHomeButton();
  html += '</div>';
  return html;
}

// VISTA: SUSHI (Solo sushi)
function renderSushi() {
  var html = '<div class="container my-4 fade-in">';
  html += '<h1 class="text-center mb-4" style="font-size: 2rem; color: #333;">🍣 Sushi</h1>';
  html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">';
  html += renderRestaurantCards(sushiRestaurants);
  html += '</div>';
  html += getBackToHomeButton();
  html += '</div>';
  return html;
}

// VISTA: FAST FOOD
function renderFastFood() {
  var html = '<div class="container my-4 fade-in">';
  html += '<h1 class="text-center mb-4" style="font-size: 2rem; color: #333;">Comida Rápida</h1>';
  html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">';
  var fastList = restaurants.filter(function(r) { return r.category === 'Americana'; });
  html += fastList.length > 0 ? renderRestaurantCards(fastList) : '<div class="card text-center" style="padding: 40px;"><h3>Próximamente</h3></div>';
  html += '</div>';
  html += getBackToHomeButton();
  html += '<div style="margin-top: 60px; padding: 12px; background: rgba(0,0,0,0.05); border-radius: 10px; text-align: center; font-size: 0.8rem; color: #666;"><p style="margin: 0;">📍 Almirante Barroso 79, Santiago | 📱 +569 8765 4321 | 📧 contacto@delifast.cl</p></div>';
  html += '</div>';
  return html;
}

// VISTA: CALL DELIVERY (Llamar Repartidor)
function renderCallDelivery() {
  var html = '<div class="container my-5 text-center fade-in">';
  html += '<h2 style="color: #333; margin-bottom: 30px;">📞 Llamar a tu Repartidor</h2>';
  html += '<p style="font-size: 1.2rem; color: #666; margin-bottom: 30px;">No tienes pedidos activos en este momento</p>';
  
  html += getBackToHomeButton();
  
  html += '<div style="margin-top: 80px; padding: 15px; background: rgba(0,0,0,0.05); border-radius: 10px; text-align: center; font-size: 0.85rem; color: #666;">';
  html += '<p style="margin: 5px 0;">Almirante Barroso 79, Santiago | +569 8765 4321 | contacto@delifast.cl | WhatsApp: +569 8765 4321</p>';
  html += '</div>';
  
  html += '</div>';
  return html;
}

// VISTA: PROFILE (Perfil de Usuario)
function renderProfile() {
  var user = getCurrentUser();
  
  if (!user) {
    navigate('login');
    return '';
  }
  
  var membership = getMembershipInfo(user.membershipLevel || 'Viento');
  var totalOrders = user.totalOrders || 0;
  var clientRating = user.clientRating || 5.0;
  
  var html = '<div class="container my-4 fade-in">';
  
  // Encabezado compacto con saludo personalizado
  html += '<div style="text-align: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 15px; margin-bottom: 20px;">';
  html += '<div style="font-size: 3rem; margin-bottom: 10px;">' + membership.icon + '</div>';
  html += '<h3 style="margin: 0 0 8px 0; font-size: 1.5rem;">' + membership.greeting + '</h3>';
  html += '<p style="margin: 0; font-size: 1rem; opacity: 0.9;">' + user.name + ' - Nivel ' + (user.membershipLevel || 'Viento') + '</p>';
  html += '</div>';
  
  // Estadísticas compactas
  html += '<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 20px;">';
  html += '<div style="background: white; padding: 15px; border-radius: 10px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">';
  html += '<div style="font-size: 1.8rem; color: #667eea; font-weight: bold;">' + totalOrders + '</div>';
  html += '<p style="margin: 5px 0 0 0; font-size: 0.8rem; color: #666;">Pedidos</p>';
  html += '</div>';
  html += '<div style="background: white; padding: 15px; border-radius: 10px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">';
  html += '<div style="font-size: 1.8rem; color: #28a745; font-weight: bold;">' + membership.discount + '%</div>';
  html += '<p style="margin: 5px 0 0 0; font-size: 0.8rem; color: #666;">Descuento</p>';
  html += '</div>';
  html += '<div style="background: white; padding: 15px; border-radius: 10px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">';
  html += '<div style="font-size: 1.8rem; color: #ffc107;">⭐</div>';
  html += '<p style="margin: 5px 0 0 0; font-size: 0.8rem; color: #666;">' + clientRating.toFixed(1) + '/5</p>';
  html += '</div>';
  html += '</div>';
  
  // Formulario compacto
  html += '<div style="background: white; padding: 15px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 15px;">';
  html += '<h5 style="margin-bottom: 12px; font-size: 1rem;">📋 Información Personal</h5>';
  html += '<form onsubmit="updateProfile(event)">';
  html += '<div style="margin-bottom: 10px;"><label style="display: block; font-weight: 600; margin-bottom: 3px; font-size: 0.9rem;">Nombre:</label>';
  html += '<input type="text" id="profile-name" class="form-control" value="' + user.name + '" required style="padding: 8px; font-size: 0.9rem;"></div>';
  html += '<div style="margin-bottom: 10px;"><label style="display: block; font-weight: 600; margin-bottom: 3px; font-size: 0.9rem;">Email:</label>';
  html += '<input type="email" id="profile-email" class="form-control" value="' + user.email + '" required style="padding: 8px; font-size: 0.9rem;"></div>';
  html += '<div style="margin-bottom: 10px;"><label style="display: block; font-weight: 600; margin-bottom: 3px; font-size: 0.9rem;">Teléfono:</label>';
  html += '<input type="tel" id="profile-phone" class="form-control" value="' + (user.phone || '') + '" style="padding: 8px; font-size: 0.9rem;"></div>';
  html += '<div style="margin-bottom: 12px;"><label style="display: block; font-weight: 600; margin-bottom: 3px; font-size: 0.9rem;">Dirección:</label>';
  html += '<input type="text" id="profile-address" class="form-control" value="' + (user.address || '') + '" style="padding: 8px; font-size: 0.9rem;"></div>';
  html += '<button type="submit" class="btn btn-primary" style="width: 100%; padding: 8px; font-size: 0.9rem;">Guardar Cambios</button>';
  html += '</form></div>';
  
  // Historial de repartidores calificados
  html += '<div style="background: white; padding: 15px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 15px;">';
  html += '<h5 style="margin-bottom: 12px; font-size: 1rem;">🚴 Repartidores que te Atendieron</h5>';
  
  var deliveryHistory = user.deliveryHistory || [
    { name: 'Carlos Rodríguez', orderId: 'ORD-001', date: '15/01/2025', rating: 5 },
    { name: 'María González', orderId: 'ORD-002', date: '10/01/2025', rating: 4 }
  ];
  
  if (deliveryHistory.length === 0) {
    html += '<p style="text-align: center; color: #999; padding: 15px; font-size: 0.9rem;">Aún no tienes entregas completadas</p>';
  } else {
    for (var i = 0; i < deliveryHistory.length; i++) {
      var d = deliveryHistory[i];
      html += '<div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; border-bottom: 1px solid #eee;">';
      html += '<div><strong style="font-size: 0.9rem;">' + d.name + '</strong><br><span style="font-size: 0.8rem; color: #666;">Pedido #' + d.orderId + ' - ' + d.date + '</span></div>';
      html += '<div style="font-size: 1rem;">';
      for (var j = 0; j < 5; j++) {
        html += j < d.rating ? '⭐' : '☆';
      }
      html += ' <span style="font-size: 0.8rem; color: #666;">(' + d.rating + '/5)</span></div></div>';
    }
  }
  html += '</div>';
  
  // Beneficios de membresía
  html += '<div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 15px; border-radius: 10px; margin-bottom: 15px;">';
  html += '<h5 style="margin-bottom: 10px; font-size: 1rem;">🎁 Beneficios de tu Membresía</h5>';
  html += '<p style="margin: 0; font-size: 0.9rem;">' + membership.benefits + '</p>';
  if (totalOrders < 5) {
    html += '<p style="margin: 8px 0 0 0; font-size: 0.8rem; font-weight: 600;">🎯 Realiza ' + (5 - totalOrders) + ' pedidos más para subir a nivel Bronce</p>';
  } else if (totalOrders < 10) {
    html += '<p style="margin: 8px 0 0 0; font-size: 0.8rem; font-weight: 600;">🎯 Realiza ' + (10 - totalOrders) + ' pedidos más para subir a nivel Plata</p>';
  } else if (totalOrders < 20) {
    html += '<p style="margin: 8px 0 0 0; font-size: 0.8rem; font-weight: 600;">🎯 Realiza ' + (20 - totalOrders) + ' pedidos más para subir a nivel Oro</p>';
  } else {
    html += '<p style="margin: 8px 0 0 0; font-size: 0.8rem; font-weight: 600;">🏆 ¡Felicidades! Has alcanzado el nivel máximo</p>';
  }
  html += '</div>';
  
  html += getBackToHomeButton();
  
  html += '<div style="margin-top: 30px; padding: 10px; background: rgba(0,0,0,0.05); border-radius: 8px; text-align: center; font-size: 0.75rem; color: #666;">';
  html += '<p style="margin: 0;">Almirante Barroso 79, Santiago | +569 8765 4321 | contacto@delifast.cl</p>';
  html += '</div>';
  
  html += '</div>';
  return html;
}

function renderPromotions() {
  var html = '<div class="container my-4 fade-in">';
  html += '<h1 class="text-center mb-4">🎉 Promociones Activas</h1>';
  
  if (promotions.length === 0) {
    html += '<img src="img/sinpromo.jpg" alt="Sin promociones" style="max-width: 500px; width: 90%; border-radius: 15px; box-shadow: 0 8px 20px rgba(0,0,0,0.2);">';
  } else {
    html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">';
    for (var i = 0; i < promotions.length; i++) {
      var promo = promotions[i];
      html += '<div style="background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">';
      html += '<img src="' + promo.image + '" alt="' + promo.title + '" style="width: 100%; height: 200px; object-fit: cover;">';
      html += '<div style="padding: 20px;">';
      html += '<h3 style="margin: 0 0 10px 0; color: #333;">' + promo.title + '</h3>';
      html += '<p style="margin: 0 0 10px 0; color: #666;">' + promo.description + '</p>';
      html += '<div style="display: flex; justify-content: space-between; align-items: center;">';
      html += '<span style="font-size: 0.9rem; color: #999;">' + promo.restaurant + '</span>';
      html += '<span style="font-size: 0.8rem; color: #28a745;">Válido hasta ' + promo.validUntil + '</span>';
      html += '</div></div></div>';
    }
    html += '</div>';
  }
  
  html += getBackToHomeButton();
  html += '</div>';
  return html;
}