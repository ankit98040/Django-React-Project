import React from 'react';
import AddTwoNumbers from './components/greet';
import LoadData from './components/part';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <AddTwoNumbers name="Ankit" age="21" />
      <LoadData />

    </div>
  );
}

export default App;
