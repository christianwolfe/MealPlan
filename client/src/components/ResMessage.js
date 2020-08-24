import React, { useEffect, useState } from "react";
import { Message, Container } from "semantic-ui-react";
import API from "../utils/API";
import { useSelector } from "react-redux";


const MessageExampleSuccess = () => {
  const user = useSelector((state) => state.auth.currentUser);
  const [reservations, setReservations] = useState([]);
  console.log(user.reservations);

  //onload / wait for component to mount
    useEffect(() => {
    API.loadRes(user).then((res) => {
      //state of reservations will now be updated to the response
      setReservations(res.data.reservations)

      console.log(reservations)

      

    });
  },[]);


  const resHistory = reservations.map((array) => 
  <li key={array.location}>{array.location}, {array.lastreservation}</li>)

  // for(i = 0; i < resArray.length; i++) {

  // }



  return (
    <Container textAlign="center">
      <Message
        success
        header="Your user reservation was successful"
        content="You may view your reservation below"
      />
      
    </Container>
  )
};

export default MessageExampleSuccess;
