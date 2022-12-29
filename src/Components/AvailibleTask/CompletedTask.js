import TaskItem from "./TaskList/TaskItem";
import { useState, useEffect, useContext } from "react";
import styles from './CompletedTask.module.css'
import TaskContext from '../Store/TasksContext'
const CompletedTask = (props) => {
  const taskctx=useContext(TaskContext);
  useEffect(()=>{
    taskctx.GetTasks()
   },[])
 
  return (
    <ul className={styles['ul-list']}>
     {
    taskctx.Tasks.map((el) =>{
        return <TaskItem key={el.id} id={el.id} onshow={props.onShow}  title={el.title} description={el.description}/>
     })
     } 
      
    </ul>
  );
};
export default CompletedTask;
