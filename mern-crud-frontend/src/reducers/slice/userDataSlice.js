import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: []
}
const usersData = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.users = action.payload
    }
  }
})
console.log("44444444",usersData)
console.log("usersData.reducer",usersData.reducer.name)
export const { setData } = usersData.actions
export default usersData.reducer