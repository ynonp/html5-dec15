import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from 'components/hello_world';
import Game from 'components/game';
import GameTimer from './api/game_timer';

/**
 * In this template main.jsx is the main entry point for the application.
 * All it does is render a <HelloWorld /> component into a DOM element
 * named <main></main>, which you can find in index.html
 */
GameTimer.start();

ReactDOM.render(<Game />, document.querySelector('main'));

