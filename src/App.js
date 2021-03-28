import React, {useState} from 'react';
import './App.css';
import {Cat} from 'react-kawaii';

// const { useEffect, useState } = React
// const CounterWithNameAndSideEffect = () => {
//  const [count, setCount] = useState(0)
//  useEffect(() => {
//  console.log(`You clicked ${count} times`)
//  })
//  return (
//  <div>
//  <p>You clicked {count} times</p>
//  <button onClick={() => setCount(count + 1)}>Click me</button>
//  </div>
//  )
// }

function Example() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You loved this pussy {count} times</p>
      <button onClick={()=> setCount(count+1)}>
        Show Love
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <WelcomeMessage my={'Welcum'}/>
      <Welcum> Hello I am Pussy </Welcum>
      <Cat size={300} mood="blissful" color="#aaD002" />
       <Example/>


      </header>
    </div>
  );
}

function WelcomeMessage({my}) {
  return( 
  <div>
    <h1>{my}</h1>
  </div>
    );
}

function Welcum({children}) {
  return <p> {children} </p>
}

export default App;