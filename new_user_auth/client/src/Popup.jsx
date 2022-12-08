import {React, useState} from 'react'
import "./App.css"

function FormInput() {
    const [age, setAge] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [job, setJob] = useState("");

    function handleSubmit(event) {
        event.preventDefault()
        console.log(age, name, email, job)
      }
    
    return (
        <form onSubmit={handleSubmit}>
            <div id="formWrapper">
                    
                    Age:
                    <select className="ageClass" onChange={(event) => {setAge(event.target.value)}} required>
                    {
                        [...Array(119)].map((_, i) => i + 1)
                                    .map(i => <option key={i} value={i}>{i}</option>)
                    }
                    </select>
                    
                    Name:
                    <input type="text" className='nameClass' placeholder="Name" onChange={(event) => {setName(event.target.value)}} required></input>
            
                    Email:
                    <input type="text" className='emailClass' placeholder="Email" onChange={(event) => {setEmail(event.target.value)}} required></input>
            
                    Job:
                    <input type="text" className='jobClass' placeholder="Job" onChange={(event) => {setJob(event.target.value)}} required></input>
                
                    <input type="submit" id="formSubmitButton"  value="Submit"/>
            </div>
        </form>
    );
  }

function Popup() {
    return (
        <div className='popWrapper'>
            <div className='box'>
                <FormInput></FormInput>
            </div>
        </div>
    )
}

export default Popup