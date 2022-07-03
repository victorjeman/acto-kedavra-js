import styled from 'styled-components'
import { useState } from 'react'

import { ACTOR_FORM_EDIT } from 'settings/settings'
import { useStore } from 'store/root.store'

import { ActorForm } from 'components/ActorForm/ActorForm'
import { ActorReadMore } from 'components/ActorReadMore/ActorReadMore'
import { Button } from 'components/Button/Button'
import { Hobbies } from 'components/Hobbies/Hobbies'
import { Modal } from 'components/Modal/Modal'

import { ReactComponent as IconClose } from 'assets/images/close.svg'

export const Actor = ({ actor }) => {
  const { actorStore } = useStore()

  const { handleActorUpdate, handleActorDelete } = actorStore

  const { image, name, occupation, hobbies, description } = actor

  const [showEditModal, setShowEditModal] = useState(false)

  const handleModalShow = () => setShowEditModal(true)
  const handleModalClose = () => setShowEditModal(false)

  const handleActorDeleteLocal = () => handleActorDelete(actor)

  return (
    <ActorStyled>
      <ImageStyled src={image} alt={name} />

      <ContentStyled>
        <NameStyled>{name}</NameStyled>

        <OcupationStyled>{occupation}</OcupationStyled>

        <ActorHobbies hobbies={hobbies} />

        <ActorReadMore text={description} />

        <Edit type='secondary' size='small' onClick={handleModalShow}>
          Edit
        </Edit>

        <Delete onClick={handleActorDeleteLocal}>
          <IconCloseStyled />
        </Delete>

        {showEditModal && (
          <Modal onClose={handleModalClose}>
            <ActorForm
              {...actor}
              onSubmit={handleActorUpdate}
              onModalClose={handleModalClose}
              type={ACTOR_FORM_EDIT}
            />
          </Modal>
        )}
      </ContentStyled>
    </ActorStyled>
  )
}

export const ActorStyled = styled.div`
  background: #ffffff;
  border-radius: 10px;
  position: relative;
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.1));
`

const ImageStyled = styled.img`
  height: 173px;
  object-fit: cover;
  width: 100%;
  display: block;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`

const ContentStyled = styled.div`
  padding: 10px;
`

const NameStyled = styled.h3`
  color: #14142b;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 4px;
  font-size: 13px;
`

const OcupationStyled = styled.p`
  color: #4e4b66;
  font-size: 11px;
  font-weight: 300;
  line-height: 1.2;
  margin-bottom: 4px;
`

const Delete = styled.button`
  position: absolute;
  top: -10px;
  right: -10px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 50%;
  width: 24px;
  height: 24px;

  &:focus {
    outline: 3px dashed #6308f7;
    outline-offset: 3px;
  }
`

const IconCloseStyled = styled(IconClose)`
  width: 14px;
  height: 14px;
`

const ActorHobbies = styled(Hobbies)`
  margin-top: 5px;
  margin-bottom: 10px;
`

const Edit = styled(Button)`
  margin-top: 8px;
  width: 100%;
`
