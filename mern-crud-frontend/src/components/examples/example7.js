import { red } from "@mui/material/colors"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const Example7 = ()=>{
   const [query ,setQuery] = useState("")
    const data = ["satish","ahmd","indore","gwalior"]

     const handelChange = (e)=>{
         console.log(e.target.value)
         setQuery(e.target.value)
     }
     const filterresult = ()=>{
      return  data.filter((item)=>{
          return item.includes(query)
      })
    }
 
  return(
    <>
    <label>Search List:</label>
     <input onChange={handelChange} type="text" value={query}></input>
     
     <ol>
      {filterresult().map((item,index)=>{
             return <li key={index}>{item}</li> 
      })}
  
     </ol>
    </>
  )
}

export default Example7