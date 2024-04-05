// src/components/AddItem.js

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

const AddItem = ({ addItem }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!name.trim() || !description.trim()) return;
    addItem({ name, description });
    setName('');
    setDescription('');
  };

  return (
    <div>
      <h2>Add New Item</h2>
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
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default connect(null, { addItem })(AddItem);
