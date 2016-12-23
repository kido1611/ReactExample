import React from "react";
import ReactDOM from "react-dom";

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

const element = (
	<div>
		{getGreeting(user)}
		<br/>
		{getGreeting()}
	</div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
