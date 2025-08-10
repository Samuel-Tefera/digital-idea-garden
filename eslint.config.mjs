import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),

  {
    rules: {
      semi: "off",
      quotes: "off",
      "comma-dangle": "off",
      "object-curly-spacing": "off",
      "arrow-parens": "off",
    },
  },
];

export default eslintConfig;
