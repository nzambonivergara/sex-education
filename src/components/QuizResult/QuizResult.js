import { Link } from 'react-router-dom';
import './QuizResult.css';

const QuizResult = ({ correctAnswersPercentage, resetQuiz }) => {
  return (
    <section className="results-container">
      <h3 className="complete-quiz-message">Excellent! You crushed it.</h3>
      <p className="score">You got { correctAnswersPercentage.toFixed() }% of the questions right!</p>
      <button className="retake-button" onClick={ resetQuiz }>Retake Quiz</button>
      <Link className="home-link" to="/home">Back to Home</Link>
    </section>
  )
}

export default QuizResult;
