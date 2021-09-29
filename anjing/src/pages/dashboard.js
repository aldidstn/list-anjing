import React, { useEffect, useState } from "react";
import axios from "axios";
import {Row} from "react-bootstrap"

import DogCard from "../component/card";

function Dashboard() {
  const [dogs, setDogs] = useState([]);

  function fetchDog() {

    axios({
      method: "get",
      url: "https://dog.ceo/api/breeds/list/all",
    })
      .then(({ data }) => {
        console.log(data);
        setDogs(Object.keys(data.message));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <>
      <Row style={{display: "flex", flexDirection: "row"}}>
       
          {dogs.map((dog) => (
            <DogCard dog={dog} />
          ))}
        
      </Row>
    </>
  );
}
export default Dashboard;
