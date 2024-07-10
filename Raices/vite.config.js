import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import million from 'million/compiler';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    million.vite({ auto: true }),
    react()
  ],
  build: {
    outDir: 'dist', // Directorio de salida para los archivos construidos
    assetsDir: '', // Directorio para activos estáticos (opcional)
    manifest: true, // Generar un archivo manifest.json (opcional)
    rollupOptions: {
      // Configuración de Rollup, por ejemplo:
      input: {
        main: 'src/main.jsx' // Ruta al archivo principal de tu aplicación
      }
    }
  }
});
