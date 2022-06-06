import React, { FC } from 'react';
import './App.css';

const Heading=({title}:{title:string})=><h2>{title}</h2>

const List:FC<{items:string[]}>=({items})=>(
  <ul>
    {items?.map((item,ind)=><li key={ind}>{item}</li>)}
  </ul>
)

function App() {
  return (
    <div className="App">
      <Heading title={"Hello Typescript"}/>
      <List items={["one","two","three"]} />
    </div>
  );
}

export default App;
