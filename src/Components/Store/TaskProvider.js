import { useEffect, useReducer, useState } from 'react'
import TaskContext from '../Store/TasksContext'

const initialstate={
    Task:{},
    Tasks:[]
}

const taskreducer= (state,action)=>{
    if(action.type ==='GetAll'){
        return {
            Task:state.Task,
            Tasks:action.res
        }
    }
    if(action.type ==='AddTask'){
       return {
            Task:state.Task,
            Tasks:state.Tasks
        }
    }
    return initialstate
}
const TaskProvider=(props)=>{
    const [taskstate,dispatchTask]=useReducer(taskreducer,initialstate);

    //get json task
    async function GetTasksHandler(){
    const response = await fetch('http://127.0.0.1:8000/api/todo/')
    const data     = await response.json() 
    dispatchTask({type:'GetAll',res:data})
    return data;
    }

    const addTaskHandler=async (task)=>{
        const response=await fetch('http://127.0.0.1:8000/api/todo/',{
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify(task),
        })
        dispatchTask({type:'AddTask'})
        //Get Latest Tasks Now
        GetTasksHandler()
       
       
    }

    const deleteTaskHandler=async (id)=>{
        const response=await fetch(`http://127.0.0.1:8000/api/todo/${id}/`,{
            method:'delete'
        })
        //Get Lates Tasks and Rerender state
        GetTasksHandler()
        return response
    }
    const taskContext={
        Task:taskstate.Task,
        Tasks:taskstate.Tasks,
        GetTasks:GetTasksHandler,
        addTask:addTaskHandler,
        updateTask:()=>{},
        deleteTask:deleteTaskHandler
    }
    return(
    <TaskContext.Provider value={taskContext}>
        {props.children}
    </TaskContext.Provider>)
}
export default TaskProvider