// ========== RESTAURANTES (Comida general) ==========
var restaurants = [
  {
    id: 1,
    name: "Tarragona",
    category: "Española",
    rating: 4.6,
    deliveryTime: "35-45 min",
    deliveryFee: 1990,
    minOrder: 8990,
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=500",
    description: "Auténtica cocina española y paellas",
    available: true
  },
  {
    id: 2,
    name: "Bocanáriz",
    category: "Chilena",
    rating: 4.7,
    deliveryTime: "40-50 min",
    deliveryFee: 2290,
    minOrder: 12000,
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=500",
    description: "Comida chilena fusión con vinos premium",
    available: true
  },
  {
    id: 3,
    name: "Osaka",
    category: "Peruana",
    rating: 4.8,
    deliveryTime: "45-55 min",
    deliveryFee: 2490,
    minOrder: 15000,
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=500",
    description: "Alta cocina peruano-japonesa",
    available: true
  }
];

// ========== COMIDA RÁPIDA ==========
var fastFood = [
  {
    id: 101,
    name: "KFC",
    category: "Comida Rápida",
    rating: 4.3,
    deliveryTime: "25-35 min",
    deliveryFee: 1890,
    minOrder: 6990,
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500",
    description: "El mejor pollo frito crujiente de Santiago",
    available: true
  },
  {
    id: 102,
    name: "McDonald's",
    category: "Comida Rápida", 
    rating: 4.5,
    deliveryTime: "20-30 min",
    deliveryFee: 1590,
    minOrder: 5990,
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500",
    description: "Hamburguesas, papas fritas y más",
    available: true
  },
  {
    id: 103,
    name: "Juan Maestro",
    category: "Comida Rápida",
    rating: 4.2,
    deliveryTime: "30-40 min", 
    deliveryFee: 1290,
    minOrder: 4990,
    image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=500",
    description: "Sandwiches artesanales y comida rápida",
    available: true
  },
  {
    id: 104,
    name: "Burger King",
    category: "Comida Rápida",
    rating: 4.4,
    deliveryTime: "25-35 min",
    deliveryFee: 1690,
    minOrder: 6490,
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=500",
    description: "Whoppers flameados y papas crujientes",
    available: true
  }
];

// ========== PIZZERÍAS ==========
var pizzaRestaurants = [
  {
    id: 201,
    name: "Pizza Hut",
    category: "Pizza",
    rating: 4.4,
    deliveryTime: "30-40 min",
    deliveryFee: 1790,
    minOrder: 8990,
    image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=500",
    description: "Pizzas con borde relleno de queso",
    available: true
  },
  {
    id: 202,
    name: "Domino's Pizza",
    category: "Pizza",
    rating: 4.3,
    deliveryTime: "25-35 min",
    deliveryFee: 1590,
    minOrder: 7990,
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=500",
    description: "Pizzas recién horneadas a domicilio",
    available: true
  },
  {
    id: 203,
    name: "Little Caesars",
    category: "Pizza",
    rating: 4.1,
    deliveryTime: "20-30 min",
    deliveryFee: 1290,
    minOrder: 5990,
    image: "https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?w=500",
    description: "Pizza! Pizza! Dos pizzas a precio increíble",
    available: true
  }
];

// ========== SUSHI ==========
var sushiRestaurants = [
  {
    id: 301,
    name: "Sushiitto",
    category: "Sushi",
    rating: 4.6,
    deliveryTime: "35-45 min",
    deliveryFee: 1990,
    minOrder: 11990,
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500",
    description: "Sushi fresco y rolls creativos",
    available: true
  },
  {
    id: 302,
    name: "Sushi Star",
    category: "Sushi",
    rating: 4.5,
    deliveryTime: "40-50 min",
    deliveryFee: 2190,
    minOrder: 12990,
    image: "https://images.unsplash.com/photo-1563612116625-3012372fccce?w=500",
    description: "Auténtico sushi japonés",
    available: true
  },
  {
    id: 303,
    name: "Okami Sushi",
    category: "Sushi",
    rating: 4.7,
    deliveryTime: "45-55 min",
    deliveryFee: 2390,
    minOrder: 14990,
    image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=500",
    description: "Sushi premium y platos japoneses",
    available: true
  }
];

