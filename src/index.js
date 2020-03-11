import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainApp from './Mainapp';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(<BrowserRouter><MainApp /></BrowserRouter>, document.getElementById('root'));
