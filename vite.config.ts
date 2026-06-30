import { defineConfig, type PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig(async ({ command }) => {
  const plugins: PluginOption[] = [react(), tailwindcss()]

  if (command === 'build') {
    try {
      const { ViteImageOptimizer } = await import('vite-plugin-image-optimizer')
      plugins.push(
        ViteImageOptimizer({
          png: { quality: 80 },
          jpeg: { quality: 82 },
          jpg: { quality: 82 },
          webp: { quality: 82 },
        }),
      )
    } catch {
      console.warn(
        'vite-plugin-image-optimizer not installed; skipping image compression.',
      )
    }
  }

  return {
    plugins,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  }
})
