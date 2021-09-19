import apiUrl from '../apiConfig'
import axios from 'axios'

export const createGoal = (user, goalData) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/goals/',
    headers: {
      Authorization: `TOKEN ${user.token}`
    },
    data: {
      goal: {
        name: goalData.name,
        characters: goalData.characters,
        language: goalData.language,
        date: goalData.date,
        time: goalData.time,
        measurement: goalData.measurement,
        frequency: goalData.frequency
      }
    }
  })
}

export const indexUserGoals = user => {
  return axios({
    method: 'GET',
    url: apiUrl + '/goals/',
    headers: {
      Authorization: `TOKEN ${user.token}`
    }
  })
}

export const showGoal = (user, goalId) => {
  return axios({
    method: 'GET',
    url: apiUrl + `/goals/${goalId}/`,
    headers: {
      Authorization: `TOKEN ${user.token}`
    }
  })
}

export const updateGoal = (user, goalId, goalData) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + `/goals/${goalId}/`,
    headers: {
      Authorization: `TOKEN ${user.token}`
    },
    data: {
      goal: {
        name: goalData.name,
        characters: goalData.characters,
        language: goalData.language,
        date: goalData.date,
        time: goalData.time,
        measurement: goalData.measurement,
        frequency: goalData.frequency
      }
    }
  })
}

export const deleteGoal = (user, goalId) => {
  return axios({
    method: 'DELETE',
    url: apiUrl + '/goals/' + goalId,
    headers: {
      Authorization: `TOKEN ${user.token}`
    }
  })
}
