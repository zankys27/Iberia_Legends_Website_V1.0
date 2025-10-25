
INSTRUCCIONES PASO A PASO (MUY SIMPLE) - reemplazar todo en GitHub y desplegar
---
1) Descarga este ZIP y descomprímelo en tu ordenador.
2) Abre tu repositorio en GitHub: https://github.com/zankys27/Iberia_Legends_Website_V1.0
3) En la página del repositorio haz clic en 'Add file' -> 'Upload files'.
4) Arrastra **todo el contenido** de la carpeta descomprimida (todos los archivos y carpetas) a la zona de subida.
   - Si GitHub te pregunta sobre archivos existentes, selecciona **Replace** o acepta subir (esto actualizará los archivos).
5) Baja y en 'Commit changes' escribe un mensaje (por ejemplo 'Sustituir por plantilla completa') y haz clic en 'Commit changes'.
6) GitHub ahora tendrá la versión completa. Vercel detectará el cambio y hará un nuevo despliegue automáticamente.
7) Si el despliegue falla, entra a Vercel Dashboard -> tu proyecto -> 'Deployments' -> haz clic en el último despliegue y revisa los 'Build Logs'.
   - Si hay errores de CSS: abre `src/index.css` en GitHub y asegúrate que contiene 3 líneas EXACTAS:
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
8) Para desarrollarlo localmente, haz:
   npm install
   npm run dev
   y abre http://localhost:5173
