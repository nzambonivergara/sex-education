import './Quiz.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({ questions, checkAnswer, score, resetScore }) => {
  const [ userAnswers, setUserAnswers ] = useState([])
  const [ questionNumber, setQuestionNumber ] = useState(0)
  const [ buttonDisabled, setButtonDisabled ] = useState(true)
  const [ formDisabled, setFormDisabled ] = useState(false)

  const handleChange = (answer) => {
    setFormDisabled(true);
    setButtonDisabled(false);
    setUserAnswers([ ...userAnswers, answer ])
  }

  const changeQuestion = (event) => {
    event.preventDefault()

    if (event.target.parentNode.value === 'next' && userAnswers[questionNumber + 1] === undefined) {
      setFormDisabled(false);
      setButtonDisabled(true);
      setQuestionNumber(questionNumber + 1)
    } else if (event.target.parentNode.value === 'next' && userAnswers[questionNumber + 1] !== undefined) {
      setFormDisabled(true);
      setButtonDisabled(false);
      setQuestionNumber(questionNumber + 1)
    } else if (event.target.parentNode.value === 'previous') {
      setQuestionNumber(questionNumber - 1)
      setFormDisabled(true);
      setButtonDisabled(false);
    }
  }

  const showResult = () => {
    if (userAnswers[questionNumber] !== undefined && userAnswers[questionNumber] === questions[questionNumber].correctAnswer) {
      return (
        <div className="fact-container">
          <p className="result">✅ Awesome job!</p>
          <p>{questions[questionNumber].fact}</p>
        </div>
      )
    } else if (userAnswers[questionNumber] !== undefined && userAnswers[questionNumber] !== questions[questionNumber].correctAnswer) {
      return (
        <div className="fact-container">
          <p className="result">❌ Let’s look at that one again!</p>
          <p>{questions[questionNumber].fact}</p>
        </div>
      )
    }
  }

  const resetQuiz = () => {
    setButtonDisabled(true);
    setUserAnswers([])
    setQuestionNumber(0)
    resetScore()
  }

  return (
    <section className="quiz-container">
      <h2 className="quiz-title">Myth Busting Quiz</h2>
      { questions[questionNumber] ? (
        <>
          <form className="quiz-form">
            <h2>{questions[questionNumber].question}</h2>
            <div className="inputs-container">
              <label for="true" className="true-input">
                <input
                  type="radio"
                  name="answer"
                  checked= { userAnswers[questionNumber] === true }
                  value="true"
                  id="true"
                  onChange={() => handleChange(true)}
                  disabled={formDisabled}
                />
                True
              </label>
              <label for="false" className="false-input">
                <input
                  type="radio"
                  name="answer"
                  checked= { userAnswers[questionNumber] === false }
                  value="false"
                  id="false"
                  onChange={() => handleChange(false)}
                  disabled={ formDisabled || userAnswers[questionNumber] }
                />
                False
              </label>
            </div>
            <div className="arrows-container">
              <button
                className="arrow-button"
                id="previous-button"
                value="previous"
                onClick={event => changeQuestion(event)}
                disabled={buttonDisabled}
              >
                <span className="material-icons">
                  arrow_back
                </span>
              </button>
              <button
                className="arrow-button"
                id="next-button"
                value="next"
                onClick={event => changeQuestion(event)}
                disabled={buttonDisabled}
              >
                <span className="material-icons">
                  arrow_forward
                </span>
              </button>
            </div>
          </form>
          { showResult() }
          <p>You have completed {userAnswers.length / questions.length * 100}% of the quiz!</p>
        </>
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
