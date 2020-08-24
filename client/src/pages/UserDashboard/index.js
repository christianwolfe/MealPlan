import React, { useState, useEffect } from "react";
import { Header, Message, Container } from "semantic-ui-react";
import { useSelector } from "react-redux";
import API from "../../utils/API";

export const UserDashboard = () => {
  // access to the currentUser property from the auth reducer state

  const user = useSelector((state) => state.auth.currentUser);
  const [reservations, setReservations] = useState([]);
  console.log(user.reservations);

  //onload / wait for component to mount
  useEffect(() => {
    API.loadRes(user).then((res) => {
      //state of reservations will now be updated to the response
      setReservations(res.data.reservations);
      console.log(reservations);
    });
  }, []);

  const resHistory = reservations.map((array) => (
    <li key={array.location}>
      {array.location}, {array.lastreservation}
    </li>
  ));

  return (
    <Container>
      <Message className="message-container" size="huge" secondary="true">
        <Header size="huge"> User Dashboard </Header>
        <p>Welcome {user ? user.email : ""}</p>
        <p>View your current reservation below</p>
      </Message>
      <Message>{resHistory}</Message>
    </Container>
  );
};

export default UserDashboard;
