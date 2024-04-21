import './App.css';
import { useCallback, useState } from 'react';
import Component from './Component';

function App() {
  const [add,setAdd] = useState(0)
  const [count,setCount] = useState(1)

  // useCallnack basically use to optimize our apps performance so that we can
  // get raid of unnecessary renders 
  const learning =  useCallback(()=>{
           console.log("passing")
  },[add])
  return (
    <div className="App">
      <h1>{add}</h1>
      <button onClick={()=>setAdd(add+1)}>add</button>
      <Component learning={learning}/>  
      {/* although we have used memo in the component but it will still render
          when we click any button , to get raid of this we have to use useCallback
      */}
      <h1>{count}</h1>
      <button onClick={()=>setCount(count*2)}>mul</button>
    </div>
  );
}

export default App;
