# bwoke
Team Eleven Final SDLC Project


After cloning the repo, run ``` npm install ``` in your terminal to install all the dependencies.

To run the localserver, run ```gulp serve ```. It will open the local host on port 8000 (http://localhost:8000/)

To compile SASS into the CSS run ```gulp sass```. It will also include autoprefixes for most of the browsers.
To compile ES6+ to ES5, run ```gulp babel```. 

Run ```gulp watch``` to compile SCSS and JS into build folder on every save.

## Please always work on separate branches and never pull anything to master without code review and confirming it with Katya or Raf.

Compiled files are inside the build folder. Please, do not edit CSS/JS inside the build folder, it is going to be override after running the compiler. Work only with files inside the assets folder. (./assets/...). 