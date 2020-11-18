import React from "react";
import { Button, Header, Icon, Modal, Container } from "semantic-ui-react";
import DateTimePicker from "./DatePicker";
import axios from "axios";
import { useSelector } from "react-redux";
// import MessageSuccess from "./ResMessage"

function ModalCloseIcon(props) {
  const [open, setOpen] = React.useState(false);
  const [startDate, setStartDate] = React.useState("");
  //bring in user data

  const user = useSelector((state) => state.auth.currentUser);
  console.log(user);

  
  const handleChange = (date) => {
    setStartDate(date);
  };

  function handleSubmit() {
    const resObj = {
      //id of curr user
      userId: user._id,
      location: props.title,
      lastreservation: startDate.toString()
    };
   

    axios.post("/api/reserve", resObj).then((res) => 
      //render message component
      console.log(res.data)
    );
    setOpen(false);
    props.message(true);
  }

  return (
    <Container textAlign="center">
      <Modal
        size="tiny"
        closeIcon
        open={open}
        trigger={<Button>Reserve Time</Button>}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <Header icon="archive" content={`Reserve a time for ${props.title}`} />
        <Modal.Content>
          <DateTimePicker handleChange={handleChange} startDate={startDate} />
        </Modal.Content>
        <Modal.Actions>
          <Button
            inverted
            color="green"
            onClick={() => {
              handleSubmit();
            }}
          >
            <Icon name="checkmark" /> Confirm
          </Button>
        </Modal.Actions>
      </Modal>
    </Container>
  );
}

export default ModalCloseIcon;
