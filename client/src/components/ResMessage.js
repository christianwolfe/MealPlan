import React from "react";
import { Message, Container } from "semantic-ui-react";
import API from "../utils/API";
import { useSelector } from "react-redux";


const MessageExampleSuccess = () => {
  const user = useSelector((state) => state.auth.currentUser);
  console.log(user.reservations);
  const resArray = user.reservations;
  const currentRes = API.loadRes('ObjectId("5f403dabd1d0f3653f77f399")')
  console.log(currentRes);
  // for(i = 0; i < resArray.length; i++) {

  // }
  return(

const MessageSuccess = () => (
  <Container textAlign="center">
    <Message
      success
      header="Your user reservation was successful"
      content="You may view your reservation on the user dashboard"
    />
  </Container>
  )};

export default MessageSuccess;
