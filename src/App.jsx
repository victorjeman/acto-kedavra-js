import { ACTORS } from 'data'

import { Actors } from 'components/Actors/Actors'
import { SortActors } from 'components/SortActors/SortActors'

function App() {
  return (
    <div className='app'>
      <SortActors />
      <Actors actors={ACTORS} />

      <div id='modal'></div>
    </div>
  )
}

export default App
