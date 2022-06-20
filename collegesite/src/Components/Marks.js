import { useState, useEffect } from "react";
import Card from "../Cards/Card";
import styles from "./Contentarea.module.css";

const Marks = (props) => {
  const [data, setData] = useState([]);
  const token = props.token;
  useEffect(() => {
    fetch("http://127.0.0.1:7000/api/marks", {
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
  } else {
    console.log("data.results: ", data.results);
  }
  return (
    <>
      {data.results.map((result) => {
        return (
          <div key={result.subject}>
            <div>
              {/* <h2>
                <center>{result.student}</center>
              </h2> */}
            </div>
            <br />
            <br />
            <Card>
              <div className={styles.contetn}>
                <b>Subject : </b>
                {result.subject}
              </div>
              <div className={styles.contetn}>
                <b>test 1 marks : </b>
                {result.test1Marks}
              </div>
              <div className={styles.contetn}>
                <b>test 2 marks : </b>
                {result.test2Marks}
              </div>
              <div className={styles.contetn}>
                <b>test 3 marks : </b>
                {result.test3Marks}
              </div>
              <div className={styles.contetn}>
                <b>assignment 1 marks : </b>
                {result.assignment1Marks}
              </div>
              <div className={styles.contetn}>
                <b>assignment 2 marks : </b>
                {result.assignment2Marks}
              </div>
              <div className={styles.contetn}>
                <b>external marks : </b>
                {result.externalMarks}
              </div>
              <div>
                <b>Test 1 total : </b>
                {result.test1Total}
              </div>

              <div>
                <b>test 2 total : </b>
                {result.test2Total}
              </div>
              <div>
                <b>test 3 total : </b>
                {result.test3Total}
              </div>
              <div>
                <b>assignment 1 total : </b>
                {result.assignment1Total}
              </div>
              <div>
                <b>assignment 2 total : </b>
                {result.assignment2Total}
              </div>
              <div>
                <b>external total : </b>
                {result.externalTotal}
              </div>
            </Card>
          </div>
        );
      })}
    </>
  );
};

export default Marks;
