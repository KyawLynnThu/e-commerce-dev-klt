module.exports = {
    '*.{js,jsx}': [
        "eslint --fix",
        "prettier --write",
        "git add"
    ],
};