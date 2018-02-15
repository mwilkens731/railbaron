import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RailBaron from './RailBaron';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RailBaron />, document.getElementById('root'));
registerServiceWorker();
