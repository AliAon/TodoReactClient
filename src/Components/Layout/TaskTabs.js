import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CompletedTask from '../AvailibleTask/CompletedTask';
function TaskTabs(props) {
  const [key, setKey] = useState('completed');

 

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="completed" title="Completed">
       <CompletedTask onShow={props.onShow}/>
      </Tab>
      <Tab eventKey="uncompleted" title="Uncompleted">
      
      </Tab>
    </Tabs>
  );
}

export default TaskTabs;