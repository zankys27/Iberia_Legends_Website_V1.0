# Iberia Legends Website

Sitio web oficial de **Iberia Legends**, liga amateur de League of Legends.

## 🚀 Cómo ejecutar

1. Asegúrate de tener **Node.js** (versión 18 o superior).
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Ejecuta el servidor local:
   ```bash
   npm run dev
   ```
4. Abre en tu navegador: `http://localhost:5173`

## 📦 Cómo desplegar en Vercel o Netlify
- Sube esta carpeta a un repositorio de GitHub.
- En **Vercel**, importa el proyecto y listo (detecta Vite automáticamente).
- En **Netlify**, selecciona el proyecto, build command: `npm run build`, publish dir: `dist`.

## 🧩 Actualización manual
Edita las variables en `src/App.jsx` para modificar:
- Clasificación
- Calendario
- MVPs
- Noticias

El logo (`public/logo.png`) se usa también como favicon.
