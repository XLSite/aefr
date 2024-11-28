import plumber from "gulp-plumber"; //Обробка помилок
import notify from "gulp-notify"; //Підказки
import browsersync from "browser-sync"; //Локальний сервер
import newer from "gulp-newer"; //Перевірка оновлень
import ifPlugin from "gulp-if"; // Перевірка умови

export const plugins = {
  plumber: plumber,
  notify: notify,
  browsersync: browsersync,
  newer: newer,
  if: ifPlugin
};
