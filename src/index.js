import React from "react";
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './index.css';

const user = {
	firstName: 'Muhammad',
	lastName: 'Abdusy Syukur'
};

function formatName(user){
	return user.firstName+' '+user.lastName;
}

function getGreeting(user){
	if(user){
		return <h1>Hello, {formatName(user)}</h1>;
	}
	return <h1>Hello, guest</h1>
}


// <img src={logo} className="app-image"/> has no children
// so it has closed tag />

const element = (
	<div tabIndent="0">
		<img src={logo} className="app-image"/>
		{getGreeting(user)}
		<br/>
		{getGreeting()}
	</div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
