// need to import from movie-converter(and other modules) here because they are actively being used/called in this module so they need that data vs just defining what a function is going to do like movie-render.js

import { generateMoviesHTML } from './movie-converter.js';
import { renderMoviesToDOM } from './movie-render.js';

// This line calls the generateMoviesHTML function, which generates the HTML markup for the movie cards based on the movie data. The generated HTML is stored in the movieHTML variable.
const movieHTML = generateMoviesHTML();

// This line calls the renderMoviesToDOM function, passing the movieHTML as an argument. The function takes the generated HTML and inserts it into the specified DOM element ("movie-list").
renderMoviesToDOM(movieHTML);