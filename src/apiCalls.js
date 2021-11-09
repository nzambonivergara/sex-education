
export const fetchQuestions = () => {
  return fetch('http://localhost:3000/api/v1/questions')
    .then(response => response.json())

}
