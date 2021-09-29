import React, { useEffect, useState } from "react";
import axios from "axios";
import {Row} from "react-bootstrap"
import { useParams } from "react-router";

import DogImage from "../component/card";

function SubDashboard() {
  const [dogs, setDogs] = useState([]);
  let {dog} = useParams()

  
  useEffect(() => {
      function fetchDogs() {
        axios({
          method: "get",
          url: `https://dog.ceo/api/breed/${dog}/list`,
        })
          .then(({ data }) => {
            setDogs(data.message);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    fetchDogs();
  }, [dog]);

  return (
    <>
      <Row style={{display: "flex", flexDirection: "row"}}>
       
          {dogs.map((dog) => (
            <DogImage dog={dog} />
          ))}
        
      </Row>
    </>
  );
}
export default SubDashboard;