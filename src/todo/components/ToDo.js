import React from 'react';
import PropTypes from 'prop-types';

export const ToDo = ({ todoList, deleteItem }) => (
  <ol>
    {todoList.map((item, index) =>
      <li style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
        {item.name} - <button onClick={() => deleteItem(index)}>X</button>
      </li>)}
  </ol>
);

ToDo.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteItem: PropTypes.func.isRequired,
};
