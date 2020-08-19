import React from 'react'
import { Button, Dropdown, Header, Icon, Modal } from 'semantic-ui-react'

function ModalCloseIcon() {
  const [open, setOpen] = React.useState(false)
  const time = [
    { key: 1, text: '9:00 am', value: 1 },
    { key: 2, text: '9:15 am', value: 2 },
    { key: 3, text: '9:30 am', value: 3 },
  ]
  const date = [
    { key: 1, text: '8/19/2020', value: 1 },
    { key: 2, text: '8/20/2020', value: 2 },
    { key: 3, text: '8/21/2020', value: 3 },
  ]

  return (
    <Modal
      closeIcon
      open={open}
      trigger={<Button>Reserve Time</Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header icon='archive' content='Reserve a Time' />
      <Modal.Content>
      <Dropdown clearable options={time} selection />
      <Dropdown clearable options={date} selection />
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          <Icon name='checkmark' /> Confirm
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalCloseIcon