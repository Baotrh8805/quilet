import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import json from "@eslint/json";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: [".nuxt/**", "node_modules/**"]
  },
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: { ...globals.browser, defineNuxtConfig: "readonly" } } },
  { 
    files: ["**/*.{ts,mts,cts,tsx}"], 
    rules: tseslint.configs.recommended.map(config => config.rules || {})[0] || {} 
  },
  {
    files: ["**/*.vue"],
    plugins: { vue: pluginVue },
    rules: {
      "vue/multi-word-component-names": "off"
    }
  },
  { files: ["**/*.json"], plugins: { json }, language: "json/json", extends: ["json/recommended"] },
  { files: ["**/*.css"], plugins: { css }, language: "css/css", extends: ["css/recommended"] },
]);
