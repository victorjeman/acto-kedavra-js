import { useState } from 'react'
import styled from 'styled-components'

import { Modal } from 'components/Modal/Modal'

export const SortActors = () => {
  const [showModal, setShowModal] = useState(false)

  const closeModal = () => setShowModal(false)

  return (
    <SortActorsStyled>
      {showModal && (
        <Modal title='Select type of sort' closeModal={closeModal}>
          <SomeContent />
        </Modal>
      )}

      <Button onClick={() => setShowModal(!showModal)}>Sort</Button>
    </SortActorsStyled>
  )
}

const SortActorsStyled = styled.div`
  text-align: center;
  padding: 20px;
`

const SomeContent = styled.div`
  height: 200px;
  max-width: 250px;
  margin-right: auto;
  margin-left: auto;
  background-color: #ddd;
`

const Button = styled.button`
  text-decoration: underline;
`
