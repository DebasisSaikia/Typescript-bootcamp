import React, { FC } from 'react';
import './App.css';

const Heading=({title}:{title:string})=><h2>{title}</h2>

const List:FC<{items:string[],onClick?:(item:string)=>void}>=({items,onClick})=>(
  <ul>
    {items?.map((item,ind)=><li key={ind} onClick={()=>onClick?.(item)}>{item}</li>)}
  </ul>
)

interface Payload{
  text:string;
}

interface Todo{
  id:number;
  done:boolean;
  text:string
}

type ActionType=|{type:'ADD',text:string}|{type:'REMOVE',text:string}

function App() {
  const [checkedState,setCheckState]=React.useState<Payload|null>(null)

  const ref=React.useRef<HTMLInputElement>(null)

  // const [todos,setTodos]=React.useReducer((todos:Todo[],action:ActionType)=>{
  //   switch(action.type){
  //     case "ADD":
  //       return[
  //         ...state
  //       ]
  //   }
  // },[])
  return (
    <div className="App">
      <Heading title={"Hello Typescript"}/>
      <List items={["one","two","three"]} />
      <input type="text" placeholder='Enter name' ref={ref} />
    </div>
  );
}

export default App;
