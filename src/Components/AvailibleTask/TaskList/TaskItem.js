import { Button } from 'bootstrap';
import { useContext, useEffect, useState } from 'react';
import taskContext from '../../Store/TasksContext';
import styles from './TaskItem.module.css'
const TaskItem = (props) => {
  const taskctx=useContext(taskContext)
  const onDeleteHandler=(e)=>{
    const res=taskctx.deleteTask(e.target.value)
    window.confirm('Are You Sure! Delete Task')
  }

 
  return (
    <li className={styles['task-list']}>
      <div className={styles['col-title']}>
        <span>
          <h5 className={styles['title-h5']}>{props.title}</h5>
        </span>
      </div>
      <div className={styles['col-actions']}>
        <span>
          <button type='button' className={styles['actions__edit-btn']} onClick={props.onshow}>
            Edit
          </button>
        </span>
        <span>

          <button type='button' onClick={onDeleteHandler} value={props.id} className={styles['actions__delete-btn']}>
            Delete
          </button>
        </span>
      </div>
    </li>
  );
};
export default TaskItem;
