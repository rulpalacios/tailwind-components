/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'warm-gray-light': '#FAF9F7',
        'main-text': '#2B2B2B',
        'gray-text': '#484848',
		'lila': '#E4DAF1',
		'lila-200': '#5B3E80',
		'gold-100': '#FCF9F4',
			}
		},
	},
	plugins: [],
}
