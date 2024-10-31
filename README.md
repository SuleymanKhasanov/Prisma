# Prisma Movie Theater

**Prisma** — это проект киносервиса, где пользователи могут просматривать информацию о фильмах, мультфильмах, сериалах и аниме. Проект разработан с использованием **React**, **Redux** и **RTK Query**.

## Структура проекта

Проект организован в соответствии с Feature-Sliced Design (FSD) для упрощения поддержки и расширения кода. Основные папки и их функции:

- **entities** — содержит сущности приложения.
- **features** — реализует функциональные блоки, такие как кнопки действий и баннеры жанров.
- **pages** — включает страницы для каждого типа контента, такие как `Home`, `Movie`, `Anime`, `Cartoons`, и `Search`.
- **shared** — содержит общие компоненты, такие как иконки.
- **widgets** — включает виджеты для повторно используемых функциональностей, таких как `Sidebar` и `Slider`.

## Используемые технологии

- **React** — библиотека для создания пользовательского интерфейса.
- **Redux Toolkit** — библиотека для управления состоянием приложения.
- **RTK Query** — инструмент для работы с API.
- **Vite** — быстрый сборщик для разработки и сборки приложения.

## Разделы и страницы

- **Home** — главная страница с подборками фильмов и сериалов.
- **Movie** — страница с информацией о фильме.
- **Anime и Cartoons** — страницы для аниме и мультфильмов.
- **Search** — страница для поиска контента.
- **NotFound** — страница ошибки 404.

## Особенности

- **Redux для управления состоянием** — используется для управления состоянием autoplay в слайдерах.
- **Feature-Sliced Design** — архитектурный подход, позволяющий разделить проект на функциональные модули.
- **RTK Query** — для взаимодействия с внешними API и получения данных о фильмах и сериалах.

## Планируемые улучшения

Добавление функциональности фильтрации и сортировки.
Улучшение производительности слайдеров и оптимизация изображений.

## Автор

Сулейман Хасанов — GitHub

## Лицензия

Проект лицензирован под лицензией MIT.
