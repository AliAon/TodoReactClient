import { Modal } from 'bootstrap';
import AddTaskButton from './AddTaskButton/AddTaskButton';
import main from './Main.module.css';
import Model from '../UI/Model';
import { useState } from 'react';
import TaskTabs from './TaskTabs';
import AddTask from '../AvailibleTask/TaskList/TaskOpertaions/AddTask';
import EditTask from '../AvailibleTask/TaskList/TaskOpertaions/EditTask';
const Main=(props)=>{
    const [isShowAddTask, setAddShow] = useState(false);
    const [isShowEditTask, setEditShow] = useState(false);

    //onshow add task
   const onShowAddTaskHandler=()=>{setAddShow(true)}
   //onhide add task
   const onHideAddTaskHandler=()=>{setAddShow(false)}
    //onshow edit task
   const onShowEditTaskHandler=()=>{setEditShow(true)}
    //onhide edit task
   const onHideEditTaskHandler=()=>{setEditShow(false)}
    return (
        <main className={main['main-content']}>
            <AddTaskButton onShow={onShowAddTaskHandler}/>
            {isShowAddTask && 
            <Model onHide={onHideAddTaskHandler} >
                <AddTask onHide={onHideAddTaskHandler}/>
            </Model>
            }
              {isShowEditTask && <Model onHide={onHideEditTaskHandler}>
                <EditTask onHide={onHideEditTaskHandler}/>
            </Model>}

            <TaskTabs onShow={onShowEditTaskHandler}/>
        </main>
    )
}
export default Main