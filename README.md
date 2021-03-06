# <img src="https://github.com/rawdanowiczdev/pokemon-catcher/blob/main/src/assets/pokeball-footer.png?raw=true">  Pokemon Catcher

My recruitment task for TechMinds sp. z o.o., built with **Angular CLI** (version 11.0.4).
App is accessible for screen-reader-only users. I have tested it with keyboard and NVDA and it gives a full experience also for people limited to these tools. It's responsive on all types of devices both portrait and landscape view. To avoid unnecessary redirects there's a custom **404** error page with home button. For even better user experience you can *install* it on your device thanks to **PWA** capabilities. 

## Technologies

In this project I'm using:
- Angular
- Angular PWA
- PokéAPI
- TypeScript
- SCSS
- Git

## Setup

To install this project locally clone the repository and use **npm**.
```
$ git clone https://github.com/rawdanowiczdev/pokemon-catcher.git
$ cd ./pokemon-catcher
$ npm install
```

To work at **localhost:4200** in watch mode. Add `-o` flag to open it automatically in your default browser.<br>
```
$ ng serve
```

To build this app in production mode.
```
$ ng build --prod
```
After it's done move to `/dist/pokemon-catcher`, this is folder containing built app.

## Images

Pokeball graphics and player icon were made by [Nikita Golubev](https://www.flaticon.com/authors/nikita-golubev). Images that also contain text (like a logo) were edited by me using **Gimp** and **Pokémon Solid** font.
All of the images were tinified using [TinyPNG](https://tinypng.com/).
