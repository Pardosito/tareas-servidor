# tarea 1 - api noticias

## Descripción
API para consultar noticias usando NewsAPI, desarrollada con Express y TypeScript.

## Tecnologías
- axios: librería para manejar peticiones HTTP
- nodemon: reinicio automático del servidor ante cambios
- dotenv: manejo de variables de entorno
- express: servidor web minimalista
- typescript: tipado estático para JavaScript

## Requisitos previos
- Node.js >= 18
- npm >= 9

## Instalación
```sh
npm install
```

## Configuración
Crea un archivo `.env` en la raíz del proyecto y agrega tu API key de NewsAPI:
```
NEWS_API_KEY=tu_api_key_aqui
```

## Comandos
- `npm run dev`: Ejecuta el servidor en modo desarrollo en el puerto 3000.

## Estructura del proyecto
- `src/`: Código fuente
  - `app/`: Rutas y controladores

## Uso
Haz peticiones HTTP a los endpoints definidos en el servidor (ejemplo: `/news`, `/topheadlines`, `/sources`).