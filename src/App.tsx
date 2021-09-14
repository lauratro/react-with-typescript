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

 const [people, setPeople]=useState<Istate["people"] >([{
   name:"Mary Bill",
   url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmUbjoL6IYzihcnn3-MDo1E_VjkoRKYg-HLw&usqp=CAU",
   age:36,
   note:"Allergic to nuts"
 }])


  return (
    <div className="App">
     <h1>People invited to the Event</h1>
     <List people={people}/>
    </div>
  );
}

export default App;
