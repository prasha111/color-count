import logo from './logo.svg';
import './App.css';
import Box from './component/Box';
import { useState } from 'react';


function App() {
  const [array ,setArray] = useState([]);
  const [result, setResult] = useState({
   
  })
  const resultObj  = {};
  const color = (index)=>{
    setResult({ ...result,[index]:true})
    setArray(array.includes(index)? array: [...array, index])
    if(array.length >= 6){
      
    }
  }
  console.log(result)
  console.log(array)
  return (
    <div className="App">
      <div className='flex'>
        <div className='flex-div'>
        {new Array(3).fill('').map((some, index)=>{
          return (<Box onClick={()=>{color(index)}} id={some} data={index} green={result[index]}/>)
        })}
        </div>
        <Box onClick={()=>{color(4)}} id={4} data={4} green={result[4]} />
        <div className='flex-div'>
        {new Array(3).fill('').map((some, index)=>{
          return (<Box onClick={()=>{color(index+5)}} green={result[index+5]} id={some+5} data={index+5}/>)
        })}
        </div>
        
     
      </div>
    </div>
  );
}

export default App;
