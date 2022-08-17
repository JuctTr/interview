module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        // 'plugin:react/recommended',
        // 'plugin:@typescript-eslint/recommended',
        // 添加`prettier`拓展 用于和`prettier`冲突时覆盖`eslint`规则
        'prettier',
    ],
    // parser: '@typescript-eslint/parser',
    // parserOptions: {
    //     ecmaFeatures: {
    //         jsx: true,
    //     },
    //     ecmaVersion: 'latest',
    //     sourceType: 'module',
    // },
    // plugins: ['react', '@typescript-eslint'],
    // rules: {
    //     '@typescript-eslint/no-var-requires': 0, // typescript-eslint 默认不允许使用require，不利于静态编译
    //     '@typescript-eslint/no-explicit-any': 0,
    // },
    // settings: {
    //     react: {
    //         version: 'detect',
    //     },
    // },
};
