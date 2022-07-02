import { makeAutoObservable } from 'mobx'

import { ActorService } from 'services/Actor/Actor.service'
import { API } from 'api/API'

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
    if (actorNew) this.addActor(actorNew)
  }

  handleActorUpdate = async (actor) => {
    const actorUpdated = await API.updateActor(actor)
    if (actorUpdated) this.updateActor(actor)
  }

  handleActorDelete = async (actor) => {
    const actorDeleted = await API.deleteActor(actor)
    if (actorDeleted) this.deleteActor(actorDeleted)
  }

  setActors = (actors) => {
    this.actors = actors
  }

  addActor = (actor) => {
    this.actors.push(actor)
  }

  updateActor = (actor) => {
    const actorToUpdateIndex = ActorService.getActorIndexById(this.actors, actor)
    this.actors[actorToUpdateIndex] = actor
  }

  deleteActor = (actor) => {
    const actorToDeleteIndex = ActorService.getActorIndexById(this.actors, actor)
    this.actors.splice(actorToDeleteIndex, 1)
  }
}
