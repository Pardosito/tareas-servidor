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

## Endpoints y parámetros

### 1. `/news`
Obtiene noticias según los parámetros de búsqueda.

**Parámetros disponibles (query):**
- `q`: Palabra clave para buscar noticias (ejemplo: `q=tecnología`)
- `from`: Fecha de inicio (formato `YYYY-MM-DD`)
- `to`: Fecha de fin (formato `YYYY-MM-DD`)
- `language`: Idioma de las noticias (ejemplo: `language=es`)
- `sortBy`: Ordenar por (`relevancy`, `popularity`, `publishedAt`)

**Ejemplo de uso:**
```
GET http://localhost:3000/news?q=deportes&language=es
```

---

### 2. `/topheadlines`
Obtiene los titulares principales.

**Parámetros disponibles (query):**
- `country`: País de origen de las noticias (ejemplo: `country=mx`)
- `category`: Categoría de noticias (`business`, `entertainment`, `health`, etc.)
- `q`: Palabra clave

**Ejemplo de uso:**
```
GET http://localhost:3000/topheadlines?country=mx&category=technology
```

---

### 3. `/sources`
Obtiene las fuentes de noticias disponibles.

**Parámetros disponibles (query):**
- `category`: Categoría de la fuente
- `language`: Idioma de la fuente
- `country`: País de la fuente

**Ejemplo de uso:**
```
GET http://localhost:3000/sources?language=en&country=us
```

---

### Notas
- Todos los endpoints requieren que el API key esté configurado en el archivo `.env`.
- Los parámetros son opcionales, pero puedes combinarlos para filtrar resultados.
