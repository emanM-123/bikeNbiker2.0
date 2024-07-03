// vite.config.js
import { defineConfig } from "file:///C:/Users/Eman/Desktop/work-space/bikenbiker2-0/node_modules/vite/dist/node/index.js";
import { hydrogen } from "file:///C:/Users/Eman/Desktop/work-space/bikenbiker2-0/node_modules/@shopify/hydrogen/dist/vite/plugin.js";
import { oxygen } from "file:///C:/Users/Eman/Desktop/work-space/bikenbiker2-0/node_modules/@shopify/mini-oxygen/dist/vite/plugin.js";
import { vitePlugin as remix } from "file:///C:/Users/Eman/Desktop/work-space/bikenbiker2-0/node_modules/@remix-run/dev/dist/index.js";
import tsconfigPaths from "file:///C:/Users/Eman/Desktop/work-space/bikenbiker2-0/node_modules/vite-tsconfig-paths/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    hydrogen(),
    oxygen(),
    remix({
      presets: [hydrogen.preset()],
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true
      }
    }),
    tsconfigPaths()
  ],
  build: {
    // Allow a strict Content-Security-Policy
    // without inlining assets as base64:
    assetsInlineLimit: 0
  },
  ssr: {
    optimizeDeps: {
      /**
       * Include dependencies here if they throw CJS<>ESM errors.
       * For example, for the following error:
       *
       * > ReferenceError: exports is not defined
       * >   at /Users/.../node_modules/example-dep/index.js:1:1
       *
       * Include 'example-dep' in the array below.
       * @see https://vitejs.dev/config/dep-optimization-options
       */
      include: ["react-fast-marquee"]
      // Add problematic modules here
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxFbWFuXFxcXERlc2t0b3BcXFxcd29yay1zcGFjZVxcXFxiaWtlbmJpa2VyMi0wXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxFbWFuXFxcXERlc2t0b3BcXFxcd29yay1zcGFjZVxcXFxiaWtlbmJpa2VyMi0wXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9FbWFuL0Rlc2t0b3Avd29yay1zcGFjZS9iaWtlbmJpa2VyMi0wL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgeyBoeWRyb2dlbiB9IGZyb20gJ0BzaG9waWZ5L2h5ZHJvZ2VuL3ZpdGUnO1xuaW1wb3J0IHsgb3h5Z2VuIH0gZnJvbSAnQHNob3BpZnkvbWluaS1veHlnZW4vdml0ZSc7XG5pbXBvcnQgeyB2aXRlUGx1Z2luIGFzIHJlbWl4IH0gZnJvbSAnQHJlbWl4LXJ1bi9kZXYnO1xuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSAndml0ZS10c2NvbmZpZy1wYXRocyc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICBoeWRyb2dlbigpLFxuICAgIG94eWdlbigpLFxuICAgIHJlbWl4KHtcbiAgICAgIHByZXNldHM6IFtoeWRyb2dlbi5wcmVzZXQoKV0sXG4gICAgICBmdXR1cmU6IHtcbiAgICAgICAgdjNfZmV0Y2hlclBlcnNpc3Q6IHRydWUsXG4gICAgICAgIHYzX3JlbGF0aXZlU3BsYXRQYXRoOiB0cnVlLFxuICAgICAgICB2M190aHJvd0Fib3J0UmVhc29uOiB0cnVlLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICB0c2NvbmZpZ1BhdGhzKCksXG4gIF0sXG4gIGJ1aWxkOiB7XG4gICAgLy8gQWxsb3cgYSBzdHJpY3QgQ29udGVudC1TZWN1cml0eS1Qb2xpY3lcbiAgICAvLyB3aXRob3V0IGlubGluaW5nIGFzc2V0cyBhcyBiYXNlNjQ6XG4gICAgYXNzZXRzSW5saW5lTGltaXQ6IDAsXG4gIH0sXG4gIHNzcjoge1xuICAgIG9wdGltaXplRGVwczoge1xuICAgICAgLyoqXG4gICAgICAgKiBJbmNsdWRlIGRlcGVuZGVuY2llcyBoZXJlIGlmIHRoZXkgdGhyb3cgQ0pTPD5FU00gZXJyb3JzLlxuICAgICAgICogRm9yIGV4YW1wbGUsIGZvciB0aGUgZm9sbG93aW5nIGVycm9yOlxuICAgICAgICpcbiAgICAgICAqID4gUmVmZXJlbmNlRXJyb3I6IGV4cG9ydHMgaXMgbm90IGRlZmluZWRcbiAgICAgICAqID4gICBhdCAvVXNlcnMvLi4uL25vZGVfbW9kdWxlcy9leGFtcGxlLWRlcC9pbmRleC5qczoxOjFcbiAgICAgICAqXG4gICAgICAgKiBJbmNsdWRlICdleGFtcGxlLWRlcCcgaW4gdGhlIGFycmF5IGJlbG93LlxuICAgICAgICogQHNlZSBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL2RlcC1vcHRpbWl6YXRpb24tb3B0aW9uc1xuICAgICAgICovXG4gICAgICBpbmNsdWRlOiBbJ3JlYWN0LWZhc3QtbWFycXVlZSddLCAvLyBBZGQgcHJvYmxlbWF0aWMgbW9kdWxlcyBoZXJlXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF3VSxTQUFTLG9CQUFvQjtBQUNyVyxTQUFTLGdCQUFnQjtBQUN6QixTQUFTLGNBQWM7QUFDdkIsU0FBUyxjQUFjLGFBQWE7QUFDcEMsT0FBTyxtQkFBbUI7QUFFMUIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsU0FBUztBQUFBLElBQ1QsT0FBTztBQUFBLElBQ1AsTUFBTTtBQUFBLE1BQ0osU0FBUyxDQUFDLFNBQVMsT0FBTyxDQUFDO0FBQUEsTUFDM0IsUUFBUTtBQUFBLFFBQ04sbUJBQW1CO0FBQUEsUUFDbkIsc0JBQXNCO0FBQUEsUUFDdEIscUJBQXFCO0FBQUEsTUFDdkI7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELGNBQWM7QUFBQSxFQUNoQjtBQUFBLEVBQ0EsT0FBTztBQUFBO0FBQUE7QUFBQSxJQUdMLG1CQUFtQjtBQUFBLEVBQ3JCO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxjQUFjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVdaLFNBQVMsQ0FBQyxvQkFBb0I7QUFBQTtBQUFBLElBQ2hDO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
