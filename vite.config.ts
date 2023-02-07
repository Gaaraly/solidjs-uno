import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    solidPlugin(),
    Unocss(),
    AutoImport({
      include: [
        /\.[tj]sx?$/,
      ],
      imports: [
        'solid-js',
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: [
        'src/composables',
        'src/stores',
      ],
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
})
