import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonCheckComponent from './ButtonCheck';
import Counter from './IncrementComponent';
import DataBinding from './DataBindlingComponent';
import ClassCounter from './ClassComponent';
import ParentComponent from './ParentComponent';
import Greeting from './Greetings';
import WelcomeMessage from './WelcomeMessage';
import ConditionalRendering from './ConditionalRendering';
import ListUseage from './ListUseage';
import ArrayTraversal from './ArrayTraversal';

function App() {
  return (
    <div className="App">
      <ButtonCheckComponent />
      <Counter />
      <ClassCounter />
      <DataBinding />
      <ParentComponent />
      <Greeting isLoggedIn={true} isAuthorized={true}/>
      <WelcomeMessage/>
      <ConditionalRendering isLoggedIn={true}/>
      <ListUseage />
      <ArrayTraversal />
    </div>
  );
}

export default App;
