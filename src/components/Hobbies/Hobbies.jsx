import styled from 'styled-components'
import { nanoid } from 'nanoid'

import { Hobby } from 'components/Hobby/Hobby'

export const Hobbies = ({ hobbies, ...rest }) => {
  return (
    <HobbiesStyled {...rest}>
      {hobbies.map((hobby) => (
        <HobbiesItemStyled key={nanoid()}>
          <Hobby name={hobby} />
        </HobbiesItemStyled>
      ))}
    </HobbiesStyled>
  )
}

const HobbiesStyled = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const HobbiesItemStyled = styled.li`
  margin-right: 4px;
  display: inline-block;
`
