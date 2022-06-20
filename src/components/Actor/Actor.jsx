import styled from 'styled-components'

import { ActorReadMore } from 'components/ActorReadMore/ActorReadMore'
import { Hobbies } from 'components/Hobbies/Hobbies'

export const Actor = ({ image, name, occupation, hobbies, description }) => {
  return (
    <ActorStyled>
      <ImageStyled src={image} alt={name} />

      <ContentStyled>
        <NameStyled>{name}</NameStyled>

        <OcupationStyled>{occupation}</OcupationStyled>

        <Hobbies hobbies={hobbies} />

        <ActorReadMore text={description} />
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
  height: 170px;
  object-fit: cover;
  width: 100%;
  display: block;
`

const ContentStyled = styled.div`
  padding: 10px;

  ul {
    margin-top: 5px;
    margin-bottom: 5px;
  }
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
