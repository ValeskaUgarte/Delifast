// ========== SISTEMA DE MEMBRESÍA ==========

// ========== SISTEMA DE MEMBRESÍA ==========

var membershipLevels = {
  'Viento': {
    icon: '<img src="img/viento.jpg" style="width: 50px; height: 50px; object-fit: contain;">',
    iconWeb: '<img src="" style="width: 50px; height: 50px; object-fit: contain;">',
    banner: 'img/bannerviento.jpg',
    bannerWeb: '',
    color: '#95a5a6',
    greeting: 'Bienvenido, Nivel Viento',
    benefits: 'Comienza tu viaje con DeliFast',
    discount: 0
  },
  'Carton': {
    icon: '<img src="img/carton.jpg" style="width: 50px; height: 50px; object-fit: contain;">',
    iconWeb: '<img src="" style="width: 50px; height: 50px; object-fit: contain;">',
    banner: 'img/bannercarton.jpg',
    bannerWeb: '',
    color: '#8b7355',
    greeting: 'Usuario Nivel Cartón',
    benefits: 'Hazte miembro para obtener beneficios',
    discount: 0
  },
  'Bronce': {
    icon: '<img src="img/bronce.jpg" style="width: 50px; height: 50px; object-fit: contain;">',
    iconWeb: '<img src="" style="width: 50px; height: 50px; object-fit: contain;">',
    banner: 'img/bannerbronce.jpg',
    bannerWeb: '',
    color: '#CD7F32',
    greeting: '¡Hola, Miembro Bronce!',
    benefits: '5% de descuento en todos tus pedidos',
    discount: 5
  },
  'Plata': {
    icon: '<img src="img/plata.jpg" style="width: 50px; height: 50px; object-fit: contain;">',
    iconWeb: '<img src="" style="width: 50px; height: 50px; object-fit: contain;">',
    banner: 'img/bannerplata.jpg',
    bannerWeb: '',
    color: '#C0C0C0',
    greeting: '¡Hola, Miembro Plata!',
    benefits: '10% de descuento + envío gratis en pedidos sobre $15.000',
    discount: 10
  },
  'Oro': {
    icon: '<img src="img/oro.jpg" style="width: 50px; height: 50px; object-fit: contain;">',
    iconWeb: '<img src="" style="width: 50px; height: 50px; object-fit: contain;">',
    banner: 'img/banneroro.jpg',
    bannerWeb: '',
    color: '#FFD700',
    greeting: '¡Hola, Miembro Oro!',
    benefits: '15% de descuento + envío gratis + prioridad',
    discount: 15
  },
  'Platino': {
    icon: '<img src="img/platino.jpg" style="width: 50px; height: 50px; object-fit: contain;">',
    iconWeb: '<img src="" style="width: 50px; height: 50px; object-fit: contain;">',
    banner: 'img/bannerplatino.jpg',
    bannerWeb: '',
    color: '#E5E4E2',
    greeting: '¡Hola, Miembro Platino!',
    benefits: '20% de descuento + envío gratis + soporte prioritario',
    discount: 20
  },
  'Diamante': {
    icon: '<img src="img/diamante.jpg" style="width: 50px; height: 50px; object-fit: contain;">',
    iconWeb: '<img src="" style="width: 50px; height: 50px; object-fit: contain;">',
    banner: 'img/bannerdiamante.jpg',
    bannerWeb: '',
    color: '#B9F2FF',
    greeting: '¡Hola, Miembro Diamante!',
    benefits: '25% de descuento + todos los beneficios VIP',
    discount: 25
  }
};

function getMembershipInfo(level) {
  return membershipLevels[level] || membershipLevels['Viento'];
}

function upgradeMembership(currentOrders, isMember) {
  if (!isMember) return currentOrders >= 1 ? 'Carton' : 'Viento';
  if (currentOrders >= 50) return 'Diamante';
  if (currentOrders >= 30) return 'Platino';
  if (currentOrders >= 20) return 'Oro';
  if (currentOrders >= 10) return 'Plata';
  if (currentOrders >= 5) return 'Bronce';
  return 'Carton';
}