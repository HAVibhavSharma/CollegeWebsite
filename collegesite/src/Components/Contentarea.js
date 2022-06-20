import { useState, useEffect } from "react";
import Card from "../Cards/Card";
import styles from "./Contentarea.module.css";

const Contarea = (props) => {
  const [data, setData] = useState([]);
  const token = props.token;
  useEffect(() => {
    fetch("http://127.0.0.1:7000/api/student", {
      headers: {
        Authorization: "Token " + token,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [token]);

  if (!data.results) {
    console.log("test");
    return;
  }

  console.log(data.results[0].id);

  return (
    <>
      <Card>
        <div>
          <h2>
            <center>{data.results[1].name}</center>
          </h2>
        </div>
        <br />
        <br />
        <div className={styles.contetn}>
          <b>Student ID : </b>
          {data.results[1].id}
        </div>
        <div>
          <b>Email : </b>
          {data.results[1].email}
        </div>

        <div>
          <b>Phone : </b>
          {data.results[1].phone}
        </div>
        <div>
          <b>Branch : </b>
          {data.results[1].branch}
        </div>
        <div>
          <b>Semester : </b>
          {data.results[1].current_sem}
        </div>
      </Card>
    </>
  );
};

export default Contarea;
