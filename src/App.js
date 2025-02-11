import logo from './logo.svg';
import './App.css';
import Box from './component/Box';
import { useEffect, useState } from 'react';


function App() {
  const [array ,setArray] = useState([]);
  const [result, setResult] = useState({
   
  })
  const resultObj  = {};
  // const runner = () =>{
  //  if(array.length === 0) return 
  // if(array.length !== 0){
  //     let time = setTimeout(()=>{
  //       let index = array[array.length-1];
  //       setResult((prev)=>({...prev, [index]:false}))
  //       setArray((prev)=>prev.slice(0,-1))
  //       runner()
  //       if (array.length === 1) clearTimeout(time)
  //     }, 2000)
  
  //   }
   
  // }
  useEffect(()=>{
    if(array.length === 0) return 
    let timer  = setTimeout(()=>{
      setArray((prev)=>prev.slice(0, -1))
    }, 2000)
    return ()=>{clearTimeout(timer)}
  })
  const color = (index)=>{
    setResult((prev) => ({ ...prev,[index]:true}))
    setArray((prev) => (prev.includes(index)? array: [...array, index]))
    if(array.length >= 6){
      //runner()
    }
  }
  console.log(result, array.length)
  console.log(array)
  return (
    <div className="App">
      <div className='flex'>
        <div className='flex-div'>
        {new Array(3).fill('').map((some, index)=>{
          return (<Box onClick={()=>{color(index)}} id={some} data={index} green={array.includes(index)}/>)
        })}
        </div>
        <Box onClick={()=>{color(4)}} id={4} data={4} green={array.includes(4)} />
        <div className='flex-div'>
        {new Array(3).fill('').map((some, index)=>{
          return (<Box onClick={()=>{color(index+5)}} green={array.includes(index+5)} id={some+5} data={index+5}/>)
        })}
        </div>
        
     
      </div>
    </div>
  );
}

export default App;
