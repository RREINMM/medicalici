
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Set base path to '/' for root deployment or to subdirectory if needed
  base: '/',
  // Configure build options for optimal production deployment
  build: {
    outDir: 'dist',
    minify: 'terser',
    sourcemap: false,
    // Split chunks for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // Fix: Reference specific UI components instead of the whole directory
          ui: [
            '@/components/ui/button',
            '@/components/ui/card',
            '@/components/ui/input',
            '@/components/ui/textarea',
            '@/components/ui/toast',
            '@/components/ui/toaster',
            '@/components/ui/sonner'
          ]
        }
      }
    }
  },
}));
