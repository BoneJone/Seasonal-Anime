import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Anime from './components/Anime';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Anime />, document.getElementById('root'));
registerServiceWorker();
