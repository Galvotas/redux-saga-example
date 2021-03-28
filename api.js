import {BASE_URL} from './constants'

class Api {
    getUsers = async () => {
        const response = await fetch(`${BASE_URL}/users`)
        return await response.json()
    }
}

export const {getUsers} = new Api()
