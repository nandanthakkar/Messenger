import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Messages from './Contact';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Messages />, document.getElementById('messages'));
registerServiceWorker();
