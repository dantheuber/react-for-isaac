import React from 'react';
import PropTypes from 'prop-types';

export const CreateItem = ({ addItem }) => (
  <button onClick={addItem}>Create Item</button>
);

CreateItem.propTypes = {
  addItem: PropTypes.func.isRequired,
};