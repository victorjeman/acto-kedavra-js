import { nanoid } from 'nanoid'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'

import { store } from 'store'

import { Actor } from 'components/Actor/Actor'

export const Actors = observer(() => {
  const { actorStore } = store
  const { actors, handleActorUpdate, handleActorDelete } = actorStore

  return (
    <ActorsStyled>
      {actors.map((actor) => (
        <ActorsGridItemStyled key={nanoid()}>
          <Actor
            actor={actor}
            onActorUpdate={handleActorUpdate}
            onActorDelete={handleActorDelete}
          />
        </ActorsGridItemStyled>
      ))}
    </ActorsStyled>
  )
})

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
