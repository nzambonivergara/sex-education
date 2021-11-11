export const fetchQuestions = () => {
  return fetch('http://localhost:3000/api/v1/questions')
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} Error.`)
      }
      return response.json()
    })
}
