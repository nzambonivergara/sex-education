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
        <nav>
          <NavLink to="/resources">
            Resources
          </NavLink>
          <NavLink to="/quiz">
            Quiz
          </NavLink>
          <NavLink to="/dashboard">
            Dashboard
          </NavLink>
        </nav>
        <h1>Sex Education</h1>
        <img src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/09/SEX-EDUCATION-SEASON-4.jpg" alt="sex education series"/>
        <Route
         exact path="/"
          render={() => {
            return (
              <>
                <h2>Ready to play and see how much you know about sexual health?</h2>
                <Link to="/quiz">YES!</Link>
                <Link to="/dashboard">Skip for now!</Link>
              </>
            )
          }}
        />
        <Route
          exact path="/quiz"
          render={() => <Quiz questions={ questions } checkAnswer={ checkAnswer } score={ score } />}
        />
        <Route
          exact path="/dashboard"
          render={() => {
            return (<iframe width="370" height="200" src="https://www.youtube.com/embed/Xo3Cnfhf9Q8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>)
          }}
        />
      </div>
  )
}

export default App;
