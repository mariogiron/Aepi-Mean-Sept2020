## Rutas

GET /productos - Recupera todos los productos
GET /productos/IDPRODUCTO - Recupera un único producto
GET /productos/new - Formulario con los datos para crear el producto
POST /productos/create - Genera un nuevo producto
GET /productos/edit/IDPRODUCTO - Formulario para editar un producto en concreto
POST /productos/update - Editar un producto
GET /productos/delete/IDPRODUCT - Borra un producto

GET /api/productos - Recuperar todos los productos
POST /api/productos - Crea un nuevo producto
PUT /api/productos - Actualiza un producto
DELETE /api/productos - Borra un producto

POST /api/usuarios/login - Recibe username y password y devuelve token si la autenticación es correcta
POST /api/usuarios/registro - Recibe los datos del usuario y cre uno nuevo


GET /api/pedidos - Recuperar todos los pedidos
POST /api/pedidos - Crea un nuevo producto
PUT /api/pedidos - Actualiza un producto
DELETE /api/pedidos - Borra un producto