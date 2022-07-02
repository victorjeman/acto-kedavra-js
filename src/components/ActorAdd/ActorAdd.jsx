import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import styled from 'styled-components'

import { ActorForm } from 'components/ActorForm/ActorForm'
import { Button } from 'components/Button/Button'
import { Modal } from 'components/Modal/Modal'
import { useStore } from 'store/root.store'

export const ActorAdd = observer(() => {
  const { actorStore } = useStore()
  const { handleActorSubmit } = actorStore

  const [showForm, setShowForm] = useState(false)

  const handleModalClose = () => setShowForm(false)

  return (
    <ActorAddStyled>
      <ButtonStyled onClick={() => setShowForm(true)} size='medium'>
        Add new actor
      </ButtonStyled>

      {showForm && (
        <Modal title='Add new actor' onClose={handleModalClose}>
          <ActorForm onSubmit={handleActorSubmit} onModalClose={handleModalClose} />
        </Modal>
      )}
    </ActorAddStyled>
  )
})

const ActorAddStyled = styled.div`
  margin-right: auto;
  margin-left: auto;
`

const ButtonStyled = styled(Button)`
  width: 100%;
`
