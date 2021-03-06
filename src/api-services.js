import config from './config'

const APIService = {

  getAccountByEmail(credentials) {
    return fetch(`${config.API_ENDPOINT}/user_route/email/${credentials.email}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(credentials),
    }).then(res => {
      if (!res.ok)
        return res.json().then(e => Promise.reject(e))
      return res.json()
    })
  },

  getAccountById(id) {
    return fetch(`${config.API_ENDPOINT}/user_route/${id}`, {
      method: 'GET'
    }).then(res => {
      if (!res.ok)
        return res.json().then(e => Promise.reject(e))
      return res.json()
    }).catch(err => {
      console.error(err)
    })
  },

  getPinsForUser(user_id) {
    return fetch(`${config.API_ENDPOINT}/pins_route/user_id/${user_id}`, {
      method: 'GET'
    }).then(res => {
      if (!res.ok)
        return res.json().then(e => Promise.reject(e))
      return res.json()
    }).catch(err => {
      console.error(err)
    })
  },

  getMatchesByLocationDateId(params) {
    return fetch(`${config.API_ENDPOINT}/pins_route/matches/${params.location_date_id}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(params),
    }).then(res => {
      if (!res.ok)
        return res.json().then(e => Promise.reject(e))
      return res.json()
    }).catch(err => {
      console.error(err)
    })
  },

  getMessages(room_id) {
    return fetch(`${config.API_ENDPOINT}/chat_route/room_id/${room_id}`, {
      method: 'GET'
    }).then(res => {
      if (!res.ok)
        return res.json().then(e => Promise.reject(e))
      return res.json()
    }).catch(err => {
      console.error(err)
    })
  },

  getConnections(params) {
    return fetch(`${config.API_ENDPOINT}/pins_route/connections`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(params),
    }).then(res => {
      if (!res.ok)
        return res.json().then(e => Promise.reject(e))
      return res.json()
    }).catch(err => {
      console.error(err)
    })
  },

  sendLike(params) {
    return fetch(`${config.API_ENDPOINT}/pins_route/matches/${params.location_date_id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(params),
    }).then(res => {
      if (!res.ok)
        return res.json().then(e => Promise.reject(e))
      return []

    }).catch(err => {
      console.error(err)
    })
  },


  requestDate(params) {
    return fetch(`${config.API_ENDPOINT}/pins_route/matches/request/${params.location_date_id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(params),
    }).then(res => {
      if (!res.ok)
        return res.json().then(e => Promise.reject(e))
      return []
    }).catch(err => {
      console.error(err)
    })
  },


  pushPin(pin) {
    return fetch(`${config.API_ENDPOINT}/pins_route/pin/`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(pin),
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
  },



  createUser(user) {
    return fetch(`${config.API_ENDPOINT}/user_route`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user),
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
  }

}

export default APIService
