import { connect } from 'react-redux';
import { todoList } from '../selectors';
import { deleteItem } from '../actions';
import { ToDo } from '../components/ToDo';

const mapStateToProps = state => ({
  todoList: todoList(state),
});

const mapDispatchToProps = {
  deleteItem,
};

const container = connect(mapStateToProps, mapDispatchToProps)(ToDo);

export { container as ToDo };
