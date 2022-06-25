import { useEffect, useState } from 'react'

import { API } from 'api/API'

import { Actors } from 'components/Actors/Actors'
import { AddActor } from 'components/AddActor/AddActor'
import { Footer } from 'components/Footer/Footer'
import { Header } from 'components/Header/Header'
import { SortActors } from 'components/SortActors/SortActors'

function App() {
  const [actors, setActors] = useState([])

  const handleAddActor = (actor) => {
    const actorsUpdated = [...actors, actor]
    setActors(actorsUpdated)
  }

  useEffect(() => {
    ;(async () => {
      const actors = await API.getActors()
      setActors(actors)
    })()
  }, [])

  return (
    <div className='app'>
      <Header />

      <div className='app-container'>
        <SortActors />
        <Actors actors={actors} />
        <AddActor handleAddActor={handleAddActor} />
      </div>

      <Footer />
    </div>
  )
}

export default App
