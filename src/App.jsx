import { useEffect } from 'react'

import { useStore } from 'store/root.store'

import { Actors } from 'components/Actors/Actors'
import { ActorAdd } from 'components/ActorAdd/ActorAdd'
import { Footer } from 'components/Footer/Footer'
import { Header } from 'components/Header/Header'
import { SortActors } from 'components/SortActors/SortActors'

const App = () => {
  const { actorStore } = useStore()

  const { fetchActors, handleActorSubmit } = actorStore

  useEffect(() => {
    fetchActors()
  }, [fetchActors])

  return (
    <div className='app'>
      <Header />

      <div className='app-container'>
        <SortActors />

        <Actors />

        <ActorAdd onActorSubmit={handleActorSubmit} />
      </div>

      <Footer />
    </div>
  )
}

export default App
