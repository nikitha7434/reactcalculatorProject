
import React  from 'react';
import style from './App.css';


import { useState } from 'react';


function App() {
  const[firstnumber,setFirstNumber] = useState("");
  const[secondnumber ,setSecondNumber] = useState("");
  const[erroeMessage,setErrorMessage] =useState("");
  const[result, setResult] = useState(""); 
  const[success,setSuccess] =useState("");
  const[resultMessage,setResultMeassage] =useState("");



  const valideinput = () => {
    // validation function
    if(firstnumber==='')
    {
      setErrorMessage("Error : firstNumber can't be empty");
      return false;
    }
    else if(secondnumber===''){
      setErrorMessage("Error : secondNumber can't be empty");
      return false;
    }

    if(isNaN(firstnumber) || isNaN(secondnumber)){
      setErrorMessage("Input must be Number");
      return false;
    }
    setErrorMessage("");
    return true;

  }


  const handdleAddition = () => {
    if(!valideinput()){
        return;
    }

    setResult(Number(firstnumber)+Number(secondnumber));
    setResultMeassage("Result : ");
    setSuccess("Success : Your result Show in above");
}
const handdleSubtraction= ()=> {
    if(!valideinput()){
        return;
    }

    setResult(Number(firstnumber)-Number(secondnumber));
    setResultMeassage("Result : ");
    setSuccess("Success : Your result Show in above");
}

const handdleDivision= ()=> {
    if(!valideinput){
        return;
    }

    setResult(Number(firstnumber)/Number(secondnumber));
    setResultMeassage("Result : ");
    setSuccess("Success : Your result Show in above");
}
  const handdleMultiplication = ()=> {
    if(!valideinput){
        return;
    }

    setResult(Number(firstnumber)/Number(secondnumber));
    setResultMeassage("Result : ");
    setSuccess("Success : Your result Show in above");
}

  return (
    <div id='main-div'>
      <h1 id='heading'>React Claculator</h1>
     <div className='inputfield'>
     <input type='text' name='num1' value={firstnumber}  
     onChange={(e) => 
      setFirstNumber(e.target.value)
     } 
     placeholder='Num 1'/>
     <input type='text' name='num2' value={secondnumber} 
     onChange ={ (e) => setSecondNumber(e.target.value)}    
     placeholder='Num 2'/>
     </div>

     <div className='buttonsdiv'>
      <button onClick={handdleAddition}>+</button>
      <button onClick={handdleSubtraction}>-</button>
      <button onClick={handdleMultiplication}>*</button>
      <button onClick={handdleDivision}>/</button>
      
    </div>

   <div>
    {
      (
        <h3>{resultMessage} {result}</h3>
        
      )
    }
    <p style={{color:"green"}}>
      {success}
    
    </p>
   </div>
   {
    <div className='error-message'>{erroeMessage} </div>
   }
    

</div>
  )
}

export default App;
