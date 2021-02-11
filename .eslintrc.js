module.exports =  {
    parser:  '@typescript-eslint/parser', // Визначаємо ESLint-обробник
    extends:  [
      'plugin:react/recommended', // Використовуємо рекомендовані правила з @eslint-plugin-react
      'plugin:@typescript-eslint/recommended', //Використовуємо рекомендовані правила з @typescript-eslint/eslint-plugin
    ],
    parserOptions: {
    ecmaVersion:  2018, // Дозволяємо обробляти сучасні фічі ECMAScript 
    sourceType: 'module', // Дозволяємо використання імпортів
    ecmaFeatures: {
      jsx:  true, // Дозволяємо обробляти JSX
    },
    },
    rules: {
      // Тут ми визначаємо правила ESLint. Також можна перевизначати правила наявних конфігів
      // наприклад, "@typescript-eslint/explicit-function-return-type": "off",
    },
    settings: {
      react: {
        version: 'detect', // Вказуємо eslint-plugin-react автоматично визначати версію React для використання
      },
    },
  };