import { makeAutoObservable } from 'mobx'

import { API } from 'api/API'

// UTILS
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

    if (checkActorUpdatedSuccesfully(actorNew)) {
      this.setActors([...this.actors, actorNew])
    }
  }

  handleActorUpdate = async (actor) => {
    const actorUpdated = await API.updateActor(actor)

    if (checkActorUpdatedSuccesfully(actorUpdated)) {
      const actorsUpdated = getActorsAfterUpdate(this.actors, actorUpdated)
      this.setActors(actorsUpdated)
    }
  }

  handleActorDelete = async (actor) => {
    const actorDeleted = await API.deleteActor(actor)

    if (checkActorUpdatedSuccesfully(actorDeleted)) {
      const actorsUpdated = getActorsAfterDelete(this.actors, actorDeleted)
      this.setActors(actorsUpdated)
    }
  }

  setActors = (actors) => {
    this.actors = actors
  }
}
