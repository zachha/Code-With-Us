import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import fontawesome from "@fortawesome/fontawesome";
import freeSolidIcons from "@fortawesome/fontawesome-free-solid";
import { BrowserRouter } from 'react-router-dom';
import App from './App';

fontawesome.library.add(freeSolidIcons);

ReactDOM.render(
<BrowserRouter>
    <App />
</BrowserRouter>, document.getElementById('root'));