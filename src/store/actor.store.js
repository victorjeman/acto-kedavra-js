import { makeAutoObservable } from 'mobx'

import { API } from 'api/API'
import { ActorService } from 'services/Actor.service'

export class ActorStore {
  actors = []

  get actorNames() {
    return this.actors.map((actor) => actor.name)
  }

  get actorHobbies() {
    return this.actors.map((actor) => actor.hobbies)
  }

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
      this.addActor(actor)

      // this.setActors([...this.actors, actorNew])
    }
  }

  handleActorUpdate = async (actor) => {
    const actorUpdated = await API.updateActor(actor)

    if (ActorService.checkActorUpdatedSuccesfully(actorUpdated, this.actors)) {
      this.updateActor(actorUpdated)

      // const actorsUpdated = ActorService.getActorsAfterUpdate(actorUpdated, this.actors)
      // this.setActors(actorsUpdated)
    }
  }

  handleActorDelete = async (actor) => {
    const actorDeleted = await API.deleteActor(actor)

    if (ActorService.checkActorUpdatedSuccesfully(actorDeleted, this.actors)) {
      this.deleteActor(actorDeleted)

      // const actorsUpdated = ActorService.getActorsAfterDelete(actorDeleted, this.actors)
      // this.setActors(actorsUpdated)
    }
  }

  setActors = (actors) => {
    this.actors = actors
  }

  addActor = (actor) => {
    this.actors.push(actor)
  }

  deleteActor = (actor) => {
    const actorToDeleteIndex = ActorService.getActorIndexById(this.actors, actor)
    this.actors.splice(actorToDeleteIndex, 1)
  }

  updateActor = (actor) => {
    const actorToUpdateIndex = ActorService.getActorIndexById(this.actors, actor)
    this.actors[actorToUpdateIndex] = actor
  }
}
