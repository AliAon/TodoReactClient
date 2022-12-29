import { useContext, useState } from 'react';
import taskContext from '../../../Store/TasksContext';
import styles from './AddTaskForm.module.css'

const AddTaskForm = (props) => {
    //setting state for taking inputs
    const [Inputs,setInput]=useState({})
    const tastctx= useContext(taskContext)
    //Taking Title input 
    const enteredTitleHandler=(e)=>{
        const title=e.target.value
        setInput((existingInputs)=>{
            return {
                ...existingInputs,
                title:title,
            }
        })
    }
    //Taking Description input
    const enteredDescriptionHandler=(e)=>{
        const description=e.target.value
        setInput((existingInputs)=>{
            return {
                ...existingInputs,
                description:description,
            }

        })
    }

    //Taking Completed checkbox input
    const isCompleteHandler=(e)=>{
        const iscompleted=e.target.checked
        setInput((existingInputs)=>{
            return {
                ...existingInputs,
                completed:iscompleted,
            }
        })
    }

    //Pushing Task To Backend
    const postTaskHandler=async (Inputs)=>{
        const res=tastctx.addTask(Inputs)
        window.confirm('Are You Sure! Save Task')

    }

    //Submit Task To Backend
    const onsSubmitHandler=(e)=>{
        e.preventDefault()
        postTaskHandler(Inputs)
        props.onHide();
        setInput({
            title:'',
            description:'',
            completed:false
        })
    }


  return (
    <form onSubmit={onsSubmitHandler}>
        <div className={styles['model__container']}>
          <input type="text" placeholder="Enter Title" onChange={enteredTitleHandler} value={Inputs.title}  required/>
          <input type="text" placeholder="Enter Description" name="email"  onChange={enteredDescriptionHandler} value={Inputs.description}  required/>
          Completed: <input type="checkbox"  onChange={isCompleteHandler} checked={Inputs.completed}/>
          <div className={styles.clearfix}>
             <button type="submit"  className={styles['model__deletebtn']}>Save</button>
          </div>
        </div>
    </form>
  );
};
export default AddTaskForm;
