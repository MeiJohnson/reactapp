import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'node-fetch';

(async ()=>{
const url = 'https://kodaktor.ru/j/users';
const { users } = await fetch(url)
  .then(x => x.json());
console.log(users);

const Person = (prop) => {
  const { login } = prop;
  const star ='★';
  console.log(login.length);
  console.log(star);
  return (
    <div>
      <strong>
        {login.toUpperCase()} 
      </strong>
      {star.repeat(login.length)}
    </div>
  );
};
const PersonList = () => {
  const getPerson = (personName) => (
    <Person {...personName} />
  );

  return (
    <div>{users.map((personName) => getPerson(personName))}</div>
  );
};
const App = () => (
  <PersonList />
);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
})();