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
    available: true,
    addresses: ["Av. Providencia 1234, Santiago", "Calle Las Condes 5678, Santiago"]
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
    available: true,
    addresses: ["Av. Vitacura 2345, Santiago", "Calle Lastarria 678, Santiago"]
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
    available: true,
    addresses: ["Av. Alonso de Córdova 3456, Santiago", "Calle El Golf 789, Santiago"]
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
    available: true,
    addresses: ["Av. Libertador Bernardo O'Higgins 1234, Santiago", "Calle San Diego 5678, Santiago"] 
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
    available: true,
    addresses: ["Av. Apoquindo 2345, Santiago", "Calle Manuel Montt 678, Santiago"]
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
    available: true,
    addresses: ["Av. Vicuña Mackenna 3456, Santiago", "Calle Huérfanos 789, Santiago"]  
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
    available: true,
    addresses: ["Av. Manuel Montt 4567, Santiago", "Calle Pajaritos 890, Santiago"]
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
    available: true,
    addresses: ["Av. Nueva Providencia 345, Santiago", "Calle San Antonio 678, Santiago"] 
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
    available: true,
    addresses: ["Av. Los Leones 456, Santiago", "Calle Merced 789, Santiago"]
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
    available: true,
    addresses: ["Av. Irarrazabal 567, Santiago", "Calle San Pablo 890, Santiago"] 
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
    available: true,
    addresses : ["Av. Manuel Montt 1234, Santiago", "Calle Bellavista 5678, Santiago"]  
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
    available: true,
    addresses : ["Av. Vitacura 2345, Santiago", "Calle Lastarria 6789, Santiago"] 
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
    available: true,
    addresses : ["Av. Alonso de Córdova 3456, Santiago", "Calle El Golf 7890, Santiago"]  
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
    available: true,
    addresses : ["Av. Kennedy 1234, Santiago", "Calle Los Leones 5678, Santiago"]
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
    available: true,
    addresses : ["Av. Vicuña Mackenna 2345, Santiago", "Calle Huérfanos 6789, Santiago"]
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
    available: true,
    addresses : ["Av. Pajaritos 3456, Santiago", "Calle San Pablo 7890, Santiago"]  
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
    available: true,
    addresses : ["Av. San Martín 4567, Santiago", "Calle Independencia 8901, Santiago"]
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
    available: true,
    addresses : ["Av. Lo Espejo 5678, Santiago", "Calle Recoleta 9012, Santiago"]
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
    available: true,
    addresses : ["Av. La Florida 6789, Santiago", "Calle Macul 1234, Santiago"]
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
    available: true,
    addresses : ["Av. Libertador Bernardo O'Higgins 1234, Santiago", "Calle San Diego 5678, Santiago"]
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
    available: true,
    addresses : ["Av. Apoquindo 2345, Santiago", "Calle Manuel Montt 678, Santiago"]
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
    available: true,
    addresses : ["Av. Vicuña Mackenna 3456, Santiago", "Calle Huérfanos 789, Santiago"] 
  }
];