// ========== SUPERMERCADOS ==========
var supermarkets = [
  {
    id: 401,
    name: "Jumbo",
    category: "Supermercado", 
    rating: 4.7,
    deliveryTime: "55-70 min",
    deliveryFee: 2490,
    minOrder: 20000,
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=500",
    description: "Calidad y variedad",
    available: true
  },
  {
    id: 402,
    name: "Santa Isabel",
    category: "Supermercado",
    rating: 4.5,
    deliveryTime: "40-55 min",
    deliveryFee: 1790,
    minOrder: 12000,
    image: "https://images.unsplash.com/photo-1601599561213-832382fd07ba?w=500",
    description: "Fresco y cerca de ti",
    available: true
  },
  {
    id: 403,
    name: "Walmart",
    category: "Supermercado",
    rating: 4.6,
    deliveryTime: "50-65 min",
    deliveryFee: 2190,
    minOrder: 18000,
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=500",
    description: "Precios bajos siempre",
    available: true
  },
  {
    id: 404,
    name: "Supermercado Acuenta",
    category: "Supermercado",
    rating: 4.4,
    deliveryTime: "45-60 min", 
    deliveryFee: 1990,
    minOrder: 15000,
    image: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=500",
    description: "Todo para tu hogar con los mejores precios",
    available: true
  },
  {
    id: 405,
    name: "Mayorista 10",
    category: "Supermercado",
    rating: 4.3,
    deliveryTime: "60-75 min",
    deliveryFee: 2990,
    minOrder: 25000,
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=500",
    description: "Precios mayoristas para todos",
    available: true
  },
  {
    id: 406,
    name: "Alvi",
    category: "Supermercado",
    rating: 4.4,
    deliveryTime: "35-50 min",
    deliveryFee: 1690,
    minOrder: 10000,
    image: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=500", 
    description: "Lo mejor para tu mesa",
    available: true
  }
];

// ========== FARMACIAS ==========
var pharmacies = [
  {
    id: 501,
    name: "Farmacias Ahumada",
    category: "Farmacia",
    rating: 4.6,
    deliveryTime: "25-35 min",
    deliveryFee: 1490,
    minOrder: 5000,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500",
    description: "Medicamentos y productos de cuidado personal",
    available: true
  },
  {
    id: 502,
    name: "Farmacias Cruz Verde",
    category: "Farmacia",
    rating: 4.5,
    deliveryTime: "20-30 min",
    deliveryFee: 1290,
    minOrder: 4000,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=500",
    description: "Tu salud y bienestar a domicilio",
    available: true
  },
  {
    id: 503,
    name: "Salcobrand",
    category: "Farmacia",
    rating: 4.4,
    deliveryTime: "30-40 min",
    deliveryFee: 1590,
    minOrder: 4500,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500",
    description: "Medicamentos y productos de farmacia",
    available: true
  }
];

