import { useState } from 'react';
import './App.css';
import Employee from './components/Employee';
function App() {

  const [role,setRole] = useState('dev');
  const showEmployee = true;

  return (
    <div className="App">
    {showEmployee ? (
      <>
      <input type="text" onChange={(e)=>{
        setRole(e.target.value);
      }}/>
       <Employee name="Gautham" role={role}/>
       <Employee name="Sam"/> 
       <Employee/>
       <Employee/>
       </>
       ):(
<p> You cannot see Employee!</p>
)}
      
    </div>
  );
}

export default App;
