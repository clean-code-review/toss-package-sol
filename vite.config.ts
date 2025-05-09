import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import generouted from '@generouted/react-router/plugin';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), generouted()],
});
