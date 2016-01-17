import React from 'react';
import ReactDOM from 'react-dom';

import HelloWorld from './components/hello_world';
import Looper from './components/loop.jsx';

ReactDOM.render(<Looper n={5} />, document.querySelector('main'));
