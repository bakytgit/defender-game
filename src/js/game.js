// game.js
// Модуль Game - отвечает за работу приложения (загрузку и сохранение).
// Импортируем класс Character из модуля domain.
import Character from './domain';

class Game {
  start() {
    console.log('game started');
    // Пример использования импортированного класса Character:
    // const player = new Character();
    // console.log('New character created:', player);
  }
}

class GameSavingData {
  // Логика данных сохранения игры.
}

function readGameSaving() {
  // Логика чтения сохранения.
  console.log('Reading game saving...');
}

function writeGameSaving() {
  // Логика записи сохранения.
  console.log('Writing game saving...');
}

// Экспортируем класс Game как default.
export default Game;

// Экспортируем класс GameSavingData и функции readGameSaving, writeGameSaving как именованные.
export { GameSavingData, readGameSaving, writeGameSaving };
