
import React, { Component, useState, createContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import {useState} from 'react'
import Class_component from './components/Class_component';
import Functional_Component from './components/Functional_Component'
import Hooks from './components/Hooks';
import Props from './components/Props';
import CSS_Styling from './components/CSS_Styling';
import Event_Listeners from './components/Event_Listeners';
import Use_Effect from './components/Use_Effect';
import OnChangeHandler from './components/OnChangeHandler'
import Form_Submission from './components/Form_Submission';
import Mapfunction from "./components/Mapfunction"
import Filterfunction from "./components/Filterfunction";
import Loginform from './components/Loginform';
import SignupForm from './components/SignupForm';
import CalculatorApp from './components/CalculatorApp';
import FetchExampleApp from './components/FetchExampleApp';
import AxiosApp from './components/AxiosApp';
import FirebaseForm from './components/FirebaseForm';
import HomePage from './components/ReactRouterDOM/HomePage';
import About from './components/ReactRouterDOM/About';
import Dashboard from './components/ReactRouterDOM/Dashboard';

import Count from './components/ContextAPI/Count';
import Display from './components/ContextAPI/Display';


export const store = createContext()

const App = () =>{
  // const [data, setData] = useState("Hello from App.js")
  const [cartData, setCartData] = useState([
    {
      brandname: 'Nokia',
    },
    {
      brandname: 'Apple',
    },
    {
      brandname: 'Samsung',
    },
    {
      brandname: 'MI',
    },
  ])

  return(
    <div>
      {/* <Functional_Component />
      <Class_component />
      <Hooks />
      <Props data={data}/>
      <CSS_Styling />
      <Event_Listeners />
      <Use_Effect />
      <OnChangeHandler />
      <Form_Submission />
      <Mapfunction />;
      <Filterfunction />
      <Loginform />
      <SignupForm />
      <CalculatorApp />
      <FetchExampleApp /> 
      <AxiosApp />
      <FirebaseForm />*/}
      {/* <HomePage /> */}

      {/* React Router DOM */}

      {/* <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter> */}

      {/* React Router DOM */}

      {/* Context API */}
        <store.Provider value={[cartData, setCartData]}>
          <center>
            <Count />
            <Display />
          </center>
        </store.Provider>
      {/* Context API */}
       
    </div>

  )
}
export default App;
