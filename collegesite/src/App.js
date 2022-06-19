import "./App.css";
import NavBar_ from "./Components/NavBar";
import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./Components/SideBar";
import LoginPage from "./Components/LoginPage";
import Contarea from "./Components/Contentarea";
import Marks from "./Components/Marks";

function App() {
  const [pageToDisplay, setPageToDisplay] = useState(3);
  const [token, setToken] = useState("");

  const onPageChange = (x) => {
    console.log("x: ", x);
    setPageToDisplay(x);
  };
  const tokenFetchHandler = (token) => {
    console.log("in tokenFetchHandler: ", token);
    setToken(token);
  };

  return (
    <>
      <NavBar_ value={100} pageChange={onPageChange} />
      {/* <SideBar /> */}
      {pageToDisplay === 1 && <Contarea token={token} />}
      {pageToDisplay === 2 && <Marks token={token} />}
      {pageToDisplay === 3 && <LoginPage onTokenFetch={tokenFetchHandler} />}
    </>
  );
}

export default App;
