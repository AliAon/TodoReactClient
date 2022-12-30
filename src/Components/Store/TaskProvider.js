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
    if(action.type ==='GetTask'){
        return {
            Task:action.task,
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
    const GetTaskHandler=async (id)=>{
        const response=await fetch(`http://127.0.0.1:8000/api/todo/${id}/`)
        const data     = await response.json()
        dispatchTask({type:'GetTask',task:data})

    }
    const UpdateTaskHandler=async (task)=>{
        const id=task.id
        const updatedTask={
            title:task.title,
            description: task.description,
            completed: task.completed
        }
        const response=await fetch(`http://127.0.0.1:8000/api/todo/${id}/`,{
            method:'put',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify(updatedTask),
        })
        //Now update Task List the component
        GetTasksHandler()

    }
    const TaskHandler=(task)=>{
        dispatchTask({type:'GetTask',task:task})
    }

    const taskContext={
        Task:taskstate.Task,
        Tasks:taskstate.Tasks,
        GetTasks:GetTasksHandler,
        GetTask:GetTaskHandler,
        StoreTask:TaskHandler,
        addTask:addTaskHandler,
        updateTask:UpdateTaskHandler,
        deleteTask:deleteTaskHandler
    }
    return(
    <TaskContext.Provider value={taskContext}>
        {props.children}
    </TaskContext.Provider>)
}
export default TaskProvider