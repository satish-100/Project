//import { createAsyncThunk } from "@reduxjs/toolkit";

import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchData } from "../../reducers/slice/dataSlice";
import { setData } from "../../reducers/slice/userDataSlice";


const Example4 = ()=>{
  const dispatch = useDispatch()

   const user = async()=>{
    const mydata = await fetch('https://jsonplaceholder.typicode.com/todos/')
    const data = await mydata.json()
    dispatch(setData(data))
  }

  user()

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

 

   return(
    <>
    Redux connectivity
    </>
   )

}

export default Example4

