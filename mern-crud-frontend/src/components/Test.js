import { useMemo, useState } from 'react'
import TestChild from './TestChild'
const Test  = ()=>{
const [test, setTest] = useState("")

 const handelButton = (e)=>{
      console.log(e)
      setTest(e)
 }

 //onst memoised = useMemo((handelButton))

      let employees = [{name:"test1",salary:10000},{name:"test2",salary:5000},{name:"test3",salary:5500},{name:"test4",salary:6600},
      {name:"test5",salary:7770},{name:"test6",salary:8800}
    ]
    //find the no. of emplyee having salary more than 7000
    //find the of the employee name who is gating second highest salry 
    //do any employee less salary less then 5000
//     var count = 0;
//    const first =  employees.reduce((acc,item)=>{
//         if( item.salary>7000){
//             count ++
//         }
//         return count
//     })
//     console.log(first)

//   const second = employees.sort((a,b)=>{
//         return  b.salary - a.salary 
//   })

//   console.log(second[1].name)

    //    console.log()

    const r = employees.some((item )=>{
             return item.salary <5000
    })

    console.log(r)

    return (
        <>
        <button onClick={()=>handelButton(Math.random())}>click me</button>
         <h1>Test component:{test}</h1>
         <TestChild test = {test}/>

        
        </>
    )
}

export default Test