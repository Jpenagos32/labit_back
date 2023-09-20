# Backend Labit

repositorio backend de labit

-   Este repositorio contiene el backend de labit

-   Se usa sequelize para definir las bases de datos

-   El tipo de base de datos usado es `MySQL`

-   Para poder usar el proyecto en local se deben instalar dependencias usando el comando `npm install`

-   Debe proveerse un archivo `.env` en la raíz del proyecto para que este funcione, la estructura del `.env` debe ser como la siguiente.

```bash
DB_HOST=localhost
DB_PORT=3306
DB_USER=usuarioDB
DB_PASSWORD=passwordDB
DB_NAME=labit_db
PORT=3001
```
-   Recuerde que debe actualizar el archivo `.env` dependiendo de las credenciales de su `RDBMS`.
  
-   Para que el proyecto funcione correctamente, debe existir una base de datos llamada `labit_db`, esta se debe crear manualmente.

## ER 

<p align='center'>
  <img src='https://github.com/Jpenagos32/labit_back/assets/111212922/65d609a3-1656-4af9-a4c1-eb346dba543c'>
</p>

## API

### /users

La ruta cuenta con el `CRUD` completo

1. **GET**: al hacer una peticion de tipo get, se puede proveer un numero de identificación por medio de query string, por lo cual traerá al usuario que coincida con el criterio de busqueda. De lo contrario, al no proveer un número de identificación, esta ruta obtendrá todos los usuarios disponibles en la base de datos

    - **Ejemplo:** `localhost:3001/users?identification_number=12345678`

2. **POST**: Al hacer una petición de tipo post a la ruta /users deberá proveer los siguientes datos en el body de la petición: (los campos no requeridos están marcados como opcionales, los demás son obligatorios)

```javascript
{
  "identification_number": "1061804793",
  "first_name": "Camilo",
  "last_name": "Andres",
  "birth": "1998-11-11",
  "email": "correo@correo.com",
  "password": "12345",
  "tel": 3166055323, //opcional
  "affiliate_number": 123235, //opcional
  "gender_id": 1,
  "identification_types_id": 1,
  "coverage_type_id": 1,
  "user_types_id": 1
}
```
3. **PUT**: busca por `identification_number` el cual es un campo requerido y actualiza el registro que coincida con ese número de identificación

```javascript
{
  "identification_number": "12345678",
  "first_name": "Andres",
  "last_name": "Moreno",
  "birth": "1999-11-11",
  "email": "correo@correo.com",
  "password": "12345",
  "tel": 3166055323,
  "affiliate_number": 123235,
  "gender_id": 1,
  "identification_types_id": 1,
  "coverage_type_id": 1,
  "user_types_id": 1
}
```
4. **DELETE**: Se debe proveer el campo `identification_number` en el query string de la request, para que pueda eliminar el usuario

  - **Ejemplo**: 
    
    `localhost:3001/users?identification_number=12345678`

