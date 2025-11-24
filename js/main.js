// ========== SISTEMA DE NAVEGACIÓN SPA ==========

var currentView = 'landing';
var currentRestaurantId = null;
var currentCategory = 'all';

// Formatear precio
function formatPrice(price) {
  return '$' + price.toLocaleString('es-CL');
}

// Navegar a una vista
function navigate(view, params) {
  params = params || {};
  currentView = view;
  if (params.restaurantId) currentRestaurantId = params.restaurantId;
  if (params.category) currentCategory = params.category;
  
  renderView();
  window.scrollTo(0, 0);
}

// Renderizar vista actual
function renderView() {
  var app = document.getElementById('app');
  
  if (currentView === 'landing') {
    app.innerHTML = renderLanding();
  } else if (currentView === 'home') {
    app.innerHTML = renderHome();
  } else if (currentView === 'membership') {
    app.innerHTML = renderMembership();
  } else if (currentView === 'promotions') {
    app.innerHTML = renderPromotions();
  } else if (currentView === 'delivery') {
    app.innerHTML = renderDelivery();
  } else if (currentView === 'calldelivery') {
    app.innerHTML = renderCallDelivery();
  } else if (currentView === 'tracking') {
    app.innerHTML = renderTracking();
  } else if (currentView === 'login') {
    app.innerHTML = renderLogin();
  } else if (currentView === 'register') {
    app.innerHTML = renderRegister();
  } else if (currentView === 'forgotPassword') {
    app.innerHTML = renderForgotPassword();
  } else if (currentView === 'restaurants') {
    app.innerHTML = renderRestaurants();
  } else if (currentView === 'pizza') {
    app.innerHTML = renderPizza();
  } else if (currentView === 'sushi') {
    app.innerHTML = renderSushi();
  } else if (currentView === 'supermarkets') {
    app.innerHTML = renderSupermarkets();
  } else if (currentView === 'fastfood') {
    app.innerHTML = renderFastFood();
  } else if (currentView === 'pharmacies') {
    app.innerHTML = renderPharmacies();
  } else if (currentView === 'cart') {
    app.innerHTML = renderCart();
  } else if (currentView === 'checkout') {
    app.innerHTML = renderCheckout();
  } else if (currentView === 'profile') {
    app.innerHTML = renderProfile();
  } else if (currentView === 'restaurantDetail') {
    app.innerHTML = renderRestaurantDetail(currentRestaurantId);
  } else {
    app.innerHTML = renderLanding();
  }
  
  updateTopBar();
  updateNavbar();
}


// Actualizar barra superior morada
function updateTopBar() {
  var topBar = document.getElementById('top-bar');
  var user = getCurrentUser();
  
  if (currentView === 'login' || currentView === 'register' || currentView === 'forgotPassword' || currentView === 'landing') {
    topBar.style.display = 'none';
    return;
  }
  
  topBar.style.display = 'flex';
  
  var topBarHTML = '';
  
  // LOGO A LA IZQUIERDA
  topBarHTML += '<img src="img/logito.JPG" alt="DeliFast" class="top-bar-logo" onclick="navigate(\'home\')">';
  
  // LADO DERECHO: Botones o usuario
  topBarHTML += '<div style="display: flex; gap: 8px; align-items: center;">';
  
  if (user) {
    // Usuario logueado - Dropdown compacto
    topBarHTML += '<div class="dropdown">';
    topBarHTML += '<button style="padding: 4px 10px; font-size: 0.75rem; display: flex; align-items: center; gap: 3px;">';
    topBarHTML += '<span>' + user.name + '</span>';
    topBarHTML += '<span style="font-size: 0.6rem;">▼</span>';
    topBarHTML += '</button>';
    topBarHTML += '<div class="dropdown-content">';
    topBarHTML += '<a href="#" onclick="navigate(\'profile\')">👤 Mi Perfil</a>';
    topBarHTML += '<a href="#" onclick="logout()">🚪 Cerrar Sesión</a>';
    topBarHTML += '</div>';
    topBarHTML += '</div>';
  } else {
    topBarHTML += '<button onclick="navigate(\'login\')" style="padding: 4px 10px; font-size: 0.75rem;">Iniciar sesión</button>';
    topBarHTML += '<button onclick="navigate(\'register\')" style="padding: 4px 10px; font-size: 0.75rem;">Registrarse</button>';
  }
  
  // CARRITO
  // CARRITO con mejor soporte móvil
topBarHTML += '<div onclick="navigate(\'cart\')" style="cursor: pointer; -webkit-tap-highlight-color: transparent; padding: 5px;">';
topBarHTML += '<img src="img/carrito.jpg" alt="Carrito" style="height: 30px; width: auto; display: block; pointer-events: none;">';
topBarHTML += '</div>';
  
  topBar.innerHTML = topBarHTML;
}

// Actualizar navbar
function updateNavbar() {
  var navbar = document.getElementById('navbar');
  navbar.style.display = 'none';
}

// Buscar restaurantes
function searchRestaurants(query) {
  var searchTerm = query.toLowerCase();
  return restaurants.filter(function(r) {
    return r.name.toLowerCase().indexOf(searchTerm) !== -1 ||
           r.category.toLowerCase().indexOf(searchTerm) !== -1 ||
           r.description.toLowerCase().indexOf(searchTerm) !== -1;
  });
}

// Filtrar por categoría
function getRestaurantsByCategory(category) {
  if (!category || category === "Todos") return restaurants;
  return restaurants.filter(function(r) {
    return r.category === category;
  });
}

// Inicializar aplicación
document.addEventListener('DOMContentLoaded', function() {
  renderView();
  updateCartBadge();
});