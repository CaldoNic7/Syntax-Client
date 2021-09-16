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
