import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {
      FIREBASE_API_KEY: "AIzaSyD_jvOXpxYVZtU_TvF1dRZXXXXXXXXXXXX",
      FIREBASE_AUTH_DOMAIN: "novel-app.firebaseapp.com",
      FIREBASE_PROJECT_ID: "novel-app",
      FIREBASE_STORAGE_BUCKET: "novel-app.appspot.com",
      FIREBASE_MESSAGING_SENDER_ID: "123456789012",
      FIREBASE_APP_ID: "1:123456789012:web:abcdef1234567890",
      FIREBASE_MEASUREMENT_ID: "G-XXXXXXXXXX"
    }
  }
})