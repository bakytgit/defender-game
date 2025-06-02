const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // Точка входа для Webpack. Здесь начинается сборка модулей.
  entry: './index.js', // Используем index.js в корне как точку входа

  // Настройки для выходных файлов (бандлов).
  output: {
    path: path.resolve(__dirname, 'dist'), // Директория для собранных файлов
    filename: 'bundle.js', // Имя основного бандла
    clean: true, // Очищает dist папку перед каждой сборкой
  },

  // Настройки модулей (лоадеры для обработки разных типов файлов).
  module: {
    rules: [
      {
        test: /\.js$/, // Применяем правило ко всем файлам .js
        exclude: /node_modules/, // Исключаем папку node_modules
        use: {
          loader: 'babel-loader', // Используем babel-loader для транспиляции JS
          options: {
            // Конфигурация babel-loader будет взята из babel.config.json
            // Если babel.config.json отсутствует, можно прописать presets здесь:
            // presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/, // Применяем правило ко всем файлам .css
        use: [
          MiniCssExtractPlugin.loader, // Извлекает CSS в отдельный файл
          'css-loader', // Интерпретирует @import и url() как import/require()
        ],
      },
    ],
  },

  // Настройки плагинов.
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Шаблон HTML-файла для генерации
      filename: 'index.html', // Имя выходного HTML-файла
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css', // Имя выходного CSS-файла
    }),
  ],

  // Режим сборки (development или production).
  // 'development' для удобной отладки, 'production' для оптимизированного кода.
  mode: 'development', // Или 'production'

  // Настройки сервера для разработки (webpack-dev-server).
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Директория, которую сервер будет обслуживать
    },
    compress: true, // Включает Gzip сжатие
    port: 9000, // Порт, на котором будет запущен сервер
    open: true, // Автоматически открывает браузер после запуска сервера
  },
};