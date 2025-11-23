// ========== DATOS DE RESTAURANTES ==========
var restaurants = [
  {
    id: 1,
    name: "Pizzería Bella Italia",
    category: "Italiana",
    rating: 4.8,
    deliveryTime: "30-40 min",
    deliveryFee: 2000,
    minOrder: 8000,
    image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=500",
    description: "Auténtica cocina italiana con las mejores pizzas de Santiago",
    available: true
  },
  {
    id: 2,
    name: "Sushi Tokyo",
    category: "Japonesa",
    rating: 4.9,
    deliveryTime: "40-50 min",
    deliveryFee: 2500,
    minOrder: 10000,
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500",
    description: "Los mejores rolls y sushi fresco de la ciudad",
    available: true
  },
  {
    id: 3,
    name: "Burger Master",
    category: "Americana",
    rating: 4.6,
    deliveryTime: "20-30 min",
    deliveryFee: 1500,
    minOrder: 6000,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
    description: "Hamburguesas gourmet y papas crujientes",
    available: true
  },
  {
    id: 4,
    name: "Veggie Delight",
    category: "Vegana",
    rating: 4.7,
    deliveryTime: "35-45 min",
    deliveryFee: 2000,
    minOrder: 7000,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500",
    description: "Comida 100% vegetal, saludable y deliciosa",
    available: true
  },
  {
    id: 5,
    name: "Tacos El Mexicano",
    category: "Mexicana",
    rating: 4.5,
    deliveryTime: "25-35 min",
    deliveryFee: 1800,
    minOrder: 5000,
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500",
    description: "Los tacos más auténticos fuera de México",
    available: true
  },
  {
    id: 6,
    name: "China Wok",
    category: "China",
    rating: 4.4,
    deliveryTime: "30-40 min",
    deliveryFee: 2000,
    minOrder: 8000,
    image: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=500",
    description: "Comida china tradicional con sabores intensos",
    available: false
  },
  {
    id: 7,
    name: "SuperFresh",
    category: "Supermercado",
    rating: 4.6,
    deliveryTime: "45-60 min",
    deliveryFee: 2500,
    minOrder: 15000,
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=500",
    description: "Frutas, verduras, carnes y todo para tu hogar",
    available: true
  },
  {
    id: 8,
    name: "Market Express",
    category: "Supermercado",
    rating: 4.5,
    deliveryTime: "40-55 min",
    deliveryFee: 3000,
    minOrder: 12000,
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=500",
    description: "Supermercado completo con productos frescos",
    available: true
  },
  {
    id: 9,
    name: "Farmacias Salud+",
    category: "Farmacia",
    rating: 4.7,
    deliveryTime: "30-40 min",
    deliveryFee: 1500,
    minOrder: 5000,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500",
    description: "Medicamentos genéricos y productos de higiene",
    available: true
  },
  {
    id: 10,
    name: "FarmExpress",
    category: "Farmacia",
    rating: 4.8,
    deliveryTime: "25-35 min",
    deliveryFee: 2000,
    minOrder: 4000,
    image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?w=500",
    description: "Tu salud y bienestar a domicilio",
    available: true
  }
];

