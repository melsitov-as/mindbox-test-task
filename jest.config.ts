import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // Если вы тестируете React-компоненты
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  // ... другие настройки
  transformIgnorePatterns: [
    'node_modules/(?!nanoid)/', // Не игнорировать nanoid
    // '^.+\\.module\\.css$', // Пример игнорирования CSS Modules (если есть)
  ],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
};

export default config;