// ========== PRODUCTOS POR ESTABLECIMIENTO ==========
var products = {
 // KFC - ID 101
  101: [
    { id: 1001, restaurantId: 101, name: "Bucket 8 Piezas", description: "8 piezas de pollo crujiente + 2 acompañamientos", price: 12990, image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400", category: "Combos", available: true },
    { id: 1002, restaurantId: 101, name: "Alitas Picantes x8", description: "8 alitas bañadas en salsa picante", price: 7990, image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=400", category: "Alitas", available: true },
    { id: 1003, restaurantId: 101, name: "Twister", description: "Wrap de pollo crujiente con lechuga y salsa", price: 3990, image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=400", category: "Sandwiches", available: true }
  ],
  
  // McDonald's
  102: [
    { id: 1004, restaurantId: 102, name: "Big Mac Menu", description: "Big Mac + Papas Medianas + Bebida", price: 5990, image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400", category: "Combos", available: true },
    { id: 1005, restaurantId: 102, name: "McNuggets x10", description: "10 nuggets de pollo con salsa", price: 3490, image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400", category: "Nuggets", available: true },
    { id: 1006, restaurantId: 102, name: "Cuarto de Libra", description: "Hamburguesa con queso, cebolla y pepinillos", price: 4490, image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400", category: "Hamburguesas", available: true }
  ],
  
  // Pizza Hut
  201: [
    { id: 2001, restaurantId: 201, name: "Pizza Familiar", description: "Pizza familiar 3 ingredientes a elección", price: 11990, image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400", category: "Pizzas", available: true },
    { id: 2002, restaurantId: 201, name: "Pizza Personal", description: "Pizza personal con 2 ingredientes", price: 4990, image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=400", category: "Pizzas", available: true },
    { id: 2003, restaurantId: 201, name: "Palitos de Queso", description: "8 palitos de queso mozzarella", price: 3990, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400", category: "Acompañamientos", available: true }
  ],
  
  // Sushiitto
  301: [
    { id: 3001, restaurantId: 301, name: "Roll California", description: "Palta, pepino y surimi con sésamo", price: 6990, image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400", category: "Rolls", available: true },
    { id: 3002, restaurantId: 301, name: "Roll Philadelphia", description: "Salmón, queso crema y palta", price: 8990, image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400", category: "Rolls", available: true },
    { id: 3003, restaurantId: 301, name: "Sashimi Mix", description: "12 piezas de sashimi variado", price: 12990, image: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=400", category: "Sashimi", available: true }
  ],
  
  // Jumbo
  401: [
    { id: 4001, restaurantId: 401, name: "Leche Entera 1L", description: "Leche entera Soprole", price: 1190, image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400", category: "Lácteos", available: true },
    { id: 4002, restaurantId: 401, name: "Pan Molde Integral", description: "Pan de molde integral Talliani", price: 2390, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400", category: "Panadería", available: true },
    { id: 4003, restaurantId: 401, name: "Pechuga de Pollo", description: "Pechuga de pollo 500g", price: 3990, image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400", category: "Carnes", available: true }
  ],
  
  // Farmacias Ahumada
  501: [
    { id: 5001, restaurantId: 501, name: "Paracetamol 500mg", description: "Caja con 20 comprimidos", price: 2990, image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400", category: "Medicamentos", available: true },
    { id: 5002, restaurantId: 501, name: "Alcohol Gel 250ml", description: "Alcohol gel antibacterial", price: 2490, image: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?w=400", category: "Higiene", available: true },
    { id: 5003, restaurantId: 501, name: "Shampoo Anticaspa", description: "Shampoo Head & Shoulders 400ml", price: 5990, image: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=400", category: "Cuidado Personal", available: true }
  ]
};

// ========== DIRECCIONES REALES DE SANTIAGO ==========
var addresses = {
  // KFC
  101: "Av. Providencia 1234, Local 5, Providencia, Santiago",
  // McDonald's
  102: "Paseo Ahumada 345, Local 12, Santiago Centro",
  // Pizza Hut
  201: "Av. Las Condes 5678, Local 8, Las Condes, Santiago",
  // Sushiitto
  301: "Av. Vitacura 2345, Local 15, Vitacura, Santiago",
  // Jumbo
  401: "Av. Tobalaba 12345, Local 100, Puente Alto, Santiago",
  // Farmacias Ahumada
  501: "Av. La Florida 6789, Local 25, La Florida, Santiago"
};

// ========== PROMOCIONES REALES ==========
var promotions = [
  {
    id: 1,
    title: "🍗 2x1 en Alitas KFC",
    description: "Lleva 8 alitas picantes al precio de 4. Solo por hoy!",
    restaurant: "KFC",
    validUntil: "2025-01-20",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400"
  },
  {
    id: 2,
    title: "🍔 McMenú a $4.990",
    description: "Big Mac + Papas + Bebida por solo $4.990",
    restaurant: "McDonald's", 
    validUntil: "2025-01-25",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400"
  },
  {
    id: 3,
    title: "🛒 20% OFF en Lácteos",
    description: "20% de descuento en todos los lácteos y quesos",
    restaurant: "Jumbo",
    validUntil: "2025-01-18",
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=400"
  },
  {
    id: 4,
    title: "🚚 Envío Gratis Supermercados",
    description: "Envío gratis en pedidos sobre $25.000 en supermercados",
    restaurant: "Todos los Supermercados",
    validUntil: "2025-01-31", 
    image: "https://images.unsplash.com/photo-1601599561213-832382fd07ba?w=400"
  }
];