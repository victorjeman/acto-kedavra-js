import { ActorStore } from './actor.store'

class RootStore {
  actorStore

  constructor() {
    this.actorStore = new ActorStore()
  }
}

export const store = new RootStore()
