import { nanoid } from 'nanoid'
import styled from 'styled-components'

import { Actor } from 'components/Actor/Actor'

export const Actors = ({ actors, addActor }) => {
  return (
    <ActorsStyled>
      {actors.map((actor) => (
        <ActorsGridItemStyled key={nanoid()}>
          <Actor {...actor} />
        </ActorsGridItemStyled>
      ))}
    </ActorsStyled>
  )
}

const ActorsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-right: auto;
  margin-left: auto;
`

const ActorsGridItemStyled = styled.div`
  width: 48%;
  margin-bottom: 16px;
`
