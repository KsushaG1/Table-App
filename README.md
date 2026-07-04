# Table App

> **To navigate to the documents table, add `/table` to the domain in your browser's address bar.**

A pet project focused on learning **Material UI (MUI)**. The project is a web application for managing company documents with an authorization system. The entire interface is built exclusively on MUI components with no separate CSS written.

---

## Tech Stack

- **Material UI (MUI v5)** — the core of the project: all layout, styling, and UI components (buttons, tables, forms, icons, tabs, theme)
- **React 18** — library for building the user interface
- **React Router DOM** — client-side navigation between pages without browser reload
- **Vite** — project bundler
- **JavaScript (ES6+)** — primary language

---

## How It Works

The app consists of two pages:

### Authorization Page `/`
A login form with three tabs: **Sign In**, **Register**, and **Reset Password**. Each tab contains the corresponding input fields and an action button. Tab switching is handled by the `TabContext` component from MUI Lab.

### Table Page `/table`
A documents table with a sticky header (`stickyHeader`) and a scrollable fixed-height container. The table displays data about companies, documents, and employees. The bottom row contains input fields for adding a new entry and a button to clear the form.

### App Header
A fixed header present on both pages. Contains a logo link to the home page and a block with the user's name.

---

## What I Learned 🚀

The main focus of the project was deep exploration of **Material UI**:

- Working with a wide range of MUI components: `AppBar`, `Toolbar`, `Table`, `Tabs`, `TextField`, `Button`, `Avatar`, `LinearProgress`, `Stack`, and more
- Customizing components via the `sx` prop and understanding how MUI handles inline styles
- Creating custom styled components using the `styled()` function from MUI
- Configuring a global app theme via `ThemeProvider`
- Applying **Flexbox** inside `sx` for element layout
- Using `TabContext` / `TabList` / `TabPanel` from MUI Lab for tabbed navigation

And across the project in general:

- Building a React app structure: separating code into pages (`pages`) and reusable components (`components`)
- Setting up client-side routing with `React Router` and understanding the difference between `<Link>` and a regular `<a href>`
- Understanding component hierarchy and passing data through **props**
- Deploying a project via **Vercel** with automatic updates on every push to GitHub

---

## Project Structure

```
src/
├── components/
│   ├── header/
│   │   └── Header.jsx        # Fixed app header
│   ├── login/
│   │   ├── Login.jsx         # Sign in form
│   │   ├── Register.jsx      # Registration form
│   │   ├── Reset.jsx         # Password reset form
│   │   ├── LoginTabs.jsx     # Tab container
│   │   └── style.js          # Styled components for forms
│   └── table/
│       ├── TableBlock.jsx    # Table wrapper with headers
│       └── TableRows.jsx     # Table rows and add entry form
├── pages/
│   ├── LoginPage.jsx         # Authorization page (/)
│   └── TablePage.jsx         # Table page (/table)
├── App.jsx                   # App root, router, theme
└── main.jsx                  # Entry point
```


# Table App
 
> **Чтобы перейти к таблице документов, добавьте `/table` к домену в адресной строке браузера.**
 
Учебный пет-проект, основная цель которого — освоение библиотеки **Material UI (MUI)**. В рамках проекта реализовано веб-приложение для управления документами компании с системой авторизации. Весь интерфейс построен исключительно на компонентах MUI без написания отдельного CSS.
 
---
 
## Стек технологий
 
- **Material UI (MUI v5)** — основа проекта: вся вёрстка, стилизация и UI-компоненты (кнопки, таблицы, формы, иконки, табы, тема)
- **React 18** — библиотека для построения пользовательского интерфейса
- **React Router DOM** — клиентская навигация между страницами без перезагрузки браузера
- **Vite** — сборщик проекта
- **JavaScript (ES6+)** — основной язык разработки
---
 
## Как работает проект
 
Приложение состоит из двух страниц:
 
### Страница авторизации `/`
Форма входа с тремя вкладками: **Вход**, **Регистрация** и **Сброс пароля**. Каждая вкладка содержит соответствующие поля ввода и кнопку действия. Переключение между вкладками реализовано через компонент `TabContext` из MUI Lab.
 
### Страница таблицы `/table`
Таблица документов с фиксированным заголовком (`stickyHeader`) и ограничением высоты с прокруткой. В таблице отображаются данные по компаниям, документам и сотрудникам. В нижней строке таблицы расположены поля ввода для добавления новой записи и кнопка очистки формы.
 
### Шапка приложения
Фиксированная шапка присутствует на обеих страницах. Содержит логотип-ссылку на главную и блок с именем пользователя.
 
---
 
## Чему я научилась
 
Главный фокус проекта — глубокое погружение в **Material UI**:
 
- Работать с широким набором MUI-компонентов: `AppBar`, `Toolbar`, `Table`, `Tabs`, `TextField`, `Button`, `Avatar`, `LinearProgress`, `Stack` и другими
- Кастомизировать компоненты через проп `sx` и понимать как MUI обрабатывает инлайн-стили
- Создавать собственные стилизованные компоненты через функцию `styled()` из MUI
- Настраивать глобальную тему приложения через `ThemeProvider`
- Применять **Flexbox** внутри `sx` для раскладки элементов
- Использовать `TabContext` / `TabList` / `TabPanel` из MUI Lab для вкладок
А также в целом по проекту:
 
- Строить структуру React-приложения: разделять код на страницы (`pages`) и переиспользуемые компоненты (`components`)
- Настраивать клиентскую маршрутизацию через `React Router` и понимать разницу между `<Link>` и обычным `<a href>`
- Понимать иерархию компонентов и передачу данных через **props**
- Деплоить проект через **Vercel** с автоматическим обновлением при пуше в GitHub
---
 
## Структура проекта
 
```
src/
├── components/
│   ├── header/
│   │   └── Header.jsx        # Фиксированная шапка приложения
│   ├── login/
│   │   ├── Login.jsx         # Форма входа
│   │   ├── Register.jsx      # Форма регистрации
│   │   ├── Reset.jsx         # Форма сброса пароля
│   │   ├── LoginTabs.jsx     # Контейнер с вкладками
│   │   └── style.js          # Стилизованные компоненты для форм
│   └── table/
│       ├── TableBlock.jsx    # Обёртка таблицы с заголовками
│       └── TableRows.jsx     # Строки таблицы и форма добавления
├── pages/
│   ├── LoginPage.jsx         # Страница авторизации (/)
│   └── TablePage.jsx         # Страница таблицы (/table)
├── App.jsx                   # Корень приложения, роутер, тема
└── main.jsx                  # Точка входа
```
