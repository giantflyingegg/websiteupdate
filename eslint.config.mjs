import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      'react/no-unescaped-entities': 'off',
      '@typescript-eslint/no-unused-vars': 'warn', // Downgrade from error to warning
      'react-hooks/exhaustive-deps': 'warn', // Make dependency warnings just warnings
      '@typescript-eslint/prefer-as-const': 'warn', // Downgrade const assertions
    },
  },
];

export default eslintConfig;