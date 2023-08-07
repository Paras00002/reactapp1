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
import Employee from './Employee';
import Product from './Product';
import BookStatePage from './BookStatePage';
import UserForm from './userForm';
import Address from './Address';
import UserCar from './UserCar';
import { Cars } from './Car';
import UserCounter from './UserCounter';
import CustomerForm from './CustomerForm'

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
     {/* <BookMain></BookMain> */}
     {/* <Employee id="10001" name="ram kumar"></Employee> */}
     {/* <BookStatePage></BookStatePage> */}
   <UserForm id="123243" name="Paras Singh"></UserForm>
   <Address city="Noida" state="UP" country="India"></Address>
   <UserCar car={Cars}></UserCar>
   <UserCounter></UserCounter>
   <CustomerForm></CustomerForm>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
