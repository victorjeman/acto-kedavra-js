import { useEffect, useState } from 'react'

import { API } from 'api/API'

import { Actors } from 'components/Actors/Actors'
import { ActorAdd } from 'components/ActorAdd/ActorAdd'
import { Footer } from 'components/Footer/Footer'
import { Header } from 'components/Header/Header'
import { SortActors } from 'components/SortActors/SortActors'

function App() {
  const [actors, setActors] = useState([])

  // UTILS
  const getActorIndexById = (actors, actorToSearch) => {
    const checkActorId = (actor) => actor.id === actorToSearch.id
    const actorIndex = actors.findIndex(checkActorId)

    return actorIndex
  }

  const checkActorUpdatedSuccesfully = (actor) => actor?.id

  const getActorsAfterUpdate = (actorUpdated) => {
    const actorUpdatedIndex = getActorIndexById(actors, actorUpdated)
    const actorsLocal = [...actors]

    actorsLocal[actorUpdatedIndex] = actorUpdated

    return actorsLocal
  }

  const getActorsAfterDelete = (actorUpdated) => {
    const actorUpdatedIndex = getActorIndexById(actors, actorUpdated)
    const actorsLocal = [...actors]

    actorsLocal.splice(actorUpdatedIndex, 1)

    return actorsLocal
  }

  // REQUESTS
  const fetchActors = async () => {
    const actors = await API.getActors()
    setActors(actors)
  }

  const handleActorSubmit = async (actor) => {
    const actorNew = await API.postActor(actor)

    if (checkActorUpdatedSuccesfully(actorNew)) {
      setActors([...actors, actorNew])
    }
  }

  const handleActorUpdate = async (actor) => {
    const actorUpdated = await API.updateActor(actor)

    if (checkActorUpdatedSuccesfully(actorUpdated)) {
      const actorsUpdated = getActorsAfterUpdate(actorUpdated)
      setActors(actorsUpdated)
    }
  }

  const handleActorDelete = async (actor) => {
    const actorDeleted = await API.deleteActor(actor)

    if (checkActorUpdatedSuccesfully(actorDeleted)) {
      const actorsUpdated = getActorsAfterDelete(actorDeleted)
      setActors(actorsUpdated)
    }
  }

  // EFFECTS
  useEffect(() => {
    fetchActors()
  }, [])

  return (
    <div className='app'>
      <Header />

      <div className='app-container'>
        <SortActors />
        <Actors
          actors={actors}
          onActorUpdate={handleActorUpdate}
          onActorDelete={handleActorDelete}
        />
        <ActorAdd onActorSubmit={handleActorSubmit} />
      </div>

      <Footer />
    </div>
  )
}

export default App
