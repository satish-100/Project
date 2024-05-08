import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // firstName: '',
  // lastName: '',
  // email: '',
    formData : {}

}

const formData = createSlice({
  name:"formData",
  initialState,
  reducers:{
    storeFormData:(state,action)=>{
           state.formData = { ...state.formData , ...action.payload}
    }
  }
})
console.log("ppppppppp",formData)

export const {storeFormData} =  formData.actions
export default formData.reducer