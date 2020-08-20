import React from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import DateTimePicker from "./DatePicker";

function ModalCloseIcon(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      size="tiny"
      closeIcon
      open={open}
      trigger={<Button>Reserve Time</Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header icon="archive" content={`Reserve time for ${props.title}`}/>
      <Modal.Content>
        <DateTimePicker />
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => {setOpen(false)}}>
          <Icon name="checkmark" /> Confirm
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalCloseIcon;
