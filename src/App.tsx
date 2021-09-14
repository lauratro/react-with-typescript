import React, { useState} from 'react';
import logo from './logo.svg';
import './App.css';

interface Istate{
  people:{
    name: string
    age:number
    url: string
    note?: string
  }[]
}
function App() {

 const [people, setPeople]=useState<Istate["people"] >([])


  return (
    <div className="App">
     <h1>People invited to the Event</h1>
    </div>
  );
}

export default App;
