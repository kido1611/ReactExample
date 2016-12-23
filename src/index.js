import React from "react";
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './index.css';

const element = React.createElement(
	'h1', 
	{className: 'greeting'}, 
	'Hello, world'
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
