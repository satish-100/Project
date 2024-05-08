import { red } from "@mui/material/colors"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const Example6 = ()=>{
        const [color,setColor] = useState("blue")
    const handelChange = (e)=>{
        console.log(e.target.value)
        setColor(e.target.value)
    }
     
 
  return(
    <>
    <div style={{backgroundColor:color,width:"50%"}}>
    <select name="color" onChange={handelChange}> 
    <option value="red" >Red </option>
      <option value="black"> Black</option>
    </select>
    </div>
    </>
  )
}

export default Example6