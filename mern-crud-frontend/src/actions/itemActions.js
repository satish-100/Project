// src/actions/itemActions.js

import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, UPDATE_ITEM, DELETE_ITEM } from './types';

const url = "http://localhost:5000"
// Get items
export const getItems = () => async dispatch => {
  try {
    const res = await axios.get(`${url}/api/items`);
    dispatch({
      type: GET_ITEMS,
      payload: res.data
    });
  } catch (err) {
    console.error(err);
  }
};

// Add item
export const addItem = (itemData) => async dispatch => {
  try {
    const res = await axios.post(`${url}/api/items`, itemData);
    dispatch({
      type: ADD_ITEM,
      payload: res.data
    });
  } catch (err) {
    console.error(err);
  }
};

// Update item
export const updateItem = (id, itemData) => async dispatch => {
  try {
    const res = await axios.patch(`${url}/api/items/${id}`, itemData);
    dispatch({
      type: UPDATE_ITEM,
      payload: res.data
    });
  } catch (err) {
    console.error(err);
  }
};

// Delete item
export const deleteItem = (id) => async dispatch => {
  try {
    await axios.delete(`/api/items/${id}`);
    dispatch({
      type: DELETE_ITEM,
      payload: id
    });
  } catch (err) {
    console.error(err);
  }
};
