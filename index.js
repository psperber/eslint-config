module.exports = {
    ignorePatterns: [
        "node_modules",
    ],
    extends: [
        "eslint:recommended",
        "plugin:import/errors",
    ],
    rules: {
        "indent": ["error", 4],
        "semi": [2, "always"],
        "quotes": ["error", "double"],
        "comma-dangle": ["error", {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "always-multiline",
            "exports": "always-multiline",
            "functions": "never",
        }],
        "import/order": ["error", {
            "newlines-between": "never",
            "alphabetize": { "order": "asc", "caseInsensitive": true },
        }],
        "object-curly-spacing": ["error", "always"],
    },
};