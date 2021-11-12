import { fetchQuestions } from '../../apiCalls';
import { useState, useEffect } from 'react';
import { Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Quiz from '../Quiz/Quiz';
import './App.css';

const App = () => {
  const [ questions, setQuestions ] = useState([])
  const [ error, setError] = useState('')
  const [ score, setScore ] = useState(0);

  useEffect(() => {
    fetchQuestions()
      .then(data => setQuestions(data.slice(0,5)))
      .catch(error =>  setError(error.message));
  }, [])

  const checkAnswer = (answer, step) => {
    if (answer === questions[step].correctAnswer) {
      setScore(score + 1)
    }
  }

  const resetScore = () => {
    setScore(0)
  }

  return (
      <div className="App">
        <header>
          <NavBar />
          <h1>Sex Education</h1>
        </header>
        <Switch>
          <Route
           exact path="/"
           render={() => <Redirect to="/home" /> }
          />
          <Route
           exact path="/home"
            render={() => {
              return (
                <>
                  <h2>Take the Sexual Health Myth Debunking Quiz!</h2>
                  <Link to="/quiz">YES!</Link>
                  <footer>
                    <Link to="/video">Watch Sex Education series video.</Link>
                  </footer>
                </>
              )
            }}
          />
          <Route
            exact path="/quiz"
            render={() => <Quiz questions={ questions } checkAnswer={ checkAnswer } score={ score } resetScore={ resetScore }/>}
          />
          <Route
            exact path="/video"
            render={() => {
              return (
                <>
                  <iframe width="370" height="200" src="https://www.youtube.com/embed/Xo3Cnfhf9Q8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  <Link to="/home">Back to Home</Link>
                </>)
            }}
          />
        </Switch>
      </div>
  )
}

export default App;
