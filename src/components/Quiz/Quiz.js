import './Quiz.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({ questions, checkAnswer, score, resetScore }) => {
  const [ userAnswers, setUserAnswers ] = useState([])
  const [ questionNumber, setQuestionNumber ] = useState(0)
  const [ buttonDisabled, setButtonDisabled ] = useState(true)
  const [ formDisabled, setFormDisabled ] = useState(false)

  const handleChange = (answer) => {
    console.log(answer)
    setFormDisabled(true);
    setButtonDisabled(false);
    setUserAnswers([ ...userAnswers, answer ])
    checkAnswer(answer, questionNumber)
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
                onClick={event => changeQuestion(event)}
                disabled={ questionNumber ? buttonDisabled : true }
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
            <p>You have completed {userAnswers.length / questions.length * 100}% of the quiz!</p>
          </form>
          { showResult() }
        </>
      )
      :
      (
        <div className="results-container">
          <h3 className="complete-quiz-message">Excellent! You crushed it.</h3>
          <p className="score">You got {score / questions.length * 100}% of the questions right!</p>
          <button className="retake-button" onClick={ resetQuiz }>Retake Quiz</button>
          <Link className="quiz-link" to="/home">Back to Home</Link>
        </div>
      )}
    </section>
  )
}

export default Quiz;
