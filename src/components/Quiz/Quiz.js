import './Quiz.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({ questions, checkAnswer, score }) => {
  const [ userAnswers, setUserAnswers ] = useState([])
  const [ step, setStep ] = useState(0)
  const form = document.querySelector("form")

  const handleChange = (answer) => {
    form[0].disabled = true;
    form[1].disabled = true;

    setUserAnswers([ ...userAnswers, answer ])
    checkAnswer(answer, step)
  }

  const changeQuestion = (event) => {
    event.preventDefault()

    if (event.target.value === 'next' && userAnswers.length !== questions.length) {
      form.reset()
      form[0].disabled = false;
      form[1].disabled = false;
      setStep(step + 1)
    } else if (event.target.value === 'previous') {
      setStep(step - 1)
    }
  }

  return (
    <form>
      { userAnswers.length < questions.length ?
        (<>
          <h2>{questions[step].question}</h2>
          <label>
            <input
              type="radio"
              name="answer"
              checked= { userAnswers[step] === true }
              value="true"
              onChange={() => handleChange(true)}
            />
            True
          </label>
          <label>
            <input
              type="radio"
              name="answer"
              checked= { userAnswers[step] === false }
              value="false"
              onChange={() => handleChange(false)}
              required
            />
            False
          </label>
          <div>
            { step > 0 && <button className="" id="previous-button" value="previous" onClick={event => changeQuestion(event)}>Previous</button>}
            { userAnswers.length <= questions.length - 1 && <button className="" id="next-button" value="next" onClick={event => changeQuestion(event)}>Next</button>}
          </div>
          { userAnswers.length - 1 === step && userAnswers[step] === questions[step].correctAnswer && <p>Correct!</p> }
          { userAnswers.length - 1 === step && userAnswers[step] !== questions[step].correctAnswer && <p>Incorrect!</p> }
          { userAnswers.length - 1 === step && <p>{questions[step].fact}</p> }
        </>)
      : (
        <div>
          <h3>Amazing job! You completed the quiz.</h3>
          <p>Your score is {score}/{questions.length}</p>
        </div>
      )}
    </form>
  )
}

export default Quiz;
