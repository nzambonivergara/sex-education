import './Quiz.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({ questions, checkAnswer, score, resetScore }) => {
  const [ userAnswers, setUserAnswers ] = useState([])
  const [ step, setStep ] = useState(0)
  const [ buttonDisabled, setButtonDisabled ] = useState(true)
  const [ formDisabled, setFormDisabled ] = useState(false)

  const handleChange = (answer) => {
    setFormDisabled(true);
    setButtonDisabled(false);
    setUserAnswers([ ...userAnswers, answer ])
    checkAnswer(answer, step)
  }

  const changeQuestion = (event) => {
    event.preventDefault()

    if (event.target.value === 'next' && userAnswers[step+1] === undefined) {
      setFormDisabled(false);
      setButtonDisabled(true);
      setStep(step + 1)
    } else if (event.target.value === 'next' && userAnswers[step+1] !== undefined) {
      setFormDisabled(true);
      setButtonDisabled(false);
      setStep(step + 1)
    } else if (event.target.value === 'previous') {
      setStep(step - 1)
      setFormDisabled(true);
      setButtonDisabled(false);
    }
  }

  const showResult = () => {
    if (userAnswers[step] !== undefined && userAnswers[step] === questions[step].correctAnswer) {
      return (
        <>
          <p>✅ Awesome job!</p>
          <p>{questions[step].fact}</p>
        </>
      )
    } else if (userAnswers[step] !== undefined && userAnswers[step] !== questions[step].correctAnswer) {
      return (
        <>
          <p>❌ Let’s look at that one again!</p>
          <p>{questions[step].fact}</p>
        </>
      )
    }
  }

  const resetQuiz = () => {
    setButtonDisabled(true);
    setUserAnswers([])
    setStep(0)
    resetScore()
  }

  return (
    <section>
      <h2>Myth Busting Quiz</h2>
      { questions[step] ?
        (<form>
          <h2>{questions[step].question}</h2>
          <label>
            <input
              type="radio"
              name="answer"
              checked= { userAnswers[step] === true }
              value="true"
              onChange={() => handleChange(true)}
              disabled={formDisabled}
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
              disabled={ formDisabled || userAnswers[step] }
            />
            False
          </label>
          <div>
            { step > 0 && <button className="" id="previous-button" value="previous" onClick={event => changeQuestion(event)}>Previous</button>}
            <button
              className=""
              id="next-button"
              value="next"
              onClick={event => changeQuestion(event)}
              disabled={buttonDisabled}
            >
              Next
            </button>
          </div>
          { showResult() }
          <p>You have completed {userAnswers.length / questions.length * 100}% of the quiz!</p>
        </form>
      )
      :
      (
        <div>
          <h3>Amazing job! You completed the quiz.</h3>
          <p>Your score is {score}/{questions.length}</p>
          <button onClick={ resetQuiz }>Retake Quiz</button>
          <Link to="/home">Back to Home</Link>
        </div>
      )}
    </section>
  )
}

export default Quiz;
