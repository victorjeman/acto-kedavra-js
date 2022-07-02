const getActorIndexById = (actors, actorToSearch) => {
  const checkActorId = (actor) => actor.id === actorToSearch.id
  const actorIndex = actors.findIndex(checkActorId)

  return actorIndex
}

export const ActorService = {
  getActorIndexById,
}
