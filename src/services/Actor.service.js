// Can be added inside a service to test them easier
const getActorIndexById = (actors, actorToSearch) => {
  const checkActorId = (actor) => actor.id === actorToSearch.id
  const actorIndex = actors.findIndex(checkActorId)

  return actorIndex
}

const checkActorUpdatedSuccesfully = (actor) => actor?.id

const getActorsAfterUpdate = (actorUpdated, actors) => {
  const actorUpdatedIndex = getActorIndexById(actors, actorUpdated)
  const actorsLocal = [...actors]

  actorsLocal[actorUpdatedIndex] = actorUpdated

  return actorsLocal
}

const getActorsAfterDelete = (actorUpdated, actors) => {
  const actorUpdatedIndex = getActorIndexById(actors, actorUpdated)
  const actorsLocal = [...actors]

  actorsLocal.splice(actorUpdatedIndex, 1)

  return actorsLocal
}

export const ActorService = {
  checkActorUpdatedSuccesfully,
  getActorsAfterUpdate,
  getActorsAfterDelete,
}
