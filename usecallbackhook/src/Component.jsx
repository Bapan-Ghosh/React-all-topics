import { memo } from "react";
const Component = ()=>{
    return (
        <>
          <h1>Component is called</h1>
          {console.log("Component is called")}
        </>
    )
}

export default memo(Component);