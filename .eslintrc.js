module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ['plugin:vue/essential', '@vue/prettier'],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'prettier/semi': true,
		'prettier/printWidth': 100,
		'prettier/useTabs': true,
		'prettier/singleQuote': true,
		'prettier/trailingComma': 'es5',
		'prettier/bracketSpacing': true,
		'prettier/arrowParens': 'avoid',
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
};
