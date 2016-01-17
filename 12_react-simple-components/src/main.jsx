import React from 'react';
import ReactDOM from 'react-dom';

import HelloWorld from './components/hello_world';
import Looper from './components/loop.jsx';
import MultiInput from './components/multi_input.jsx';
import Lab1 from './components/lab1.jsx';
import Lab2 from './components/lab2';
import FilteredList from './components/flist.jsx';

var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

ReactDOM.render(<FilteredList items={days} />, document.querySelector('main'));
