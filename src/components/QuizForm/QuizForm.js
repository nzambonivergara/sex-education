import './QuizForm.css';
import { useState } from 'react'

const QuizForm = ({ questions, checkAnswer, questionNumber, setQuestionNumber, userAnswers, setUserAnswers }) => {
  const [ buttonDisabled, setButtonDisabled ] = useState(true);
  const [ formDisabled, setFormDisabled ] = useState(false);

  const handleChange = (answer) => {
    setFormDisabled(true)
    setButtonDisabled(false)
    setUserAnswers([ ...userAnswers, answer ])
    checkAnswer(answer, questionNumber)
  }

  const changeQuestion = (event) => {
    event.preventDefault()

    if (event.target.parentNode.value === 'next' && userAnswers[questionNumber + 1] === undefined) {
      setFormDisabled(false)
      setButtonDisabled(true)
      setQuestionNumber(questionNumber + 1)
    } else if (event.target.parentNode.value === 'next' && userAnswers[questionNumber + 1] !== undefined) {
      setFormDisabled(true)
      setButtonDisabled(false)
      setQuestionNumber(questionNumber + 1)
    } else if (event.target.parentNode.value === 'previous') {
      setQuestionNumber(questionNumber - 1)
      setFormDisabled(true)
      setButtonDisabled(false)
    }
  }

  return (
    <form className="quiz-form">
      <h3 className="question">{questions[questionNumber].question}</h3>
      <div className="inputs-container">
        <input
          className="true-input"
          type="radio"
          name="answer"
          checked= { userAnswers[questionNumber] === true }
          value="true"
          id="true"
          onChange={() => handleChange(true)}
          disabled={formDisabled}
        />
        <label htmlFor="true" className="true-label">
          True
        </label>
        <input
          className="false-input"
          type="radio"
          name="answer"
          checked= { userAnswers[questionNumber] === false }
          value="false"
          id="false"
          onChange={() => handleChange(false)}
          disabled={ formDisabled || userAnswers[questionNumber] }
        />
        <label htmlFor="false" className="false-label">
          False
        </label>
      </div>
      <div className="arrows-container">
        <button
          className="arrow-button"
          id="previous-button"
          value="previous"
          onClick={ event => changeQuestion(event) }
          disabled={ questionNumber ? buttonDisabled : true }
          aria-label="Previous question"
        >
          <span className="material-icons">
            arrow_back
          </span>
        </button>
        <button
          className="arrow-button"
          id="next-button"
          value="next"
          onClick={ event => changeQuestion(event) }
          disabled={buttonDisabled}
          aria-label="Next question"
        >
          <span className="material-icons">
            arrow_forward
          </span>
        </button>
      </div>
      <p>You have completed {(userAnswers.length / questions.length * 100).toFixed()}% of the quiz!</p>
    </form>
  )
}

export default QuizForm;
