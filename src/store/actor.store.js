import { makeAutoObservable } from 'mobx'

import { API } from 'api/API'

const getActorIndexById = (actors, actorToSearch) => {
  const checkActorId = (actor) => actor.id === actorToSearch.id
  const actorIndex = actors.findIndex(checkActorId)

  return actorIndex
}

const checkActorUpdatedSuccesfully = (actor) => actor?.id

const getActorsAfterUpdate = (actors, actorUpdated) => {
  const actorUpdatedIndex = getActorIndexById(actors, actorUpdated)
  const actorsLocal = [...actors]

  actorsLocal[actorUpdatedIndex] = actorUpdated

  return actorsLocal
}

const getActorsAfterDelete = (actors, actorUpdated) => {
  const actorUpdatedIndex = getActorIndexById(actors, actorUpdated)
  const actorsLocal = [...actors]

  actorsLocal.splice(actorUpdatedIndex, 1)

  return actorsLocal
}

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

    if (actorNew) this.addActor(actor)
  }

  handleActorUpdate = async (actor) => {
    const actorUpdated = await API.updateActor(actor)

    if (actorUpdated) this.updateActor(actorUpdated)
  }

  handleActorDelete = async (actor) => {
    const actorDeleted = await API.deleteActor(actor)

    if (actorDeleted) this.deleteActor(actor)
  }

  setActors = (actors) => {
    this.actors = actors
  }

  addActor = (actor) => {
    this.actors.push(actor)
  }

  updateActor = (actor) => {
    const actorToUpdateIndex = getActorIndexById(this.actors, actor)
    this.actors[actorToUpdateIndex] = actor
  }

  deleteActor = (actor) => {
    const actorToDeleteIndex = getActorIndexById(this.actors, actor)
    this.actors.splice(actorToDeleteIndex, 1)
  }
}
