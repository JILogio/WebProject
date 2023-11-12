# Administración MVC
## Modelo de login y gestión de usuarios

### Modelo de ingeniería

![](https://raw.githubusercontent.com/JILogio/WebProject/main/resources/asd.png)



- Back-end: el sistema donde el usuario interactúa desde el navegador para procesar la solicud, en este caso para el login enviando las credenciales
- User: front-end del sistema donde se presenta al usuario que ingrese los datos para realizar una solicitud APIRest y validar las credenciales
- Framework: NodeJS para el consumo de APIRest y solicitudes, VueJS para el front-end con CSS para el diseño de formulario de registro y login

### Sistema de autenticación con token JWT
![](https://miro.medium.com/v2/resize:fit:1100/format:webp/1*u3a-5xZDeudKrFGcxHzLew.png)
JWT es un sistema de autenticación mediante tokens, funciona cuando el usuario manda sus credenciales al servidor o back-end en el cual verifica los datos den la base de datos y si es correcta, envía a la página web un token generado de forma temporal para ese usuario y lo guarda.

Los JWT consisten en tres partes separadas por puntos (.), que son:
- Header - Contiene el tipo de token (JWT) y el algoritmo de firma usado (como HMAC SHA256 o RSA).
- Payload - Contiene los claims o declaraciones. Claims son declaraciones sobre una entidad (como el usuario) y metadatos adicionales. Hay tres tipos de claims: registered, public, and private claims.
- Signature - Para crear la firma, se toma el header codificado en base64, el payload codificado en base64, un secreto, el algoritmo especificado en el header y se firma el header y el payload.

Para usar JWT:
- El servidor crea un JWT firmado y lo devuelve al cliente.
- El cliente almacena el JWT y lo envía de vuelta en la cabecera Authorization en futuras solicitudes.
- El servidor valida el JWT en cada solicitud verificando la firma y claims.
