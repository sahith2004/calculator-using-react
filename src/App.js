import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [input,setInput] = useState('');
  const [display,setDisplay]= useState(0);
  function clickHandler(char){
      setInput(input+char)
  }
  const getAnswer = (e)=>{
      setInput(e.target.value)
      
  }
  const displayAnswer = ()=>{
      
      setDisplay(
      eval(input))

  }
  const clearInput = ()=>{
    setInput('')
    setDisplay(0)
  }
  return (
    <>
     
    <div className='main-calculator'>
        <input value={input} name="input" type="text" onChange={getAnswer}></input>
        <h2>The result is {display}</h2>
       
          <div className='main-button'>
            <button className='btn' onClick={()=>{setInput(input+'1')}}>1</button>
            <button className='btn' onClick={()=>{setInput(input+'2')}}>2</button>
            <button className='btn' onClick={()=>{setInput(input+'3')}}>3</button>
            <button className='btn' onClick={()=>{setInput(input+'4')}}>4</button>
            <button className='btn' onClick={()=>{setInput(input+'5')}}>5</button>
            <button className='btn' onClick={()=>{setInput(input+'6')}}>6</button>
            <button className='btn' onClick={()=>{setInput(input+'7')}}>7</button>
            <button className='btn' onClick={()=>{setInput(input+'8')}}>8</button>
            <button className='btn' onClick={()=>{setInput(input+'9')}}>9</button>
            <button className='btn' onClick={()=>{setInput(input+'0')}}>0</button>
            <button className='btn' onClick={()=>{setInput(input+'+')}}>+</button>
            <button className='btn' onClick={()=>{setInput(input+'-')}}>-</button>
            <button className='btn' onClick={()=>{setInput(input+'*')}}>X</button>
            <button className='btn' onClick={()=>{setInput(input+'/')}}>/</button>
            <button className='btn btn-n' onClick={displayAnswer}>=</button>
          <button className='btn btn -n'  onClick={clearInput }>C</button>
          </div>
         

      </div>
  
    
   
    </>
  );
}

export default App;
