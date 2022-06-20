import { useState, useEffect } from "react";
import styles from "./LoginPage.module.css";
const LoginPage = (props) => {
  props.reset("");
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
    console.log(fetchDetails);
    if (fetchDetails) props.setPageToDisplay(4);
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
    <>
      <div className={styles.poscontainer}>
        <form
          className="login"
          // encType="multipart/form-data"
          onSubmit={submitHandler}
        >
          <div className={styles.outercontainer}>
            <div className={styles.label}>Welcome</div>
            <input
              className={styles.input}
              onChange={onUserChange}
              type="text"
              placeholder="Username"
            />
            <input
              className={styles.input}
              onChange={onPasswordChange}
              type="password"
              placeholder="Password"
            />
            <button className={styles.submit}>Login</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
