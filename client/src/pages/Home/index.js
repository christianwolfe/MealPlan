import React from "react";
import { Header, Message, Button, Icon, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import Maps from "../../components/Maps";
import MapLg from "../../components/MapLg";
import "../../style.css";

export const Home = () => {
  // access to the isAuthenticated property from the auth reducer state
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const showLoginBtn = () => {
    if (!isAuthenticated) {
      return (
        <Button color="black" animated secondary>
          <Button.Content visible>Login</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>
      );
    }
  };

  return (
      <Container>
        <Message className="message-container" size="huge" secondary="true">
          <Header size="huge">Welcome to MealPlan</Header>
          <p style={{ margin: "5px 0 25px" }}>
            Discover a new way to gain access to meal and food pantries in your community.
        </p>
          <Link to="/login">{showLoginBtn()}</Link>
          <p>
            View the map for partipating locations.
          </p>
        </Message>

        <MapLg />
      </Container>
      

  
  );
};

export default Home;
