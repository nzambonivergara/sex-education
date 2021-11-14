import { fetchQuestions } from '../../apiCalls';
import { useState, useEffect } from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
import Quiz from '../Quiz/Quiz';
import Resources from '../Resources/Resources';
import NotFound from '../NotFound/NotFound';
import './App.css';

const App = () => {
  const [ questions, setQuestions ] = useState([]);
  const [ error, setError] = useState('');
  const [ score, setScore ] = useState(0);


  useEffect(() => {
    fetchQuestions()
      .then(data => setQuestions(data))
      .catch(error =>  setError(error.message))
  }, [])

  const checkAnswer = (answer, questionNumber) => {
    if (answer === questions[questionNumber].correctAnswer) {
      setScore(score + 1)
    }
  }

  const resetScore = () => {
    setScore(0)
  }

  return (
      <div className="app">
        <header className="header">
          <NavBar resetScore={ resetScore }/>
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
              if (!error) {
                return <Home questions={ questions } resetScore={ resetScore } />
              } else {
                return <h2>Oops, something went wrong! Try again later!</h2>
              }
            }}
          />
          <Route
            exact path="/quiz"
            render={() => {
              if (!error) {
                return <Quiz questions={ questions } checkAnswer={ checkAnswer } score={ score } resetScore={ resetScore }/>
              } else {
                return <h2>Oops, something went wrong! Try again later!</h2>
              }
            }}
          />
          <Route exact path="/resources" component={Resources} />
          <Route path="*" component={NotFound} />
        </Switch>
        <footer className="footer">
          <p>Please note: This app’s content is provided for general informational purposes only, and under no circumstances should be considered a substitute for professional medical advice, diagnosis or treatment from a qualified physician or healthcare provider.</p>
        </footer>
      </div>
  )
}

export default App;
