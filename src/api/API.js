import axios from 'axios'

import { ROUTES } from 'settings/settings'
import { Log } from 'services/Log/Log.service'

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL

const getActors = async () => {
  try {
    const { data } = await axios.get(ROUTES.ACTORS)

    return data
  } catch (error) {
    Log.error({ message: error })
    return []
  }
}

const postActor = async (actor) => {
  try {
    const { data } = await axios.post(ROUTES.ACTORS, actor)

    return data
  } catch (error) {
    Log.error({ message: error })
    return null
  }
}

const updateActor = async (actor) => {
  try {
    const { data } = await axios.put(`${ROUTES.ACTORS}/${actor.id}`, actor)

    return data
  } catch (error) {
    Log.error({ message: error })
    return null
  }
}

const deleteActor = async (actor) => {
  try {
    await axios.delete(`${ROUTES.ACTORS}/${actor.id}`)

    return actor
  } catch (error) {
    Log.error({ message: error })
    return null
  }
}

export const API = {
  getActors,
  postActor,
  updateActor,
  deleteActor,
}
