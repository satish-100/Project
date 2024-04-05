// src/components/EditItem.js

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateItem } from '../actions/itemActions';

const EditItem = ({ item, updateItem }) => {
  const [name, setName] = useState(item?.name);
  const [description, setDescription] = useState(item?.description);

  const handleSubmit = e => {
    e.preventDefault();
    if (!name.trim() || !description.trim()) return;
    updateItem(item?._id, { name, description });
  };

  return (
    <div>
      <h2>Edit Item</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Update Item</button>
      </form>
    </div>
  );
};

export default connect(null, { updateItem })(EditItem);
