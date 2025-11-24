// ========== SISTEMA DE MEMBRESÍA ==========


// ========== SISTEMA DE MEMBRESÍA ==========

var membershipLevels = {
  'Viento': {
    icon: '<img src="img/viento.jpg" style="width: 50px; height: 50px; object-fit: contain;">',
    iconWeb: '<img src="https://pbs.twimg.com/media/G6eLzHsWkAARmjG?format=jpg&name=900x900" style="width: 50px; height: 50px; object-fit: contain;">',
    banner: 'img/bannerplatino.jpg',
    bannerWeb: 'https://pbs.twimg.com/media/G6eKVntWEAASHID?format=jpg&name=small',
    color: '#95a5a6',
    greeting: '¡Bienvenido a DeliFast!',
    benefits: 'Comienza tu viaje con DeliFast',
    discount: 0
  },
  'Carton': {
    icon: '<img src="img/carton.jpg" style="width: 50px; height: 50px; object-fit: contain;">',
    iconWeb: '<img src="https://pbs.twimg.com/media/G6eLXmJW4AA68YR?format=jpg&name=900x900" style="width: 50px; height: 50px; object-fit: contain;">',
    banner: 'img/bannerplatino2.jpg',
    bannerWeb: 'https://pbs.twimg.com/media/G6eKVn9XwAA4IhO?format=jpg&name=small',
    color: '#8b7355',
    greeting: '¡Que tengas un gran día!',
    benefits: 'Hazte miembro para obtener beneficios',
    discount: 0
  },
  'Bronce': {
    icon: '<img src="img/bronce.jpg" style="width: 50px; height: 50px; object-fit: contain;">',
    iconWeb: '<img src="https://pbs.twimg.com/media/G6eLXmOWgAAtviW?format=jpg&name=900x900" style="width: 50px; height: 50px; object-fit: contain;">',
    banner: 'img/bannerplatino3.jpg',
    bannerWeb: 'https://pbs.twimg.com/media/G6eKVnwWsAAmb_9?format=jpg&name=small',
    color: '#CD7F32',
    greeting: '¡Disfruta de tu comida!',
    benefits: '5% de descuento en todos tus pedidos',
    discount: 5
  },
  'Plata': {
    icon: '<img src="img/plata.jpg" style="width: 50px; height: 50px; object-fit: contain;">',
    iconWeb: '<img src="https://pbs.twimg.com/media/G6eLXmJWcAAqFJQ?format=jpg&name=900x900" style="width: 50px; height: 50px; object-fit: contain;">',
    banner: 'img/bannerplatino4.jpg',
    bannerWeb: 'https://pbs.twimg.com/media/G6eKVnvW0AAaH-h?format=jpg&name=small',
    color: '#C0C0C0',
    greeting: '¡Gracias por elegirnos!',
    benefits: '10% de descuento + envío gratis en pedidos sobre $15.000',
    discount: 10
  },
  'Oro': {
    icon: '<img src="img/oro.jpg" style="width: 50px; height: 50px; object-fit: contain;">',
    iconWeb: '<img src="https://pbs.twimg.com/media/G6eLzH1XcAAh4vq?format=jpg&name=900x900" style="width: 50px; height: 50px; object-fit: contain;">',
    banner: 'img/bannerplatino.jpg',
    bannerWeb: 'https://pbs.twimg.com/media/G6eKVntWEAASHID?format=jpg&name=small',
    color: '#FFD700',
    greeting: '¡Bienvenido a DeliFast!',
    benefits: '15% de descuento + envío gratis + prioridad',
    discount: 15
  },
  'Platino': {
    icon: '<img src="img/platino.jpg" style="width: 50px; height: 50px; object-fit: contain;">',
    iconWeb: '<img src="https://pbs.twimg.com/media/G6eLzHvWAAI0KBH?format=jpg&name=900x900" style="width: 50px; height: 50px; object-fit: contain;">',
    banner: 'img/bannerplatino2.jpg',
    bannerWeb: 'https://pbs.twimg.com/media/G6eKVn9XwAA4IhO?format=jpg&name=small',
    color: '#E5E4E2',
    greeting: '¡Que tengas un gran día!',
    benefits: '20% de descuento + envío gratis + soporte prioritario',
    discount: 20
  }
};

// Función para obtener banner aleatorio (local)
function getRandomBanner() {
  var banners = [
    'img/bannerplatino.jpg',
    'img/bannerplatino2.jpg', 
    'img/bannerplatino3.jpg',
    'img/bannerplatino4.jpg'
  ];
  return banners[Math.floor(Math.random() * banners.length)];
}

// Función para obtener banner aleatorio (web)
function getRandomBannerWeb() {
  var bannersWeb = [
    'https://pbs.twimg.com/media/G6eKVntWEAASHID?format=jpg&name=small',
    'https://pbs.twimg.com/media/G6eKVn9XwAA4IhO?format=jpg&name=small',
    'https://pbs.twimg.com/media/G6eKVnwWsAAmb_9?format=jpg&name=small',
    'https://pbs.twimg.com/media/G6eKVnvW0AAaH-h?format=jpg&name=small'
  ];
  return bannersWeb[Math.floor(Math.random() * bannersWeb.length)];
}

// Función para obtener saludo aleatorio
function getRandomGreeting() {
  var greetings = [
    '¡Bienvenido a DeliFast!',
    '¡Que tengas un gran día!',
    '¡Disfruta de tu comida!',
    '¡Gracias por elegirnos!'
  ];
  return greetings[Math.floor(Math.random() * greetings.length)];
}

function getMembershipInfo(level) {
  var info = membershipLevels[level] || membershipLevels['Viento'];
  // Actualizar banners y saludo cada vez que se consulta
  info.banner = getRandomBanner();
  info.bannerWeb = getRandomBannerWeb();
  info.greeting = getRandomGreeting();
  return info;
}

function upgradeMembership(currentOrders, isMember) {
  if (!isMember) return currentOrders >= 1 ? 'Carton' : 'Viento';
  if (currentOrders >= 30) return 'Platino';
  if (currentOrders >= 20) return 'Oro';
  if (currentOrders >= 10) return 'Plata';
  if (currentOrders >= 5) return 'Bronce';
  return 'Carton';
}