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
        chars_per_min: goalData.chars_per_min,
        language: goalData.language,
        target_date: goalData.target_date,
        practice_num: goalData.practice_num,
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
    url: apiUrl + '/goals/' + goalId,
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
        chars_per_min: goalData.chars_per_min,
        language: goalData.language,
        target_date: goalData.target_date,
        practice_num: goalData.practice_num,
        measurement: goalData.measurement,
        frequency: goalData.frequency
      }
    }
  })
}
