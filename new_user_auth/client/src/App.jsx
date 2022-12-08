import './App.css';
import {useState, useEffect} from 'react';
import React from 'react';
import Popup from "./Popup"


function App() {
  const [userList, setUsers] = useState([])
  const [newUserButtonIsClicked, setButtonState] = useState(false)

  function getUsers()
  {
    fetch("http://localhost:5000/users")
    .then((res) => res.json())
    .then((data) => setUsers(data))
  }

  useEffect(() => {
    try {
      getUsers()
    } catch (error) {
      console.log("Error parsing JSON")
    }
  }, [])

  useEffect(() => {
    let button = document.getElementById("newUserButton");
    if (newUserButtonIsClicked) {
      button.innerHTML = "Exit";
      button.style.backgroundColor = "#ff8164";
    } else {
      button.innerHTML = "New User"
      button.style.backgroundColor = "#b3cf99";
    }
  }, [newUserButtonIsClicked])

  const listItems = userList.map((user, i) =>
    <tr key={i}>
      <td>{user.user_id}</td>
      <td>{user.name}</td>
      <td>{user.age}</td>
      <td>{user.email}</td> 
      <td>{user.job}</td>
      <td>DELETE BUTTON</td>
    </tr>
  );
  
  return (
    <>
      <div>User Management Page</div>
      <div className="App">
        
        <button id="newUserButton" onClick={() => {setButtonState(!newUserButtonIsClicked)}}>New User</button>

          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Job</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {listItems}
            </tbody>
          </table>

          {newUserButtonIsClicked ? <Popup></Popup> : ""}
      </div>
      
    </>
  );
}

export default App;
