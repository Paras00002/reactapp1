import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Person from './Person';
import BookMain from './bookmain';
 import Hello from './Hello';
import Author from './Book/author';
import Publisher from './Book/publisher';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Hello></Hello> */}
    {/* <Person></Person> */}
    {/* <BookMain></BookMain> */}
    {/* <Author></Author>
    <Publisher></Publisher> */}
     {/* <App /> */}
     <BookMain></BookMain>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
