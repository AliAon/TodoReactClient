import { Fragment } from 'react';
import EditTaskForm from './EditTaskForm';
const EditTask = (props) => {
  return (
    <Fragment>
     <h1>Edit Task Item</h1>
     <EditTaskForm onHide={props.onHide}/>
    </Fragment>
  );
};
export default EditTask;
