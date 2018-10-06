import { connect } from 'react-redux';
import { addItem } from '../actions';
import { CreateItem } from '../components/CreateItem';

const mapDispatchToProps = {
  addItem,
};

const container = connect(null, mapDispatchToProps)(CreateItem);

export { container as CreateItem };