import './Quiz.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import QuizResult from '../QuizResult/QuizResult';
import QuizForm from '../QuizForm/QuizForm';

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
