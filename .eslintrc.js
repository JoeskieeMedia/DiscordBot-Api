module.exports = {
	env: {
		commonjs: true,
		es2021: true,
		node: true,
	},
	extends: 'eslint:recommended',
	parserOptions: {
		ecmaVersion: 'latest', 
	},
	rules: {
		'array-bracket-spacing': [ 'error', 'always', {
			'arraysInArrays': true,
			'objectsInArrays': true, 
		} ],
		'arrow-spacing': [ 'error', {
			'after': true,
			'before': true, 
		} ],
		'comma-dangle': [ 'error', {
			'arrays': 'never',
			'exports': 'never',
			'functions': 'never',
			'imports': 'never',
			'objects': 'always',
		} ],
		'comma-spacing': [ 'error', {
			'after': true,
			'before': false, 
		} ],
		'computed-property-spacing': [ 'error', 'always' ],
		'indent': [ 'error', 'tab' ],
		'key-spacing': [ 'error', {
			'afterColon': true, 
		} ],
		'linebreak-style': [ 'error', 'windows' ],
		'max-len': [ 'error', {
			'code': 70, 
		} ],
		'multiline-comment-style': [ 'error', 'starred-block' ],
		'no-multi-spaces': [ 'error' ],
		'no-undefined': [ 'error' ],
		'object-curly-newline': [ 'error', {
			'ExportDeclaration': {
				'consistent': true,
				'minProperties': 1,
				'multiline': true,  
			},
			'ImportDeclaration': {
				'consistent': true,
				'minProperties': 1,
				'multiline': true,  
			},
			'ObjectExpression': {
				'minProperties': 1,
				'multiline': true, 
			},
			'ObjectPattern': {
				'consistent': true,
				'minProperties': 1,
				'multiline': true, 
			},

		} ],
		'object-curly-spacing': [ 'error', 'always' ],
		'object-property-newline': 'error',
		'quotes': [ 'error', 'single' ],
		'semi': [ 'error', 'always' ],
		'sort-keys': [ 'error' ],
		'space-in-parens': [ 'error', 'always' ],
		'spaced-comment': [ 'error', 'always' ],
		'template-tag-spacing': [ 'error', 'always' ],
	},
};
