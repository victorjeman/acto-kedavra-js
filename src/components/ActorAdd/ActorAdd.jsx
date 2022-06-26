import { useState } from 'react'
import styled from 'styled-components'

import { ActorForm } from 'components/ActorForm/ActorForm'
import { Button } from 'components/Button/Button'
import { Modal } from 'components/Modal/Modal'

export const ActorAdd = ({ onActorSubmit }) => {
  const [showForm, setShowForm] = useState(false)

  const handleModalClose = () => setShowForm(false)

  return (
    <ActorAddStyled>
      <ButtonStyled onClick={() => setShowForm(true)} size='medium'>
        Add new actor
      </ButtonStyled>

      {showForm && (
        <Modal title='Add new actor' onClose={handleModalClose}>
          <ActorForm onSubmit={onActorSubmit} onModalClose={handleModalClose} />
        </Modal>
      )}
    </ActorAddStyled>
  )
}

const ActorAddStyled = styled.div`
  margin-right: auto;
  margin-left: auto;
`

const ButtonStyled = styled(Button)`
  width: 100%;
`
