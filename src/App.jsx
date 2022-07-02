import { Actors } from 'components/Actors/Actors'
import { ActorAdd } from 'components/ActorAdd/ActorAdd'
import { Footer } from 'components/Footer/Footer'
import { Header } from 'components/Header/Header'
import { SortActors } from 'components/SortActors/SortActors'

const App = () => {
  return (
    <div className='app'>
      <Header />

      <div className='app-container'>
        <SortActors />

        <Actors />

        <ActorAdd />
      </div>

      <Footer />
    </div>
  )
}

export default App
