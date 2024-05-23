[УКР](#webpack-rent-ukr) | [EN](#webpack-english) | [DEU](#webpack-german)

  <h1 id="webpack-ukr">webpack-react-template</h1>

<div>
    <a href="https://github.com/AmmelyStar/webpack-frontend-template">
        <img width="150" height="150" src="https://webpack.js.org/assets/icon-square-big.svg">
    </a>
  <a href="https://github.com/AmmelyStar/webpack-frontend-template">
        <img width="140" height="140" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png" alt="React logo">
    </a>
</div>
<br/>
<br/>


## Особливості збірки

* використовується [Babel](https://babeljs.io/) для підтримки сучасного JavaScript (ES6) у браузерах
* обираєте будь-який препроцесор SASS/SCSS
* ваш CSS і JS оптимізується і мініфікується
* встановлений пакет webpack-dev-server - вам не потрібно постійно перезавантажувати браузер
* [ESlint](https://eslint.org/) дозволить зробити ваш код приємним і чистим
* Використовує [React](https://react.dev/) для розробки інтерфейсу користувача.
* У проєкті використовуються наступні пакети залежностей:
  * **[@babel/polyfill](https://babeljs.io/docs/en/babel-polyfill)**: Забезпечує підтримку старих браузерів для нових JavaScript функцій.
  * **[@pmmmwh/react-refresh-webpack-plugin](https://github.com/pmmmwh/react-refresh-webpack-plugin)**: Плагін для інтеграції React Refresh з Webpack, що забезпечує швидке оновлення компонентів без перезавантаження сторінки.
  * **[@reduxjs/toolkit](https://redux-toolkit.js.org/)**: Набір інструментів для написання Redux логіки, що спрощує створення Redux store і написання редукторів.
  * **[@testing-library/jest-dom](https://github.com/testing-library/jest-dom)**: Набір матчерів для використання з Jest, що дозволяє перевіряти стан DOM.
  * **[@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/)**: Бібліотека для тестування React компонентів, що зосереджується на взаємодії користувача.
  * **[axios](https://axios-http.com/)**: Бібліотека для виконання HTTP запитів.
  * **[firebase](https://firebase.google.com/)**: SDK для роботи з Firebase, що забезпечує автентифікацію, базу даних, хостинг та інші сервіси.
  * **[jest](https://jestjs.io/)**: Фреймворк для тестування JavaScript коду.
  * **[prop-types](https://www.npmjs.com/package/prop-types)**: Бібліотека для перевірки типів props в React компонентах.
  * **[react-dom](https://react.dev/)**: Пакет для маніпуляцій з DOM для React додатків.
  * **[react-hook-form](https://react-hook-form.com/)**: Бібліотека для роботи з формами у React, що дозволяє легко обробляти введення користувачів і валідацію.
  * **[react-modal](https://github.com/reactjs/react-modal)**: Бібліотека для створення модальних вікон у React додатках.
  * **[react-redux](https://react-redux.js.org/)**: Бібліотека для інтеграції Redux з React.
  * **[react-router-dom](https://reactrouter.com/)**: Бібліотека для маршрутизації у React додатках.
  * **[redux](https://redux.js.org/)**: Бібліотека для управління станом додатку.
  * **[styled-components](https://styled-components.com/)**: Бібліотека для стилізації React компонентів з використанням tagged template literals.
  * **[yup](https://github.com/jquense/yup)**: Бібліотека для валідації схем об'єктів.





 
    
## Файлова структура

```
webpack-react-template
├── dist
├── src
│   ├── fonts
|   ├── img
|        ├── webpack-plain.svg
|        ├── webpack-plain.svg
│   ├── style
|        ├── fonts.css
|        ├── normalize.css
|        ├── style.css
│   ├── index.css
│   ├── index.js
│   ├── index.html
|   ├── App.js
│
├── .babelrc
├── .browserslistrc
├── .eslintrc.js
├── .gitignore
├──  .prettierrc
├──  jest.config.js
├──  package.json
├──  README.md
└── setupTests.js
```



## Команди

* ```npm run dev``` - збираємо development
* ```npm build-prod``` - збираємо production
* ```npm start``` - стежимо за файлами та відкриваємо у браузері


## Встановлення

Встановлюємо всі необхідні пакети з package.json

```bash
npm install
```

Запускаємо

```bash
npm start
```

## Зібрано

*  [@Anna Radchenko](https://github.com/AmmelyStar) 
*  [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/anna--radchenko/)

  ________________________________________________________________________________________________________________________________


  <h1 id="webpack-english">webpack-react-template</h1>
  
<div>
     <a href="https://github.com/AmmelyStar/webpack-frontend-template">
        <img width="150" height="150" src="https://webpack.js.org/assets/icon-square-big.svg">
    </a>
  <a href="https://github.com/AmmelyStar/webpack-frontend-template">
        <img width="140" height="140" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png" alt="React logo">
    </a>
</div>
<br/>
<br/>

## Build Features

* Verwendung von [Babel](https://babeljs.io/), um modernes JavaScript (ES6) in Browsern zu unterstützen
* Auswahl eines beliebigen SASS/SCSS-Präprozessors
* Optimierung und Minimierung von CSS und JS
* Installation des webpack-dev-server-Pakets - kein ständiges Neuladen des Browsers erforderlich
* [ESlint](https://eslint.org/), um Ihren Code angenehm und sauber zu gestalten
* Verwendung von [React](https://react.dev/) für die Benutzeroberflächenentwicklung.

* Im Projekt werden folgende Abhängigkeitspakete verwendet:
  * **[@babel/polyfill](https://babeljs.io/docs/en/babel-polyfill)**: Unterstützt ältere Browser für neue JavaScript-Funktionen.
  * **[@pmmmwh/react-refresh-webpack-plugin](https://github.com/pmmmwh/react-refresh-webpack-plugin)**: Plugin zur Integration von React Refresh mit Webpack, das eine schnelle Aktualisierung von Komponenten ohne Neuladen der Seite ermöglicht.
  * **[@reduxjs/toolkit](https://redux-toolkit.js.org/)**: Toolkit zum Schreiben von Redux-Logik, das die Erstellung des Redux-Store und von Reduzierern vereinfacht.
  * **[@testing-library/jest-dom](https://github.com/testing-library/jest-dom)**: Satz von Matchern für die Verwendung mit Jest, um den DOM-Zustand zu überprüfen.
  * **[@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/)**: Bibliothek zum Testen von React-Komponenten, die sich auf die Benutzerinteraktion konzentriert.
  * **[axios](https://axios-http.com/)**: Bibliothek zum Ausführen von HTTP-Anfragen.
  * **[firebase](https://firebase.google.com/)**: SDK für die Arbeit mit Firebase, das Authentifizierung, Datenbank, Hosting und andere Dienste bietet.
  * **[jest](https://jestjs.io/)**: Framework zum Testen von JavaScript-Code.
  * **[prop-types](https://www.npmjs.com/package/prop-types)**: Bibliothek zur Überprüfung von Typen von props in React-Komponenten.
  * **[react-dom](https://react.dev/)**: Paket zur Manipulation des DOM für React-Anwendungen.
  * **[react-hook-form](https://react-hook-form.com/)**: Bibliothek zur Arbeit mit Formularen in React, die eine einfache Verarbeitung von Benutzereingaben und Validierung ermöglicht.
  * **[react-modal](https://github.com/reactjs/react-modal)**: Bibliothek zur Erstellung von modalen Fenstern in React-Anwendungen.
  * **[react-redux](https://react-redux.js.org/)**: Bibliothek zur Integration von Redux mit React.
  * **[react-router-dom](https://reactrouter.com/)**: Bibliothek zur Routenführung in React-Anwendungen.
  * **[redux](https://redux.js.org/)**: Bibliothek zur Verwaltung des Anwendungsstatus.
  * **[styled-components](https://styled-components.com/)**: Bibliothek zur Stilisierung von React-Komponenten unter Verwendung von tagged template literals.
  * **[yup](https://github.com/jquense/yup)**: Bibliothek zur Validierung von Objektschemata.

<h2>File Structure</h2>
<pre>
    webpack-react-template
├── dist
├── src
│   ├── fonts
|   ├── img
|        ├── webpack-plain.svg
|        ├── webpack-plain.svg
│   ├── style
|        ├── fonts.css
|        ├── normalize.css
|        ├── style.css
│   ├── index.css
│   ├── index.js
│   ├── index.html
|   ├── App.js
│
├── .babelrc
├── .browserslistrc
├── .eslintrc.js
├── .gitignore
├──  .prettierrc
├──  jest.config.js
├──  package.json
├──  README.md
└── setupTests.js
</pre>

<h2>Commands</h2>
<ul>
    <li><code>npm run dev</code> - build for development</li>
    <li><code>npm build-prod</code> - build for production</li>
    <li><code>npm start</code> - watch files and open in browser</li>
</ul>

<h2>Installation</h2>
<p>Install all necessary packages from <code>package.json</code></p>
<pre>
    npm install
</pre>
<p>Run</p>
<pre>
    npm start
</pre>

<h2>Contributors</h2>
<ul>
    <li><a href="https://github.com/AmmelyStar">@Anna Radchenko</a></li>
    <li><a href="https://www.linkedin.com/in/anna--radchenko/"><img src="https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"></a></li>
</ul>

  ________________________________________________________________________________________________________________________________
  <h1 id="webpack-german">webpack-react-template</h1>

<div>
     <a href="https://github.com/AmmelyStar/webpack-frontend-template">
        <img width="150" height="150" src="https://webpack.js.org/assets/icon-square-big.svg">
    </a>
  <a href="https://github.com/AmmelyStar/webpack-frontend-template">
        <img width="140" height="140" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png" alt="React logo">
    </a>
</div>
<br/>
<br/>

## Funktionen des Builds

* Verwendet [Babel](https://babeljs.io/), um modernes JavaScript (ES6) in Browsern zu unterstützen.
* Wählen Sie einen beliebigen SASS/SCSS-Präprozessor Ihrer Wahl.
* Optimiert und minimiert Ihren CSS- und JS-Code.
* Enthält das webpack-dev-server-Paket - kein ständiges Neuladen des Browsers erforderlich.
* [ESlint](https://eslint.org/) stellt sicher, dass Ihr Code angenehm und sauber ist.
* Verwendet [React](https://react.dev/) für die Entwicklung der Benutzeroberfläche.

* Das Projekt verwendet die folgenden Abhängigkeitspakete:
  * **[@babel/polyfill](https://babeljs.io/docs/en/babel-polyfill)**: Bietet Unterstützung für ältere Browser für neue JavaScript-Funktionen.
  * **[@pmmmwh/react-refresh-webpack-plugin](https://github.com/pmmmwh/react-refresh-webpack-plugin)**: Plugin zur Integration von React Refresh mit Webpack, das schnelle Aktualisierungen von Komponenten ohne Neuladen der Seite ermöglicht.
  * **[@reduxjs/toolkit](https://redux-toolkit.js.org/)**: Toolkit zum Schreiben von Redux-Logik, das die Erstellung von Redux-Stores und das Schreiben von Reduzierern vereinfacht.
  * **[@testing-library/jest-dom](https://github.com/testing-library/jest-dom)**: Satz von Matchern zur Verwendung mit Jest, um den DOM-Zustand zu überprüfen.
  * **[@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/)**: Bibliothek zum Testen von React-Komponenten mit Schwerpunkt auf der Benutzerinteraktion.
  * **[axios](https://axios-http.com/)**: Bibliothek zur Ausführung von HTTP-Anfragen.
  * **[firebase](https://firebase.google.com/)**: SDK zur Arbeit mit Firebase, das Authentifizierung, Datenbank, Hosting und andere Dienste bietet.
  * **[jest](https://jestjs.io/)**: Framework zum Testen von JavaScript-Code.
  * **[prop-types](https://www.npmjs.com/package/prop-types)**: Bibliothek zur Überprüfung von Prop-Typen in React-Komponenten.
  * **[react-dom](https://react.dev/)**: Paket zur DOM-Manipulation für React-Anwendungen.
  * **[react-hook-form](https://react-hook-form.com/)**: Bibliothek zum Arbeiten mit Formularen in React, die eine einfache Handhabung der Benutzereingabe und Validierung ermöglicht.
  * **[react-modal](https://github.com/reactjs/react-modal)**: Bibliothek zur Erstellung von Modal-Fenstern in React-Anwendungen.
  * **[react-redux](https://react-redux.js.org/)**: Bibliothek zur Integration von Redux mit React.
  * **[react-router-dom](https://reactrouter.com/)**: Bibliothek zur Routenführung in React-Anwendungen.
  * **[redux](https://redux.js.org/)**: Bibliothek zur Verwaltung des Anwendungsstatus.
  * **[styled-components](https://styled-components.com/)**: Bibliothek zur Gestaltung von React-Komponenten unter Verwendung von getaggten Template-Literalen.
  * **[yup](https://github.com/jquense/yup)**: Bibliothek zur Validierung von Objektschemas.






<h2>Dateistruktur</h2>
<pre>
webpack-react-template
├── dist
├── src
│   ├── fonts
|   ├── img
|        ├── webpack-plain.svg
|        ├── webpack-plain.svg
│   ├── style
|        ├── fonts.css
|        ├── normalize.css
|        ├── style.css
│   ├── index.css
│   ├── index.js
│   ├── index.html
|   ├── App.js
│
├── .babelrc
├── .browserslistrc
├── .eslintrc.js
├── .gitignore
├──  .prettierrc
├──  jest.config.js
├──  package.json
├──  README.md
└── setupTests.js
</pre>

<h2>Befehle</h2>
<ul>
    <li><code>npm run dev</code> - Bauen für Entwicklung</li>
    <li><code>npm build-prod</code> - Bauen für Produktion</li>
    <li><code>npm start</code> - Dateien beobachten und im Browser öffnen</li>
</ul>

<h2>Installation</h2>
<p>Installieren Sie alle notwendigen Pakete aus <code>package.json</code></p>
<pre>
    npm install
</pre>
<p>Ausführen</p>
<pre>
    npm start
</pre>

<h2>Mitarbeiter</h2>
<ul>
    <li><a href="https://github.com/AmmelyStar">@Anna Radchenko</a></li>
    <li><a href="https://www.linkedin.com/in/anna--radchenko/"><img src="https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"></a></li>
</ul>


