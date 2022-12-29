import { createContext } from "react";

const taskContext=createContext({
    Task:{},
    Tasks:[],
    GetTasks:()=>{},
    addTask:()=>{},
    updateTask:()=>{},
    deleteTask:()=>{}
})
export default taskContext