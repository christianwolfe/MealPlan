import React from "react";
import { Header, Message, Container } from "semantic-ui-react";
import Locations from "../../components/Locations";
import Maps from "../../components/Maps";



export const PageOne = () => {
  
  // function handleSubmit(e) {
  //   const resObj = {
  //     //id of curr user
  //     userId: user._id,
  //     location: props.title,
  //     lastreservation: startDate,
  //   };
  //   console.log(resObj);
  //   axios.post("/api/reserve", resObj).then((res) => 
  //   //render message component
  //   console.log(res.data));
  //   setOpen(false);
  // }

  return (
    <Container>
      <Message className="message-container" size="huge" secondary="true" style={{margin:"5px"}}>
        <Header size="huge"> Meal Plan </Header>
        <p>Select a location and reserve a time</p>
        <p>
        </p>
      </Message>
      <Maps />
      <Locations />
      </Container>
      
  );
};

export default PageOne;
