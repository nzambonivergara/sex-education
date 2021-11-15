export const fetchQuestions = () => {
  return fetch('https://sexual-health-api.herokuapp.com/api/v1/questions')
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} Error.`)
      }
      return response.json()
    })
}
