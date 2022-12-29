import React, { useState } from 'react';
import styles from './Model.module.css'


function Model(props) {

  const closeHandler=()=>{
    props.onHide()
  }


  return (
   <div className={styles.modal}>
   <span  className={styles.close} onClick={closeHandler} title="Close Modal">×</span>
         <div className={styles['modal-content']}>
          {props.children}
          </div>
    </div> 
    
  );
}

export default Model