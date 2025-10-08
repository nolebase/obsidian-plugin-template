import antfu from '@antfu/eslint-config'

export default await antfu(
  {
    unocss: true,
    ignores: [
      'cspell.config.yaml',
      'cspell.config.yml',
      'crowdin.yaml',
      'crowdin.yml',
      '**/drizzle/**',
      '**/.astro/**',
    ],
    rules: {
      'vue/prefer-separate-static-class': 'off',
      'yaml/plain-scalar': 'off',
      'import/order': 'off',
      'antfu/import-dedupe': 'error',
      'style/padding-line-between-statements': 'error',
      'perfectionist/sort-imports': [
        'error',
        {
          groups: [
            'type-builtin',
            'type-import',
            'type-internal',
            ['type-parent', 'type-sibling', 'type-index'],
            'default-value-builtin',
            'named-value-builtin',
            'value-builtin',
            'default-value-external',
            'named-value-external',
            'value-external',
            'default-value-internal',
            'named-value-internal',
            'value-internal',
            ['default-value-parent', 'default-value-sibling', 'default-value-index'],
            ['named-value-parent', 'named-value-sibling', 'named-value-index'],
            ['wildcard-value-parent', 'wildcard-value-sibling', 'wildcard-value-index'],
            ['value-parent', 'value-sibling', 'value-index'],
            'side-effect',
            'style',
          ],
          newlinesBetween: 'always',
        },
      ],
      'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    },
  },
)
