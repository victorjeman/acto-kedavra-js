import { ACTORS } from 'data'

import { Actors } from 'components/Actors/Actors'
import { AddActor } from 'components/AddActor/AddActor'
import { Footer } from 'components/Footer/Footer'
import { Header } from 'components/Header/Header'
import { SortActors } from 'components/SortActors/SortActors'

function App() {
  return (
    <div className='app'>
      <Header />

      <div className='app-container'>
        <SortActors />
        <Actors actors={ACTORS} />
        <AddActor />
      </div>

      <Footer />
    </div>
  )
}

export default App
