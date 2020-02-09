module.exports = {
    "settings": {
        "react": {
            "createClass": "createReactClass",
            "pragma": "React",
            "version": "detect",
            "flowVersion": "0.53"
        },
        "propWrapperFunctions": [
            "forbidExtraProps",
            {"property": "freeze", "object": "Object"},
            {"property": "myFavoriteWrapper"}
        ],
        "linkComponents": [
        "Hyperlink",
            {"name": "Link", "linkAttribute": "to"}
        ]
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "ecmaFeatures": {
          "jsx": true
        },
        project: "./tsconfig.json"
    },
    plugins: [
        "@typescript-eslint",
        "react"
    ],
    rules: {
        "@typescript-eslint/no-unnecessary-type-assertion": 2,
        "@typescript-eslint/member-delimiter-style": [
            2,
            {
                multiline: {
                    delimiter: 'none',
                    requireLast: false,
                },
                singleline: {
                    delimiter: 'semi',
                    requireLast: false,
                }
            }
        ]
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:react/recommended",
        "plugin:prettier/recommended"
    ]
}

