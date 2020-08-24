import React, { useEffect, useState } from "react";
import { Message, Container } from "semantic-ui-react";
import API from "../utils/API";
import { useSelector } from "react-redux";

const MessageExampleSuccess = () => {
  const user = useSelector((state) => state.auth.currentUser);
  const [reservations, setReservations] = useState([]);
  console.log(reservations);
  
  const fetchRes = async () => {
    API.loadRes(user).then((res) => {
      //state of reservations will now be updated to the response
      setReservations(res.data.reservations)
  })}

  //onload / wait for component to mount
    useEffect(() => {
      fetchRes();
  }, []);

  return (
    <>
    <Container textAlign="center">
      {console.log(reservations)}
      <Message
        success
        header="Your user reservation was successful"
        content="You may view your reservation on the user dashboard"
      />
    </Container>
    <div>
      {reservations.location}
    </div>
    </>
  )
};

export default MessageExampleSuccess;
