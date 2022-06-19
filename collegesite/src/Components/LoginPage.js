import "./LoginPage.css";
import { useState, useEffect } from "react";

const LoginPage = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fetchDetails, setFetchDetails] = useState(false);
  const token = props.token;

  function onUserChange(event) {
    console.log(event.target.value);
    setUsername(event.target.value);
  }

  function onPasswordChange(event) {
    setPassword(event.target.value);
  }

  const submitHandler = (event) => {
    console.log(event);
    event.preventDefault();
    console.log("in submit");
    setFetchDetails((prevState) => {
      return !prevState;
    });
  };

  useEffect(() => {
    console.log("in useEffect");
    if (fetchDetails) {
      fetch("http://127.0.0.1:7000/api/student/login/", {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: username,
          password: password,
        }),
        method: "POST",
      })
        .then((response) => response.json())
        .then((responseJson) => {
          console.log("token: ", responseJson.token);
          props.onTokenFetch(responseJson.token);
        });
    }
  }, [fetchDetails]);

  return (
    <form
      className="login"
      // encType="multipart/form-data"
      onSubmit={submitHandler}
    >
      <input onChange={onUserChange} type="text" placeholder="Username" />
      <input
        onChange={onPasswordChange}
        type="password"
        placeholder="Password"
      />
      <button>Login</button>
    </form>
  );
};

export default LoginPage;
