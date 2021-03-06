import './Quiz.css';
import { useState } from 'react';
import QuizResult from '../QuizResult/QuizResult';
import QuizForm from '../QuizForm/QuizForm';
import PropTypes from 'prop-types';

const Quiz = ({ questions, checkAnswer, score, resetScore }) => {
  const [ questionNumber, setQuestionNumber ] = useState(0);
  const [ userAnswers, setUserAnswers ] = useState([]);

  const showCurrentAnswerResult = () => {
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
    setUserAnswers([])
    setQuestionNumber(0)
    resetScore()
  }

  return (
    <main className="quiz-container">
      <h2 className="quiz-title">Myth Busting Quiz</h2>
      { questions[questionNumber] ? (
        <>
          <QuizForm
            questions={ questions }
            checkAnswer={ checkAnswer }
            questionNumber={ questionNumber }
            setQuestionNumber={ setQuestionNumber }
            userAnswers={ userAnswers }
            setUserAnswers={ setUserAnswers }
            resetQuiz={ resetQuiz }
          />
          { showCurrentAnswerResult() }
        </>
      )
      :
      (
        <QuizResult
          correctAnswersPercentage={score / questions.length * 100}
          resetQuiz={ resetQuiz }
        />
      )}
    </main>
  )
}

export default Quiz;

Quiz.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    question: PropTypes.string,
    answers:  PropTypes.arrayOf(PropTypes.bool),
    correctAnswer: PropTypes.bool,
    fact: PropTypes.string
  })),
  checkAnswer: PropTypes.func,
  resetScore: PropTypes.func,
  score: PropTypes.number
};
