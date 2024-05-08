import axios from "axios"
import { useEffect, useState } from "react"

const Example3 = () =>{

const [data , setData] = useState([])

useEffect(()=>{
    getData()
},[])

const fethData = async()=>{
try {
 const apiData = await axios("https://dummyjson.com/products")  
//console.log(apiData.data)
    return apiData.data
    }
    catch(error){
      console.log("Error in fetching data",error)
      throw new Error('Failed to fetch data')
    }
}

const getData = async()=>{
    const data = await fethData()
    setData(data.products)
}

console.log(data)

return(
    <div>
        {data.map((item,index)=>{
            return(
                <table className="root">
                    <tr>
                        <th>Asset Name</th>
                        <th>Image</th>
                    </tr>
                    {data.map((item)=>{
                       return(
                        <tr>
                            <td>{item.category} </td>
                            <td> <img src={item.thumbnail}></img> </td>
                        </tr>
                       )
                    })}
                </table>
            )
        })}
    </div>
)
}

export default Example3