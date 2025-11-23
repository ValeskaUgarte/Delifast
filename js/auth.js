// ========== SISTEMA DE AUTENTICACIÓN ==========

// Obtener usuario actual
function getCurrentUser() {
  const userJson = localStorage.getItem('delifastUser');
  return userJson ? JSON.parse(userJson) : null;
}

// Guardar usuario
function saveUser(userData) {
  localStorage.setItem('delifastUser', JSON.stringify(userData));
}

// Cerrar sesión
function logout() {
  localStorage.removeItem('delifastUser');
  window.location.href = 'index.html';
}

// Validar email
function isValidEmail(email) {
  return email.includes('@') && email.includes('.');
}

// Login
function handleLogin(email, password) {
  if (!email || !password) {
    return { success: false, message: 'Por favor, completa todos los campos' };
  }

  if (!isValidEmail(email)) {
    return { success: false, message: 'Por favor, ingresa un email válido' };
  }

  // Lista de repartidores disponibles
  var repartidores = [
    { nombre: 'San Tiago', imagen: 'img/repartidoresperando.jpg' },
    { nombre: 'Luck Skaywalker', imagen: 'img/repartidoraesperando.jpg' },
    { nombre: 'Soila Cerda', imagen: 'img/repartidoraesperando.jpg' },
    { nombre: 'Aqueles Baesa', imagen: 'img/repartidoraesperando.jpg' },
    { nombre: 'Kagasawa Taka Taka', imagen: 'img/repartidoraesperando.jpg' },
    { nombre: 'Elberga Larga', imagen: 'img/repartidoraesperando.jpg' }
  ];
  
  // Asignar repartidor aleatorio
  var repartidorAsignado = repartidores[Math.floor(Math.random() * repartidores.length)];

  // Simulación de login exitoso
  var userData = {
    id: Date.now(),
    name: email.split('@')[0],
    email: email,
    phone: '',
    address: '',
    totalOrders: 0,
    membershipLevel: 'Plebeyo',
    repartidor: repartidorAsignado
  };

  saveUser(userData);
  return { success: true, message: 'Login exitoso' };
}


// Registro
function handleRegister(formData) {
  if (!formData.name || !formData.email || !formData.password) {
    return { success: false, message: 'Por favor, completa los campos obligatorios' };
  }

  if (!isValidEmail(formData.email)) {
    return { success: false, message: 'Por favor, ingresa un email válido' };
  }

  if (formData.password.length < 6) {
    return { success: false, message: 'La contraseña debe tener al menos 6 caracteres' };
  }

  if (formData.password !== formData.confirmPassword) {
    return { success: false, message: 'Las contraseñas no coinciden' };
  }

  // Simulación de registro exitoso
  const userData = {
    id: Date.now(),
    name: formData.name,
    email: formData.email,
    phone: formData.phone || '',
    address: formData.address || '',
    totalOrders: 0
  };

  saveUser(userData);
  return { success: true, message: 'Registro exitoso' };
}

// Recuperar contraseña
function handleForgotPassword(email) {
  if (!email) {
    return { success: false, message: 'Por favor, ingresa tu email' };
  }

  if (!isValidEmail(email)) {
    return { success: false, message: 'Por favor, ingresa un email válido' };
  }

  // Simulación de envío de instrucciones
  return { success: true, message: 'Instrucciones enviadas a: ' + email };
}

// Actualizar perfil
function updateUserProfile(userData) {
  const currentUser = getCurrentUser();
  if (!currentUser) {
    return { success: false, message: 'Debes iniciar sesión' };
  }

  const updatedUser = {
    ...currentUser,
    ...userData
  };

  saveUser(updatedUser);
  return { success: true, message: 'Perfil actualizado' };
}

// Verificar si hay usuario logueado
function checkAuth() {
  const user = getCurrentUser();
  if (!user) {
    window.location.href = 'login.html';
  }
  return user;
}