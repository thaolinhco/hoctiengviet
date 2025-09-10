// JSONC plugin for linting JSON files
import jsonc from "eslint-plugin-jsonc";
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";

export default tseslint.config([
    // JSON files linting
    {
        files: ["**/*.json"],
        plugins: {
            jsonc: jsonc,
        },
        languageOptions: {
            parser: jsonc.parsers.json,
        },
        rules: {
            "jsonc/indent": ["error", 4],
        },
    },
    globalIgnores(['dist']),
    {
        files: ['**/*.{ts,tsx}'],
        plugins: {
            import: require("eslint-plugin-import"),
        },
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs['recommended-latest'],
            reactRefresh.configs.vite,
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        rules: {
            quotes: ["error", "double", { "avoidEscape": true, "allowTemplateLiterals": true }],
            indent: ["error", 4, { "SwitchCase": 1, "ignoredNodes": ["TemplateLiteral *"] }],
            semi: ["error", "always"],
            "no-unused-vars": "error",
            eqeqeq: ["error", "always"],
            "no-console": ["warn", { allow: ["warn", "error"] }],
            curly: ["error", "all"],
            "comma-dangle": ["error", "always-multiline"],
            "object-curly-spacing": ["error", "always"],
            "array-bracket-spacing": ["error", "never"],
            "no-multiple-empty-lines": ["error", { max: 1 }],
            "import/order": ["error", {
                "groups": ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"],
                "newlines-between": "always",
                "alphabetize": { "order": "asc", "caseInsensitive": true }
            }],
            // React and hooks rules are included via extends, but can be customized here if needed
            // TypeScript rules can be added if you want stricter typing
        },
    },
    {
        files: ['**/*.{js,json}'],
        rules: {
            indent: ["error", 4],
        },
    },
]);
