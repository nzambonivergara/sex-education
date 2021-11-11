import { fetchQuestions } from '../../apiCalls';
import { useState, useEffect } from 'react';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './App.css';

const App = () => {
  const [ questions, setQuestions ] = useState([])
  const [ error, setError] = useState('')
  const [ score, setScore ] = useState(0);

  useEffect(() => {
    fetchQuestions()
      .then(data => setQuestions(data))
      .catch(error =>  setError(error.message));
  }, [])

  const checkAnswer = (answer, step) => {
    if (answer === questions[step].correctAnswer) {
      setScore(score + 1)
      console.log(score)
    }
  }

  return (
      <div className="App">
        <h1>Sex Education</h1>
        <img src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/09/SEX-EDUCATION-SEASON-4.jpg" alt="sex education series"/>
        <Route
         exact path="/"
          render={() => {
            return (
              <>
                <h2>Ready to play and see how much you know about sexual health?</h2>
                <Link to="/quiz">YES!</Link>
              </>
            )
          }}
        />
        <Route
          exact path="/quiz"
          render={() => <Quiz questions={ questions } checkAnswer={ checkAnswer } score={ score } />}
        />
      </div>
  )
}

export default App;
