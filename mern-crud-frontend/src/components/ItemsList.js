// src/components/ItemsList.js

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';

const ItemsList = ({ items, getItems }) => {
  useEffect(() => {
    getItems();
  }, [getItems]);

  return (
    <div>
      <h2>Items List</h2>
      <ul>
        {items.map(item => (
          <li key={item._id}>
            <strong>{item.name}</strong>: {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  items: state.items.items
});

export default connect(mapStateToProps, { getItems })(ItemsList);
