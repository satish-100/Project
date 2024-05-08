import { useState } from "react"
import './style.css'
import axios from "axios"
const Example2 = ()=>{

const [data ,setData] = useState([])

     const getData = async()=>{
      const apiData =  await axios.get("https://jsonplaceholder.typicode.com/comments")
      const data =  apiData.data
       setData(data)
        //console.log("ddff",data)
     }
    const result = getData()
     console.log(result)
   
    // console.log(apiData)
    return (
        <>
        <div>
         <table className="root">
          <thead>
         <tr>
                    <th>postId</th>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>body</th>
                </tr>
                </thead>

                {data.filter((item)=>item.id%2==0).map((item,index)=>{
                  return(
                    <tr key={index}>
                    <td>{item.postId}</td>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.body}</td>
                   
                </tr>
                  )
                })}
         </table>
         </div>
        
        </>
    )
}

export default Example2