// App.jsx

import './App.css';
import {useState, useEffect} from 'react';
import React from 'react';
import Popup from "./Popup"
import axios from 'axios';


function App() {
  const [userList, setUsers] = useState([])
  const [newUserButtonIsClicked, setButtonState] = useState(false)

  // Gets the users from the API and then sets the state in userList
  function getUsers()
  {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }

  // Deletes the user from the database
  function deleteUser(value)
  {
    axios.delete("http://localhost:5000/users", { data : { userData: value}})
        .then((resp) => {console.log("User has been deleted [+]")})
        .catch((err) => {console.log("Failed to delete user [-]")})
    window.location.reload(false);
  }

  useEffect(() => {
    try {
      getUsers()
    } catch (error) {
      console.log("Error parsing JSON")
    }
  }, [])

  // Toggle for "New User" Button
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


  // Creates DOM objects for users from database
  const listItems = userList.map((user, i) =>
    <tr key={i}>
      <td>{user.user_id}</td>
      <td>{user.name}</td>
      <td>{user.age}</td>
      <td>{user.email}</td> 
      <td>{user.job}</td>
      <td><input id={user.user_id} type="submit" value="X" onClick={(event) => { deleteUser(event.target.id)}}/></td>
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
