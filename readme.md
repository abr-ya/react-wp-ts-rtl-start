# О сборке
Это попытка создать относительно универсальный стартер для разработки с использованием:
- TypeScript,
- React,
- Redux,
- Saga,
- SCSS,
- axios,
- Jest,
- React Testing Library,
- и других инструментов.

## основные скрипты (yarn или npm ...)
- build - production сборка в dist
- build-n - production сборка с предварительным созданием файла .env на Netlify
- lint - eslint, только ошибки
- fix - eslint, исправление ошибок
- start - запуск дев-сервера, порт 3000
- start-prod - production сборка и запуск сервера express, порт 3030
- test - запуск тестов (Jest + RTL)
- test-c - запуск тестов + coverage + summary

## установлены пакеты
yarn add -D typescript

webpack

yarn add -D webpack webpack-cli webpack-dev-server webpack-merge copy-webpack-plugin css-loader dotenv-webpack file-loader html-webpack-plugin image-webpack-loader node-sass regenerator-runtime rimraf sass-loader style-loader

babel

yarn add -D @babel/cli @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript babel-loader

react

yarn add react react-dom
yarn add -D react-hot-loader @types/react @types/react-dom

router

yarn add react-router-dom
yarn add -D @types/react-router-dom 

redux + saga

yarn add react-redux redux-saga
yarn add -D redux-devtools-extension typesafe-actions

server

yarn add -D express @types/node

linter, prettier

yarn add -D eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react @typescript-eslint/eslint-plugin @typescript-eslint/parser 

testing

yarn add -D jest @testing-library/dom @testing-library/jest-dom @testing-library/react @types/jest msw

и наконец:

yarn add axios bootstrap react-bootstrap react-select
