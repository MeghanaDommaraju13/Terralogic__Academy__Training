import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassLifecycleDemo from './ClassLifeCycleDemo';
import FunctionalLifeCycleDemo from './FunctionalLifeCycleDemo';
import PostAxios from './PostAxios';

function App() {
  return (
    <div className="App">
        <ClassLifecycleDemo />
        <FunctionalLifeCycleDemo />
        <PostAxios />
    </div>
  );
}

export default App;
