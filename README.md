# Backend Labit

repositorio backend de labit

este repositorio contiene el backend de labit

Se usa sequelize para definir las bases de datos

El tipo de base de datos usado es `MySQL`

## API

### /users

La ruta cuenta con el CRUD completo

1. **GET**: al hacer una peticion de tipo get, se puede proveer un numero de identificación por medio de query string, por lo cual traerá al usuario que coincida con el criterio de busqueda. De lo contrario, al no proveer un número de identificación, esta ruta obtendrá todos los usuarios disponibles en la base de datos

    - **Ejemplo:** `localhost:3001/users?id=12345678`

2. **POST**: Al hacer una petición de tipo post a la ruta /users deberá proveer los siguientes datos en el body de la petición: (los campos no requeridos están marcados como opcionales, los demás son obligatorios)

```javascript
{
  "first_name": "camilo",
  "last_name": "andres",
  "birth": "1997-11-11",
  "email": "correo@correo.com",
  "password": "contraseña123",
  "identification_number": 34567890,
  "tel": 312345627, // opcional
  "affiliate_number": 123234 //opcional
}
```
