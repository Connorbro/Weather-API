import React from 'react';

import Titles from "./components/Titles"

import Form from "./components/Form"

import Weather from "./components/Weather"

const API_KEY = "224566a483405adb54b0ecf2dbbce14a"


class App extends React.Component{
  getWeather = async () => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=
    ${API_KEY}&units=metric`);
  const data = await api_call.json(); 
  }
  
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
