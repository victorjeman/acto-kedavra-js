import { makeAutoObservable } from 'mobx'

import { API } from 'api/API'
import { ActorService } from 'services/Actor.service'

export class ActorStore {
  actors = []

  constructor() {
    makeAutoObservable(this)
  }

  fetchActors = async () => {
    const actors = await API.getActors()
    this.setActors(actors)
  }

  handleActorSubmit = async (actor) => {
    const actorNew = await API.postActor(actor)

    if (ActorService.checkActorUpdatedSuccesfully(actorNew, this.actors)) {
      this.setActors([...this.actors, actorNew])
    }
  }

  handleActorUpdate = async (actor) => {
    const actorUpdated = await API.updateActor(actor)

    if (ActorService.checkActorUpdatedSuccesfully(actorUpdated, this.actors)) {
      const actorsUpdated = ActorService.getActorsAfterUpdate(actorUpdated, this.actors)
      this.setActors(actorsUpdated)
    }
  }

  handleActorDelete = async (actor) => {
    const actorDeleted = await API.deleteActor(actor)

    if (ActorService.checkActorUpdatedSuccesfully(actorDeleted, this.actors)) {
      const actorsUpdated = ActorService.getActorsAfterDelete(actorDeleted, this.actors)
      this.setActors(actorsUpdated)
    }
  }

  setActors = (actors) => {
    this.actors = actors
  }
}
