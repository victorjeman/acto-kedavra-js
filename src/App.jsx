import { Actors } from 'components/Actors/Actors'

const MY_ACTOR = {
  image: 'https://victorjeman.com/_next/static/images/me1-d09094b6bccc9c6c4291d8ab34d48b2f.jpg',
  name: 'Victor Jeman',
  occupation: 'Doing things',
  likes: 30,
  hobbies: ['coding', 'gym', 'reading'],
  description:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam iste excepturi harum reiciendis natus repellendus nostrum at amet, nobis id sint minima voluptas omnis dicta illo architecto! Ipsa, minima molestias!',
}

const ACTORS = [MY_ACTOR, MY_ACTOR, MY_ACTOR, MY_ACTOR]

function App() {
  return (
    <div className='app'>
      {/* <Hobbies hobbies={['Hobby 1', 'Hobby 2', 'Hobby 3']} />
      <ReadMore text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam iste excepturi harum reiciendis natus repellendus nostrum at amet, nobis id sint minima voluptas omnis dicta illo architecto! Ipsa, minima molestias!' /> */}

      {/* <Actor {...MY_ACTOR} /> */}
      <Actors actors={ACTORS} />
    </div>
  )
}

export default App
