import devtoolsJson from 'vite-plugin-devtools-json';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [tailwindcss(), sveltekit(), devtoolsJson()],
    server: {
        host: '0.0.0.0',
        port: 5000,
        strictPort: true,
        allowedHosts: true
    }
});
