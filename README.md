# creating the template

## step 1

```bash
npm create vite@latest
```

## step 2

adding eslint

```bash
npm init @eslint/config
```

answer the questions related to your app

after selecting the options you will get a file named `.eslintrc.cjs` in the root directory
and dependencies in `package.json` file

```json
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^6.5.0",
    "@typescript-eslint/parser": "^6.5.0",
    "eslint": "^8.45.0",
    "eslint-plugin-react": "^7.33.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.3",
  }
```

## step 3

remove unwanted files and folders

## step 4

add globals to the eslint config file

```js
 'globals': {
  'module': 'writable',

 }
```

adding this will remove the error `module is not defined` in the config file

## step 5

add react hooks to the eslint config file

```js
    {
      'extends': ['plugin:react-hooks/recommended'],
      }
```

## step 6

let's install these packages

```json
 "eslint-config-prettier": "^9.0.0",
    "eslint-plugin-import": "^2.28.1",
    "eslint-plugin-jsx-a11y": "^6.7.1",
    "eslint-plugin-prettier": "^5.0.0",
    "eslint-plugin-promise": "^6.1.1",
    "prettier": "^3.0.3",
```

```bash
npm i eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-promise prettier
```

let's ignore eslint config file from linting

create a file named `.eslintignore` and add the following

```js
.eslintrc.cjs
```

let's create a prettier config file `.prettierrc.json`

```json
{
    "singleQuote": true,
    "endOfLine": "lf",
    "semi": true,
    "useTabs": true,
    "bracketSpacing": true,
    "bracketSameLine": true,
    "arrowParens": "always"
}
```

and a ignore file `.prettierignore`

```json
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

let's add those plugins to eslint config file

```cjs
module.exports = {
 env: {
  browser: true,
  es2021: true,
 },
 extends: [
  'eslint:recommended',
  'plugin:react/recommended',
  'plugin:@typescript-eslint/recommended-type-checked',
  'plugin:react-hooks/recommended',
  'plugin:jsx-a11y/recommended',
  'plugin:import/recommended',
  'plugin:promise/recommended',
  'plugin:react/jsx-runtime',
 ],
 overrides: [],
 parser: '@typescript-eslint/parser',
 parserOptions: {
  ecmaVersion: 'latest',
  sourceType: 'module',
  project: true,
  tsconfigRootDir: __dirname,
 },
 plugins: ['react', '@typescript-eslint', 'prettier'],
 rules: {
  indent: ['error', 'tab'],
  'linebreak-style': ['error', 'unix'],
  quotes: ['error', 'single'],
  semi: ['error', 'always'],
  'prettier/prettier': 'error',
 },
 settings: {
  react: {
   version: '18.2.0',
  },
 },
 globals: {
  module: 'writable',
 },
};
```

## step 7

adding react-router

```bash
npm install react-router-dom
```

## step 8

adding redux

- [installation guide](https://redux-toolkit.js.org/introduction/getting-started)

- [typescript guide](https://redux-toolkit.js.org/tutorials/typescript)

## step 9

adding tailwindcss
follow this guide
[guide](https://tailwindcss.com/docs/guides/vite)
