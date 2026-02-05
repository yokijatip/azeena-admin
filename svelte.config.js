import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit:{ adapter: adapter(), alias: { "@/*": "./path/to/lib/*", } }
};

export default config;
