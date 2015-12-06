//require('../../css/font-awesome.min.css');
require('../../sass/header.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './_header.js';
import Head from '../temp/head.js';


Head.init('首页-知乎');


ReactDOM.render(<Header name="Nate" />, document.getElementById('header'));
