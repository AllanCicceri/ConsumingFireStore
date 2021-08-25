import Api from './api/firestore';
import './App.css';
import React, {useState} from 'react'

function App() {
  const [user, setUser] = useState({name:'', email:''})


  const handleInserUser = () => {
    if(user.name !== "" && user.email !== "")
      Api.createUser(user)

    setUser({name:'', email:''})
  }

  return (
    <div className="app">
        <input type="text" className="frmUser-name"  placeholder="type your name here"
          value={user.name} onChange={e => setUser({name: e.target.value, email: user.email})}/>
        
        <input type="text" className="frmUser-email"  placeholder="type your email adress here"
          value={user.email} onChange={e => setUser({name: user.name, email: e.target.value})}/>

        <button onClick={handleInserUser}>Insert User</button>
    </div>
  );
}

export default App;
