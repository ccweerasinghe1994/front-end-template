/** @type {import("tailwindcss").Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				primary: ['Bungee Spice'],
				secondary: ['Open Sans'],
			},
		},
	},
	plugins: [],
};
