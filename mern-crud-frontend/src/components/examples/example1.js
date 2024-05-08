import { useState } from "react"
import './style.css'

const Example1 = ()=>{

const [data ,setData] = useState([])

      const fethData = fetch("https://jsonplaceholder.typicode.com/comments")
       fethData.then((res)=>
              res.json()
           ).then((d)=>{
              setData(d)
         // console.log("9999",d)
       })

       console.log(data)
      const result =  data.filter((item)=> item.id%2 ==0)

      console.log("result",result)
    return (
        <>
        <div>
         <table className="root">
         <tr>
                    <th>postId</th>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>body</th>
                </tr>

                {result.map((item,index)=>{
                  return(
                    <tr>
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

export default Example1