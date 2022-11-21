# Middleware de nivel de aplicación

Para enlazar el *middleware* de nivel de aplicación a una instancia del objeto de aplicación se utilizan las funciones `app.use()` y `app.METHOD()`, donde **METHOD** es el método **HTTP** de la solicitud que maneja la función de middleware (por ejemplo, **GET**, **PUT** o **POST**) en minúsculas.