import React, { Component, useState } from 'react'
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

const App = () =>{
  const [data, setData] = useState("Hello from App.js")
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
      <CalculatorApp /> */}
      <FetchExampleApp />
    </div>

  )
}
export default App;
