import { memo } from "react"

const TestChild  = ({test})=>{


    return (
        <>
         <h1>the random no is {Math.random()}</h1>
         <h1>this is parent component random no is {test}</h1>
        
        </>
    )
}

export default memo(TestChild)