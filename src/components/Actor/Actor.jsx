import styled from 'styled-components'
import { useState } from 'react'

import { ActorForm } from 'components/ActorForm/ActorForm'
import { ActorReadMore } from 'components/ActorReadMore/ActorReadMore'
import { Button } from 'components/Button/Button'
import { Hobbies } from 'components/Hobbies/Hobbies'
import { Modal } from 'components/Modal/Modal'

export const Actor = ({ image, name, occupation, hobbies, description }) => {
  const [showForm, setShowForm] = useState(false)

  return (
    <ActorStyled>
      <ImageStyled src={image} alt={name} />

      <ContentStyled>
        <NameStyled>{name}</NameStyled>

        <OcupationStyled>{occupation}</OcupationStyled>

        <ActorHobbies hobbies={hobbies} />

        <ActorReadMore text={description} />

        <Edit type='secondary' size='small' onClick={() => setShowForm(true)}>
          Edit
        </Edit>

        {showForm && (
          <Modal onClose={setShowForm}>
            <ActorForm image={image} name={name} occupation={occupation} hobbies={hobbies} description={description} />
          </Modal>
        )}
      </ContentStyled>
    </ActorStyled>
  )
}

export const ActorStyled = styled.div`
  background: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.1));
`

const ImageStyled = styled.img`
  height: 173px;
  object-fit: cover;
  width: 100%;
  display: block;
`

const ContentStyled = styled.div`
  padding: 10px;
`

const NameStyled = styled.h3`
  color: #14142b;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 4px;
`

const OcupationStyled = styled.p`
  color: #4e4b66;
  font-size: 11px;
  font-weight: 300;
  line-height: 1.2;
  margin-bottom: 4px;
`

const ActorHobbies = styled(Hobbies)`
  margin-top: 5px;
  margin-bottom: 10px;
`

const Edit = styled(Button)`
  margin-top: 8px;
  width: 100%;
`
