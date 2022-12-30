import { createContext } from "react";

const taskContext=createContext({
    Task:{},
    Tasks:[],
    GetTasks:()=>{},
    StoreTask:()=>{},
    GetTask:()=>{},
    addTask:()=>{},
    updateTask:()=>{},
    deleteTask:()=>{}
})
export default taskContext