// ========== PRODUCTOS POR ESTABLECIMIENTO ==========
// ========== PRODUCTOS POR ESTABLECIMIENTO ==========
var products = {
  // KFC - ID 101
  101: [
    { id: 1001, restaurantId: 101, name: "Bucket 8 Piezas", description: "8 piezas de pollo crujiente + 2 acompañamientos", price: 12990, image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400", category: "Combos", available: true },
    { id: 1002, restaurantId: 101, name: "Alitas Picantes x8", description: "8 alitas bañadas en salsa picante", price: 7990, image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=400", category: "Alitas", available: true },
    { id: 1003, restaurantId: 101, name: "Twister", description: "Wrap de pollo crujiente con lechuga y salsa", price: 3990, image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=400", category: "Sandwiches", available: true }
  ],
  
  // McDonald's - ID 102
  102: [
    { id: 1004, restaurantId: 102, name: "Big Mac Menu", description: "Big Mac + Papas Medianas + Bebida", price: 5990, image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400", category: "Combos", available: true },
    { id: 1005, restaurantId: 102, name: "McNuggets x10", description: "10 nuggets de pollo con salsa", price: 3490, image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400", category: "Nuggets", available: true },
    { id: 1006, restaurantId: 102, name: "Cuarto de Libra", description: "Hamburguesa con queso, cebolla y pepinillos", price: 4490, image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400", category: "Hamburguesas", available: true }
  ],

  // Juan Maestro - ID 103
  103: [
    { id: 1007, restaurantId: 103, name: "Chacarero Completo", description: "Pan amasado, carne mechada, porotos verdes, tomate y ají verde", price: 4990, image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=400", category: "Sandwiches", available: true },
    { id: 1008, restaurantId: 103, name: "Barros Luco", description: "Pan, carne y queso derretido", price: 4490, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400", category: "Sandwiches", available: true },
    { id: 1009, restaurantId: 103, name: "Completo Italiano", description: "Vienesa, tomate, palta y mayonesa", price: 2990, image: "https://images.unsplash.com/photo-1612392062798-2dbae2d13f0c?w=400", category: "Completos", available: true }
  ],

  // Burger King - ID 104
  104: [
    { id: 1010, restaurantId: 104, name: "Whopper Combo", description: "Whopper + Papas Grandes + Bebida", price: 6490, image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400", category: "Combos", available: true },
    { id: 1011, restaurantId: 104, name: "Nuggets King x9", description: "9 nuggets de pollo crujientes", price: 3990, image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400", category: "Nuggets", available: true },
    { id: 1012, restaurantId: 104, name: "Stacker Doble", description: "Doble carne, doble queso, tocino", price: 5490, image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400", category: "Hamburguesas", available: true }
  ],
  
  // Pizza Hut - ID 201
  201: [
    { id: 2001, restaurantId: 201, name: "Pizza Familiar", description: "Pizza familiar 3 ingredientes a elección", price: 11990, image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400", category: "Pizzas", available: true },
    { id: 2002, restaurantId: 201, name: "Pizza Personal", description: "Pizza personal con 2 ingredientes", price: 4990, image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=400", category: "Pizzas", available: true },
    { id: 2003, restaurantId: 201, name: "Palitos de Queso", description: "8 palitos de queso mozzarella", price: 3990, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400", category: "Acompañamientos", available: true }
  ],

  // Domino's Pizza - ID 202
  202: [
    { id: 2004, restaurantId: 202, name: "Pizza Grande Pepperoni", description: "Pizza grande con doble pepperoni", price: 10990, image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=400", category: "Pizzas", available: true },
    { id: 2005, restaurantId: 202, name: "Pizza Mediana Vegetariana", description: "Champiñones, pimientos, cebolla, aceitunas", price: 8990, image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400", category: "Pizzas", available: true },
    { id: 2006, restaurantId: 202, name: "Alitas BBQ x8", description: "8 alitas con salsa BBQ", price: 5990, image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=400", category: "Acompañamientos", available: true }
  ],

  // Little Caesars - ID 203
  203: [
    { id: 2007, restaurantId: 203, name: "Hot-N-Ready Pepperoni", description: "Pizza grande pepperoni lista para llevar", price: 5990, image: "https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?w=400", category: "Pizzas", available: true },
    { id: 2008, restaurantId: 203, name: "Crazy Bread", description: "8 palitos de pan con mantequilla y ajo", price: 2490, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400", category: "Acompañamientos", available: true },
    { id: 2009, restaurantId: 203, name: "Pizza 4 Quesos Grande", description: "Mozzarella, parmesano, provolone y cheddar", price: 7990, image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400", category: "Pizzas", available: true }
  ],
  
  // Sushiitto - ID 301
  301: [
    { id: 3001, restaurantId: 301, name: "Roll California", description: "Palta, pepino y surimi con sésamo", price: 6990, image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400", category: "Rolls", available: true },
    { id: 3002, restaurantId: 301, name: "Roll Philadelphia", description: "Salmón, queso crema y palta", price: 8990, image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400", category: "Rolls", available: true },
    { id: 3003, restaurantId: 301, name: "Sashimi Mix", description: "12 piezas de sashimi variado", price: 12990, image: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=400", category: "Sashimi", available: true }
  ],

  // Sushi Star - ID 302
  302: [
    { id: 3004, restaurantId: 302, name: "Roll Spicy Tuna", description: "Atún picante, pepino y cebollín", price: 7990, image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400", category: "Rolls", available: true },
    { id: 3005, restaurantId: 302, name: "Tempura Roll", description: "Camarón tempura, palta y salsa teriyaki", price: 9490, image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400", category: "Rolls", available: true },
    { id: 3006, restaurantId: 302, name: "Nigiri Salmón x6", description: "6 piezas de nigiri de salmón fresco", price: 8990, image: "https://images.unsplash.com/photo-1563612116625-3012372fccce?w=400", category: "Nigiri", available: true }
  ],

  // Okami Sushi - ID 303
  303: [
    { id: 3007, restaurantId: 303, name: "Dragon Roll", description: "Anguila, palta, pepino con salsa dulce", price: 11990, image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400", category: "Rolls Premium", available: true },
    { id: 3008, restaurantId: 303, name: "Rainbow Roll", description: "Salmón, atún, pez mantequilla sobre california", price: 13990, image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400", category: "Rolls Premium", available: true },
    { id: 3009, restaurantId: 303, name: "Combo Sashimi Deluxe", description: "18 piezas variadas de pescado premium", price: 17990, image: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=400", category: "Sashimi", available: true }
  ],
  
  // Jumbo - ID 401
  401: [
    { id: 4001, restaurantId: 401, name: "Leche Entera 1L", description: "Leche entera Soprole", price: 1190, image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400", category: "Lácteos", available: true },
    { id: 4002, restaurantId: 401, name: "Pan Molde Integral", description: "Pan de molde integral Talliani", price: 2390, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400", category: "Panadería", available: true },
    { id: 4003, restaurantId: 401, name: "Pechuga de Pollo", description: "Pechuga de pollo 500g", price: 3990, image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400", category: "Carnes", available: true }
  ],

  // Santa Isabel - ID 402
  402: [
    { id: 4004, restaurantId: 402, name: "Arroz Tucapel 1kg", description: "Arroz grado 1 premium", price: 1890, image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400", category: "Abarrotes", available: true },
    { id: 4005, restaurantId: 402, name: "Aceite Girasol 900ml", description: "Aceite Chef 100% vegetal", price: 2490, image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400", category: "Abarrotes", available: true },
    { id: 4006, restaurantId: 402, name: "Frutas Mix 1kg", description: "Mix de frutas de estación", price: 3490, image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400", category: "Frutas y Verduras", available: true }
  ],

  // Walmart - ID 403
  403: [
    { id: 4007, restaurantId: 403, name: "Coca Cola 1.5L", description: "Bebida cola 1.5 litros", price: 1690, image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400", category: "Bebidas", available: true },
    { id: 4008, restaurantId: 403, name: "Galletas Tritón", description: "Galletas sabor chocolate 126g", price: 890, image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400", category: "Snacks", available: true },
    { id: 4009, restaurantId: 403, name: "Papel Higiénico Elite x4", description: "Pack 4 rollos doble hoja", price: 2990, image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=400", category: "Limpieza", available: true }
  ],

  // Supermercado Acuenta - ID 404
  404: [
    { id: 4010, restaurantId: 404, name: "Fideos Carozzi 400g", description: "Fideos variedad de pastas", price: 990, image: "https://images.unsplash.com/photo-1551462147-37da8c66c747?w=400", category: "Abarrotes", available: true },
    { id: 4011, restaurantId: 404, name: "Atún Lomito San José", description: "Atún en agua 140g", price: 1490, image: "https://images.unsplash.com/photo-1580217593608-61931cefc821?w=400", category: "Conservas", available: true },
    { id: 4012, restaurantId: 404, name: "Yogurt Colun 1L", description: "Yogurt batido sabor frutilla", price: 1990, image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400", category: "Lácteos", available: true }
  ],

  // Mayorista 10 - ID 405
  405: [
    { id: 4013, restaurantId: 405, name: "Azúcar 5kg", description: "Azúcar blanca Iansa saco 5kg", price: 4990, image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400", category: "Abarrotes", available: true },
    { id: 4014, restaurantId: 405, name: "Harina 1kg Pack x5", description: "Harina todo uso pack 5 unidades", price: 5490, image: "https://images.unsplash.com/photo-1628692877591-322b8f4482c6?w=400", category: "Abarrotes", available: true },
    { id: 4015, restaurantId: 405, name: "Detergente Drive 3L", description: "Detergente líquido bidón 3 litros", price: 7990, image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400", category: "Limpieza", available: true }
  ],

  // Alvi - ID 406
  406: [
    { id: 4016, restaurantId: 406, name: "Queso Mantecoso", description: "Queso mantecoso laminado 500g", price: 3990, image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400", category: "Lácteos", available: true },
    { id: 4017, restaurantId: 406, name: "Jamón de Pavo", description: "Jamón de pavo PF 200g", price: 2490, image: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?w=400", category: "Cecinas", available: true },
    { id: 4018, restaurantId: 406, name: "Huevos Docena", description: "Huevos blancos talla L", price: 2790, image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400", category: "Lácteos", available: true }
  ],
  
  // Farmacias Ahumada - ID 501
  501: [
    { id: 5001, restaurantId: 501, name: "Paracetamol 500mg", description: "Caja con 20 comprimidos", price: 2990, image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400", category: "Medicamentos", available: true },
    { id: 5002, restaurantId: 501, name: "Alcohol Gel 250ml", description: "Alcohol gel antibacterial", price: 2490, image: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?w=400", category: "Higiene", available: true },
    { id: 5003, restaurantId: 501, name: "Shampoo Anticaspa", description: "Shampoo Head & Shoulders 400ml", price: 5990, image: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=400", category: "Cuidado Personal", available: true }
  ],

  // Farmacias Cruz Verde - ID 502
  502: [
    { id: 5004, restaurantId: 502, name: "Ibuprofeno 400mg", description: "Caja con 20 comprimidos", price: 3490, image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400", category: "Medicamentos", available: true },
    { id: 5005, restaurantId: 502, name: "Mascarillas KN95 x10", description: "Pack 10 mascarillas desechables", price: 4990, image: "https://images.unsplash.com/photo-1584634428335-c01d255b2170?w=400", category: "Protección", available: true },
    { id: 5006, restaurantId: 502, name: "Vitamina C 1000mg", description: "Frasco 30 comprimidos efervescentes", price: 6990, image: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=400", category: "Suplementos", available: true }
  ],

  // Salcobrand - ID 503
  503: [
    { id: 5007, restaurantId: 503, name: "Omeprazol 20mg", description: "Caja con 14 cápsulas", price: 4490, image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400", category: "Medicamentos", available: true },
    { id: 5008, restaurantId: 503, name: "Crema Dental Colgate", description: "Pasta dental triple acción 150ml", price: 2290, image: "https://images.unsplash.com/photo-1622034217910-e7fd7087b8da?w=400", category: "Higiene Bucal", available: true },
    { id: 5009, restaurantId: 503, name: "Pañales Huggies Talla M", description: "Pack 48 unidades", price: 12990, image: "https://images.unsplash.com/photo-1519689373023-dd07c7988603?w=400", category: "Bebé", available: true }
  ],

  // Tarragona - ID 1
  1: [
    { id: 1101, restaurantId: 1, name: "Paella Valenciana", description: "Paella tradicional con mariscos y pollo", price: 14990, image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400", category: "Platos Principales", available: true },
    { id: 1102, restaurantId: 1, name: "Pulpo a la Gallega", description: "Pulpo cocido con pimentón y aceite de oliva", price: 12990, image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523f?w=400", category: "Entradas", available: true },
    { id: 1103, restaurantId: 1, name: "Croquetas de Jamón x6", description: "Croquetas artesanales de jamón ibérico", price: 6990, image: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=400", category: "Tapas", available: true }
  ],

  // Bocanáriz - ID 2
  2: [
    { id: 1104, restaurantId: 2, name: "Pastel de Choclo", description: "Pastel de choclo tradicional chileno", price: 8990, image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400", category: "Platos Principales", available: true },
    { id: 1105, restaurantId: 2, name: "Lomo a lo Pobre", description: "Lomo con huevo, papas fritas y cebolla", price: 11990, image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400", category: "Platos Principales", available: true },
    { id: 1106, restaurantId: 2, name: "Empanadas de Pino x3", description: "Empanadas chilenas horneadas", price: 4990, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400", category: "Entradas", available: true }
  ],

  // Osaka - ID 3
  3: [
    { id: 1107, restaurantId: 3, name: "Ceviche de Pescado", description: "Ceviche fresco con leche de tigre", price: 13990, image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400", category: "Entradas", available: true },
    { id: 1108, restaurantId: 3, name: "Lomo Saltado", description: "Lomo saltado con papas y arroz", price: 15990, image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=400", category: "Platos Principales", available: true },
    { id: 1109, restaurantId: 3, name: "Anticuchos x3", description: "Brochetas de corazón marinadas", price: 9990, image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400", category: "Entradas", available: true }
  ]
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