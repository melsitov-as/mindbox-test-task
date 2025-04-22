import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // Если вы тестируете React-компоненты
  // ... другие настройки
};

export default config;
