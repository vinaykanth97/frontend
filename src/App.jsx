import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [passwordCheck, setpasswordCheck] = useState([])
  const ScreenShotHandler = (e) => {
    e.preventDefault()
    fetch('../../post', {
      method: "POST",
      body: JSON.stringify(passwordCheck),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },

    }).then((result) => {
      console.log(result, passwordCheck)
    })
  }
  const FormHandler = (e) => {
    setpasswordCheck({
      ...passwordCheck,
      [e.target.name]: e.target.value
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo"
          alt="logo" />

        <p>A simple React app.....</p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <form action="../../post" method="post"
          className="form" onSubmit={ScreenShotHandler}>
          <input type="text" name="username" placeholder="UserName" onChange={FormHandler} required/>
          <input type="password" name="password" placeholder="Generated Password" onChange={FormHandler} required/>
          <button type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
