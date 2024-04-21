import React, { useMemo, useState } from 'react'
// useMemohook is React Hook that lets you cache the result of a calculation b/w 
// re-renders

const ExampleComp = () => { 
    const [add,setAdd] = useState(0);
    const [minus,setMinus] = useState(100);
    const multiply = useMemo(()=>{// if we don't use this usememo hook then this function will call everytime when ever component gets re-render
          return add*10  // the result will be store in the cache
    },[add])
    // this is how usememo optimize the code .. if we don't use useMemo hook 
//, then every time when component gets re render multiply will call automatically
  return (
    <div>
        {multiply}
        <hr/>
        <h1>add wala - {add}</h1>
        <button onClick={()=>setAdd(add+1)}>+</button>
        <h1>minus wala - {minus}</h1>
        <button onClick={()=>setMinus(minus-1)}>-</button>
    </div>
  )
}

export default ExampleComp