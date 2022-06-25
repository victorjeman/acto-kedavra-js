import { useState } from 'react'
import styled from 'styled-components'

import { ActorForm } from 'components/ActorForm/ActorForm'
import { Button } from 'components/Button/Button'
import { Modal } from 'components/Modal/Modal'

export const AddActor = () => {
  const [showForm, setShowForm] = useState(false)

  return (
    <AddActorStyled>
      <Button onClick={() => setShowForm(true)} size='medium'>
        Add new actor
      </Button>
      {showForm && (
        <Modal title='Add new actor' onClose={() => setShowForm(false)}>
          <ActorForm />
        </Modal>
      )}
    </AddActorStyled>
  )
}

const AddActorStyled = styled.div`
  margin-right: auto;
  margin-left: auto;

  button {
    width: 100%;
  }
`
