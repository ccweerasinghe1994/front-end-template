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