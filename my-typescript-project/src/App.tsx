import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Button from './Button';
import Card from './Card';
import MyClassComponent from './MyClassComponent';


function App() {
  return (
    <>
    {/* <Button name="A"/>
    <Button name="B"/>
    <Button name="C"/>
    <Button name="D"/> */}
    <Card name="meghana" age="24" number={80878888867}/>
    <Card name="srujana" age="22" number={808788888435}/>
    <Card name="syamala" age="50" number={8435235237}/>
    <Card name="hanvika" age="1" number={8087888886437}/>
    <MyClassComponent />
    </>
  );
}

export default App;