// ========== DATOS DE PRODUCTOS ==========
var products = {
  1: [
    {
      id: 101,
      restaurantId: 1,
      name: "Pizza Margherita",
      description: "Tomate, mozzarella fresca, albahaca y aceite de oliva",
      price: 9500,
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400",
      category: "Pizzas",
      available: true
    },
    {
      id: 102,
      restaurantId: 1,
      name: "Pizza Pepperoni",
      description: "Salsa de tomate, mozzarella y abundante pepperoni",
      price: 11500,
      image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400",
      category: "Pizzas",
      available: true
    },
    {
      id: 103,
      restaurantId: 1,
      name: "Lasaña Clásica",
      description: "Capas de pasta con carne, bechamel y queso gratinado",
      price: 10500,
      image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400",
      category: "Pastas",
      available: false
    },
    {
      id: 104,
      restaurantId: 1,
      name: "Tiramisu",
      description: "Postre italiano con café, mascarpone y cacao",
      price: 4500,
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400",
      category: "Postres",
      available: true
    }
  ],
  2: [
    {
      id: 201,
      restaurantId: 2,
      name: "Roll Philadelphia",
      description: "Salmón, queso crema y palta",
      price: 8500,
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400",
      category: "Rolls",
      available: true
    },
    {
      id: 202,
      restaurantId: 2,
      name: "Roll California",
      description: "Surimi, palta, pepino y sésamo",
      price: 7500,
      image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400",
      category: "Rolls",
      available: true
    },
    {
      id: 203,
      restaurantId: 2,
      name: "Sashimi Mix",
      description: "Selección de pescados frescos en láminas",
      price: 12500,
      image: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=400",
      category: "Sashimi",
      available: true
    }
  ],
  3: [
    {
      id: 301,
      restaurantId: 3,
      name: "Classic Burger",
      description: "Carne 180g, lechuga, tomate, cebolla, queso cheddar",
      price: 7500,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
      category: "Hamburguesas",
      available: true
    },
    {
      id: 302,
      restaurantId: 3,
      name: "Bacon Cheese Burger",
      description: "Doble carne, bacon crujiente, doble queso",
      price: 9500,
      image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400",
      category: "Hamburguesas",
      available: true
    },
    {
      id: 303,
      restaurantId: 3,
      name: "Papas Fritas",
      description: "Papas crujientes con sal marina",
      price: 3500,
      image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=400",
      category: "Acompañamientos",
      available: true
    }
  ],
  7: [
    {
      id: 701,
      restaurantId: 7,
      name: "Manzanas Rojas",
      description: "1 kilo de manzanas frescas",
      price: 2500,
      image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400",
      category: "Frutas",
      available: true
    },
    {
      id: 702,
      restaurantId: 7,
      name: "Leche Entera",
      description: "Caja de 1 litro",
      price: 1200,
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400",
      category: "Lácteos",
      available: true
    },
    {
      id: 703,
      restaurantId: 7,
      name: "Pan Integral",
      description: "Paquete 500g",
      price: 1800,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400",
      category: "Panadería",
      available: true
    }
  ],
  8: [
    {
      id: 801,
      restaurantId: 8,
      name: "Pollo Entero",
      description: "Aprox. 1.5 kg",
      price: 5500,
      image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400",
      category: "Carnes",
      available: true
    },
    {
      id: 802,
      restaurantId: 8,
      name: "Tomates",
      description: "1 kilo",
      price: 1500,
      image: "https://images.unsplash.com/photo-1546470427-227c6b32f6e7?w=400",
      category: "Verduras",
      available: true
    }
  ],
  9: [
    {
      id: 901,
      restaurantId: 9,
      name: "Paracetamol 500mg",
      description: "Caja 20 tabletas - Sin receta",
      price: 2500,
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400",
      category: "Medicamentos",
      available: true
    },
    {
      id: 902,
      restaurantId: 9,
      name: "Alcohol Gel",
      description: "Frasco 250ml",
      price: 3500,
      image: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?w=400",
      category: "Higiene",
      available: true
    },
    {
      id: 903,
      restaurantId: 9,
      name: "Shampoo Anticaspa",
      description: "Botella 400ml",
      price: 5500,
      image: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=400",
      category: "Cuidado Personal",
      available: true
    }
  ],
  10: [
    {
      id: 1001,
      restaurantId: 10,
      name: "Ibuprofeno 400mg",
      description: "Caja 10 tabletas - Sin receta",
      price: 3000,
      image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400",
      category: "Medicamentos",
      available: true
    },
    {
      id: 1002,
      restaurantId: 10,
      name: "Pasta Dental",
      description: "Tubo 100ml",
      price: 2200,
      image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400",
      category: "Higiene",
      available: true
    }
  ]
};

// ========== CATEGORÍAS ==========
var categories = [
  { id: 1, name: "Italiana", icon: "🍕" },
  { id: 2, name: "Japonesa", icon: "🍱" },
  { id: 3, name: "Americana", icon: "🍔" },
  { id: 4, name: "Vegana", icon: "🥗" },
  { id: 5, name: "Mexicana", icon: "🌮" },
  { id: 6, name: "China", icon: "🥡" }
];

// ========== CATEGORÍAS DE RESTAURANTES ==========
var restaurantCategories = [
  { id: 1, name: "Italiana", icon: "🍕" },
  { id: 2, name: "Japonesa", icon: "🍱" },
  { id: 3, name: "Americana", icon: "🍔" },
  { id: 4, name: "Vegana", icon: "🥗" },
  { id: 5, name: "Mexicana", icon: "🌮" },
  { id: 6, name: "China", icon: "🥡" }
];

// ========== CATEGORÍAS DE SUPERMERCADOS ==========
var supermarketCategories = [
  { id: 1, name: "Frutas", icon: "🍎" },
  { id: 2, name: "Verduras", icon: "🥬" },
  { id: 3, name: "Lácteos", icon: "🥛" },
  { id: 4, name: "Carnes", icon: "🍖" },
  { id: 5, name: "Panadería", icon: "🍞" }
];

// ========== CATEGORÍAS DE FARMACIAS ==========
var pharmacyCategories = [
  { id: 1, name: "Medicamentos", icon: "💊" },
  { id: 2, name: "Higiene", icon: "🧴" },
  { id: 3, name: "Cuidado Personal", icon: "🧼" }
];