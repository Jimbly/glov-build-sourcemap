
module.exports = {
  'env': {
    'es6': true,
    'node': true,
    // "browser": true, // Don't set this, it masks undefined variables named "status", etc
  },
  'globals': {
    // Just the super-common ones, don't mask undefined variables named "status", etc
    'window': true,
    'document': true,
    'Blob': true,
    'Image': true,
    'FileReader': true,
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'rules': {
    'accessor-pairs': 'error',
    'array-bracket-newline': ['error', 'consistent'], // JE
    'array-bracket-spacing': [
      'error',
      'never'
    ],
    'array-callback-return': 'error',
    'array-element-newline': 'off',
    'arrow-body-style': 'error',
    'arrow-parens': [
      'error',
      'always'
    ],
    'arrow-spacing': [
      'error',
      {
        'before': true,
        'after': true
      }
    ],
    'block-scoped-var': 'error',
    'block-spacing': 'error',
    'brace-style': [
      'error',
      '1tbs',
      {
        'allowSingleLine': false
      }
    ],
    'callback-return': 'off', // JE
    'camelcase': 'off',
    'capitalized-comments': 'off',
    'class-methods-use-this': 'error',
    'comma-dangle': [
      'error',
      'only-multiline'
    ],
    'comma-spacing': 'error',
    'comma-style': [
      'error',
      'last'
    ],
    'complexity': 'error',
    'computed-property-spacing': [
      'error',
      'never'
    ],
    'consistent-return': 'off', // JE
    'consistent-this': 'off', // JE
    'constructor-super': 'error',
    'curly': 'error',
    'default-case': 'error',
    'dot-location': [
      'error',
      'property'
    ],
    'dot-notation': 'error',
    'eol-last': 'error',
    'eqeqeq': [
      'error',
      'smart'
    ],
    'for-direction': 'error',
    'func-call-spacing': 'error',
    'func-name-matching': 'error',
    'func-names': 'off', // JE
    'func-style': [
      'error',
      'declaration',
      {
        'allowArrowFunctions': true
      }
    ],
    'function-paren-newline': 'off', // JE
    'generator-star-spacing': 'error',
    'global-require': 'error',
    'guard-for-in': 'off',
    'handle-callback-err': 'error',
    'id-blacklist': 'error',
    'id-length': 'off',
    'id-match': [
      'error',
      '^([a-z]+([A-Z][a-z]+))*|([a-z]([a-z_]*[a-z])?)$',
    ],
    'implicit-arrow-linebreak': [
      'error',
      'beside'
    ],
    'indent': [
      'error',
      2,
      {
        'ArrayExpression': 'first',
        'CallExpression': {
          'arguments': 1, // JE "first"
        },
        'FunctionDeclaration': {
          'parameters': 1, // JE "first"
        },
        'FunctionExpression': {
          'parameters': 1, // JE "first"
        },
        'MemberExpression': 'off',
        'ObjectExpression': 1, // "first",
        'SwitchCase': 1
      }
    ],
    'indent-legacy': 'off',
    'init-declarations': 'off', // ["error", "always"],
    'jsx-quotes': 'error',
    'key-spacing': [
      'error',
      {
        'mode': 'strict'
      }
    ],
    'keyword-spacing': [
      'error',
      {
        'after': true,
        'before': true
      }
    ],
    'line-comment-position': 'off',
    'linebreak-style': [
      'error',
      'unix'
    ],
    'lines-around-comment': 'off', // JE
    'lines-around-directive': 'error',
    'lines-between-class-members': 'off', // JE
    'max-classes-per-file': 'off', // JE
    'max-depth': 'off',
    'max-len': [
      'error',
      {
        'code': 120,
        'ignorePattern': '^// Flags:',
        'ignoreRegExpLiterals': true,
        'ignoreUrls': true,
        'tabWidth': 2
      }
    ],
    'max-lines': 'off',
    'max-lines-per-function': 'off',
    'max-nested-callbacks': 'error',
    'max-params': 'off',
    'max-statements': 'off',
    'max-statements-per-line': 'error',
    'multiline-comment-style': 'off',
    'multiline-ternary': 'off',
    'new-cap': 'error',
    'new-parens': 'error',
    'newline-after-var': 'off',
    'newline-before-return': 'off',
    'newline-per-chained-call': 'off',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-bitwise': 'off', // JE
    'no-buffer-constructor': 'error',
    'no-caller': 'error',
    'no-catch-shadow': 'error',
    'no-class-assign': 'error',
    'no-confusing-arrow': 'error',
    'no-console': 'off', // JE
    'no-const-assign': 'error',
    'no-constant-condition': 'off', // JE
    'no-control-regex': 'error',
    'no-continue': 'off', // JE
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-div-regex': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'no-else-return': 'error',
    'no-empty-character-class': 'error',
    'no-empty-function': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-label': 'error',
    'no-extra-parens': [
      'error',
      'functions', // JE: Complains about useful parens for readability
    ],
    'no-extra-semi': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-func-assign': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-inline-comments': 'off',
    'no-invalid-regexp': 'error',
    'no-invalid-this': 'error',
    'no-irregular-whitespace': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'off', // JE
    'no-loop-func': 'error',
    'no-magic-numbers': 'off',
    'no-misleading-character-class': 'error',
    'no-mixed-operators': [
      'error',
      {
        'groups': [
          ['+', '-', '|', '||'],
          ['*', '/', '&', '&&', '^', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ],
        'allowSamePrecedence': true,
      }
    ],
    'no-mixed-requires': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': 'error',
    'no-multi-spaces': [
      'error',
      {
        'ignoreEOLComments': true
      }
    ],
    'no-multi-str': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        'max': 2,
        'maxEOF': 0,
        'maxBOF': 1
      }
    ],
    'no-native-reassign': 'error',
    'no-negated-condition': 'off', // JE: Makes nested ternaries more readable
    'no-negated-in-lhs': 'error',
    'no-nested-ternary': 'off', // JE
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-obj-calls': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'off',
    'no-path-concat': 'error',
    'no-plusplus': 'off', // JE
    'no-process-env': 'off', // JE
    'no-process-exit': 'off', // JE
    'no-proto': 'error',
    'no-prototype-builtins': 'error',
    'no-redeclare': 'error',
    'no-restricted-globals': 'error',
    'no-restricted-imports': 'error',
    'no-restricted-modules': 'error',
    'no-restricted-properties': 'error',
    'no-restricted-syntax': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow': [
      'error',
      {
        'allow': ['next', 'done', 'err', 'pak'],
      }
    ],
    'no-shadow-restricted-names': 'error',
    'no-spaced-func': 'error',
    'no-sync': 'off', // JE
    'no-tabs': 'error',
    'no-template-curly-in-string': 'error',
    'no-ternary': 'off', // JE
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef': [
      'error',
      {
        'typeof': true
      }
    ],
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-underscore-dangle': [
      'error',
      {
        'allowAfterThis': true,
        'enforceInMethodNames': false,
      }
    ],
    'no-unexpected-multiline': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-unused-vars': [
      'error',
      {
        'args': 'none'
      }
    ],
    'no-use-before-define': [
      'error',
      {
        'classes': true,
        'functions': false,
        'variables': true
      }
    ],
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'off',
    'no-warning-comments': 'off', // JE: Allow TODO:
    'no-whitespace-before-property': 'error',
    'no-with': 'error',
    'nonblock-statement-body-position': 'error',
    'object-curly-newline': 'error',
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'object-shorthand': 'off',
    'one-var': ['error', {
      'var': 'never',
      'let': 'never',
      'const': 'never',
      'separateRequires': true,
    }],
    'one-var-declaration-per-line': 'error',
    'operator-assignment': 'error',
    'operator-linebreak': [
      'error',
      'after',
      // { "overrides": { "?": "ignore", ":": "ignore" } }
    ],
    'padded-blocks': 'off',
    'padding-line-between-statements': 'error',
    'prefer-arrow-callback': 'off',
    'prefer-const': 'off',
    'prefer-destructuring': 'off',
    'prefer-numeric-literals': 'error',
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-reflect': 'off', // JE
    'prefer-rest-params': 'error',
    'prefer-spread': 'off',
    'prefer-template': 'error',
    'quote-props': [
      'error',
      'consistent'
    ],
    'quotes': [
      'error',
      'single',
      {
        'avoidEscape': true
      }
    ],
    'radix': 'error',
    'require-atomic-updates': 'error',
    'require-await': 'error',
    'require-jsdoc': 'off',
    'require-unicode-regexp': 'off', // JE: Hasn't caught anything useful, generates bigger code
    'rest-spread-spacing': 'error',
    'semi': 'error',
    'semi-spacing': 'error',
    'semi-style': [
      'error',
      'last'
    ],
    'sort-imports': 'error',
    'sort-keys': 'off',
    'sort-vars': 'off', // JE
    'space-before-blocks': [
      'error',
      'always'
    ],
    'space-before-function-paren': [
      'error',
      {
        'anonymous': 'always',
        'named': 'never',
        'asyncArrow': 'always'
      }
    ],
    'space-in-parens': [
      'error',
      'never'
    ],
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': [
      'error',
      'always',
      {
        'block': {
          'balanced': true
        },
        'exceptions': [
          '-', '/'
        ]
      }
    ],
    'strict': 'error',
    'switch-colon-spacing': 'error',
    'symbol-description': 'error',
    'template-curly-spacing': [
      'error',
      'never'
    ],
    'template-tag-spacing': 'error',
    'unicode-bom': [
      'error',
      'never'
    ],
    'use-isnan': 'error',
    'valid-jsdoc': 'error',
    'valid-typeof': 'error',
    'vars-on-top': 'off', // JE
    'wrap-iife': 'error',
    'wrap-regex': 'error',
    'yield-star-spacing': 'error',
    'yoda': [
      'error',
      'never'
    ]
  }
};
