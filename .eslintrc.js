module.exports = {
	env: {
		browser: true,
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module'
	},
	plugins: [
		'@typescript-eslint'
	],
	rules: {
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-namespace': 'off',
		'no-mixed-spaces-and-tabs': 'off',
		indent: ['error', 'tab'],
		quotes: ['error', 'single'],
		semi: ['error', 'never']
	}
}
