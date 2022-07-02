import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'

import { store } from 'store'

import { Actors } from 'components/Actors/Actors'
import { ActorAdd } from 'components/ActorAdd/ActorAdd'
import { Footer } from 'components/Footer/Footer'
import { Header } from 'components/Header/Header'
import { SortActors } from 'components/SortActors/SortActors'

const App = observer(() => {
  const { actorStore } = store
  const { handleActorSubmit } = actorStore

  // EFFECTS
  useEffect(() => {
    actorStore.fetchActors()
  }, [actorStore])

  return (
    <div className='app'>
      <Header />

      <div className='app-container'>
        <SortActors />

        {/* Componenta conectata la store */}
        <Actors />

        <ActorAdd onActorSubmit={handleActorSubmit} />
      </div>

      <Footer />
    </div>
  )
})

export default App
