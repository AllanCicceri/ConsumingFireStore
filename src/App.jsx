import Api from './api/firestore';
import './App.css';
import React, {useState} from 'react'

function App() {
  const [user, setUser] = useState({name:'', email:''})
  const [usersList, setUsersList] = useState([])

  const handleInserUser = () => {
    if(user.name !== "" && user.email !== "")
      Api.createUser(user)

    setUser({name:'', email:''})
  }

  const handleListUsers = async () => {
    let  users = await Api.getAllUsers()
    console.log("user: ", users)
    setUsersList(users)
  }

  return (
    <div className="app">
        <label htmlFor="userName"></label>
        <input name="userName" type="text" className="frmUser-name"  placeholder="type your name here"
          value={user.name} onChange={e => setUser({name: e.target.value, email: user.email})}/>
        
        <input type="text" className="frmUser-email"  placeholder="type your email adress here"
          value={user.email} onChange={e => setUser({name: user.name, email: e.target.value})}/>

        <button onClick={handleInserUser}>Insert User</button>
        <button onClick={handleListUsers}>List Users</button>

        <ul>
          {usersList.length > 0 && 
            usersList.map((item, key) => (
              <li key={key}> 
                {item.name}
              </li>
            ))
          }
        </ul>
        
    </div>
  );
}

export default App;
