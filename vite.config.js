import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import jsconfigPaths from "vite-jsconfig-paths";
import path from "path";

export default defineConfig({
 plugins: [jsconfigPaths(), react()],
 base: "./",
 define: {
  APP_VERSION: JSON.stringify(process.env.npm_package_version),
 },
 server: {
  proxy: {
   "/api": {
    target: "/api",
    changeOrigin: true,
    secure: false,
   },
  },
 },
 resolve: {
  mainFields: [],
  alias: [
    { find: '@', replacement: path.resolve(__dirname, 'src') },
  ],
 },
});
