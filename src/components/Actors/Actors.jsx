import { observer } from 'mobx-react-lite'
import { toJS } from 'mobx'
import { useEffect } from 'react'
import styled from 'styled-components'

import { useStore } from 'store/root.store'
import { Actor } from 'components/Actor/Actor'

export const Actors = observer(() => {
  const { actorStore } = useStore()
  const { fetchActors, actors } = actorStore

  useEffect(() => {
    fetchActors()
  }, [fetchActors])

  return (
    <ActorsStyled>
      {actors.map((actor) => (
        <ActorsGridItemStyled key={actor.id}>
          <Actor {...toJS(actor)} />
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
