import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import dataSlice  from './reducers/slice/dataSlice';
import usersData from './reducers/slice/userDataSlice'
import formData from './reducers/slice/formDataSlice';

const rootReducer = combineReducers({
  dataSlice:dataSlice,
  usersData:usersData,
  formData:formData
})
const persistConfig = {
  key: 'root',
  storage 
};
const persistedReducer = persistReducer(persistConfig ,rootReducer)
const store = configureStore({
  reducer: persistedReducer
});

export const persistedStore = persistStore(store)

export default store;
