import axios from 'axios'
import { Log } from 'services/Log/Log.service'

axios.defaults.baseURL = process.env.REACT_APP_API_BASE

const getActors = async () => {
  try {
    const { data } = await axios.get('actors')

    return data
  } catch (error) {
    Log.warning({ message: error })
    return []
  }
}

export const API = {
  getActors,
}
