import { Fragment } from 'react';
import AddTaskForm from './AddTaskForm';
import styles from './AddTaskForm.module.css'
const AddTask = (props) => {
  return (
    <Fragment>
     <h1>Add Task Item</h1>
     <AddTaskForm onHide={props.onHide}/>
    </Fragment>
  );
};
export default AddTask;
