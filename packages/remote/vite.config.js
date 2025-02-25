import { defineConfig, moduleFederationPlugin } from 'vite'

export default defineConfig({
    preview: {
        port: 5176,
    },
    // Make sure the vite preload assets correct
    base: 'http://localhost:5176/',
    build: {
        minify: false,
        rollupOptions: {
            plugins: [
                moduleFederationPlugin({
                    name: 'remote',
                    filename: 'remoteEntry.js',
                    exposes: {
                        './button': './src/button.jsx',
                    },
                    shared: {
                        react: {
                            singleton: true,
                        },
                    },
                    manifest: true,
                    getPublicPath: 'http://localhost:5176/',
                })
            ]
        },
    }
})