import React, { useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./components/List"

interface Istate{
  people:{
    name: string
    age:number
    url: string
    note?: string
  }[] //defining an array of objects
}
function App() {

 const [people, setPeople]=useState<Istate["people"] >([])


  return (
    <div className="App">
     <h1>People invited to the Event</h1>
     <List people={people}/>
    </div>
  );
}

export default App;
