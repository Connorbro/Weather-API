import React from 'react';

import Titles from "./components/Titles"

import Form from "./components/Form"

import Weather from "./components/Weather"

const API_KEY = "224566a483405adb54b0ecf2dbbce14a"
class App extends React.Component{
  render(){
    return(
      <div>
        <Titles/>
        <Form/>
        <Weather/>
      </div>
    );
  }
};

export default App;
