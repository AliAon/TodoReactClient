import './App.css';
import Header from './Components/Layout/Header'
import Main from './Components/Layout/Main';
import TaskProvider from './Components/Store/TaskProvider';

function App() {
  return (
    <div className="App">
     <Header/>
     <TaskProvider>
       <Main/>
     </TaskProvider>
  

    </div>
  );
}

export default App;
