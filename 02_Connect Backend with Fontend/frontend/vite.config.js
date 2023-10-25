import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // adding proxy 
  /*
  In a React.js application, you can use a proxy to route API requests from your front-end 
  application to your back-end server during development. This is especially useful when your 
  back-end and front-end are hosted on different ports or domains. It allows you to avoid issues
  with CORS (Cross-Origin Resource Sharing) during development.

  Remember to remove or adjust the proxy configuration for production, as it's only 
  intended for development. In production, the React app and back-end server should typically 
  reside under the same domain or use appropriate CORS headers to allow requests from different domains.

  */

  server: {
    proxy:{
      '/api' : "http://localhost:4000",
    }
  },

  plugins: [react()],
})
