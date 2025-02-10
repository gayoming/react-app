import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import { defineConfig } from "eslint-define-config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default defineConfig({
  extends: [
    "next/core-web-vitals", // Next.js 기본 규칙
    "eslint:recommended", // 기본 ESLint 추천 규칙
    "plugin:@typescript-eslint/recommended", // TypeScript 추천 규칙
    "plugin:prettier/recommended" // Prettier와 ESLint 충돌 방지
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module"
  },
  rules: {
    "@typescript-eslint/no-unused-vars": "warn", // 사용하지 않는 변수 경고
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        semi: true,
        singleQuote: false,
        tabWidth: 2
      }
    ]
  }
});