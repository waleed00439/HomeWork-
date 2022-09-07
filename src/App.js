import './App.css';
import {useState} from 'react'

function App() {
const[num1 , setnum1] = useState()
const[num2 , setnum2] = useState()
const [result, setResult]=useState()


const AddNum =()=>{
setResult(parseInt(num1) + parseInt(num2))
}
  return (
    <div className="App">
      <input value={num1} onChange={(e)=>{setnum1(e.target.value)}}/>
      <input value={num2} onChange={(e)=>{setnum2(e.target.value)}}/>
      <br></br>
      <button onClick={AddNum}>+</button>
      <button onClick={AddNum}>-</button>
      <button>*</button>
      <button>%</button>
      <button>/</button>
      <p>{result}</p>
    </div>
  );
}

export default App;
