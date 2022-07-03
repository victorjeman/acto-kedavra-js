import { observer } from 'mobx-react-lite'
import styled from 'styled-components'

import { MEDIA_SIZE } from 'settings/settings'
import { useStore } from 'store/root.store'

import { Actor } from 'components/Actor/Actor'

export const Actors = observer(() => {
  const { actorStore } = useStore()
  const { actors } = actorStore

  return (
    <ActorsStyled>
      {actors.map((actor) => (
        <ActorsGridItemStyled key={actor.id}>
          <Actor actor={actor} />
        </ActorsGridItemStyled>
      ))}
    </ActorsStyled>
  )
})

const ActorsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-right: auto;
  margin-left: auto;
  max-width: 1300px;
`

const ActorsGridItemStyled = styled.div`
  @media ${MEDIA_SIZE.SMALL} {
    width: 50%;
    margin-bottom: 30px;
    padding-right: 8px;
    padding-left: 8px;
  }

  @media ${MEDIA_SIZE.MEDIUM} {
    width: 33.33%;
    margin-bottom: 20px;
    padding-right: 12px;
    padding-left: 12px;
  }

  @media ${MEDIA_SIZE.LARGE} {
    width: 25%;
    margin-bottom: 32px;
    padding-right: 16px;
    padding-left: 16px;
  }
`
