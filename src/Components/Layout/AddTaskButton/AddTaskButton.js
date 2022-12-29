import { useContext } from 'react';
import taskContext from '../../Store/TasksContext';
import styles from './AddTaskButton.module.css'
const AddTaskButton=(props)=>{
  const cartctx=useContext(taskContext)
  function addtaskhandler(){
    props.onShow();
  }
    return(
    <div class={styles['buton-container']}>
       <button onClick={addtaskhandler} class={styles['add-task-button']}>Add New Task</button>
    </div>
)
}
export default AddTaskButton