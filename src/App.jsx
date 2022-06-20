import { Hobby } from 'components/Hobby/Hobby'
import { Hobbies } from 'components/Hobbies/Hobbies'
import { ReadMore } from 'components/ReadMore/ReadMore'
import { ActorReadMore } from 'components/ActorReadMore/ActorReadMore'
import { Actor } from 'components/Actor/Actor'
import { Actors } from 'components/Actors/Actors'

import { MY_ACTOR, ACTORS } from 'data'

function App() {
  return (
    <div className='app'>
      {/* <Hobby name='Coding' /> */}
      {/* <Hobbies hobbies={['Hobby 1', 'Hobby 2', 'Hobby 3', 'Hobby 4']} /> */}

      {/* <ReadMore text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam iste excepturi harum reiciendis natus repellendus nostrum at amet, nobis id sint minima voluptas omnis dicta illo architecto! Ipsa, minima molestias!' /> */}

      {/* <ActorReadMore text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam iste excepturi harum reiciendis natus repellendus nostrum at amet, nobis id sint minima voluptas omnis dicta illo architecto! Ipsa, minima molestias!' /> */}

      {/* <Actor {...MY_ACTOR} /> */}
      <Actors actors={ACTORS} />
    </div>
  )
}

export default App
