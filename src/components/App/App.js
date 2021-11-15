import { fetchQuestions } from '../../apiCalls';
import { useState, useEffect } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
import Quiz from '../Quiz/Quiz';
import Resources from '../Resources/Resources';
import SavedFacts from '../SavedFacts/SavedFacts';
import NotFound from '../NotFound/NotFound';
import './App.css';

const App = () => {
  const [ questions, setQuestions ] = useState([]);
  const [ error, setError] = useState('');
  const [ savedFacts, setSavedFacts ] = useState([]);
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

  const allFacts = questions.map(question => question.fact)

  return (
      <div className="app">
        <header className="header">
          <NavBar resetScore={ resetScore }/>
          <Link to="/saved" aria-label="Go to saved facts">
            <span className="material-icons">
              favorite
            </span>
          </Link>
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
                return <Home allFacts={ allFacts } resetScore={ resetScore } savedFacts={ savedFacts } setSavedFacts={ setSavedFacts }/>
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
          <Route exact path="/saved" render={() => <SavedFacts savedFacts={ savedFacts } />} />
          <Route path="*" component={NotFound} />
        </Switch>
        <footer className="footer">
          <p>Please note: This app’s content is provided for general informational purposes only, and under no circumstances should be considered a substitute for professional medical advice, diagnosis or treatment from a qualified physician or healthcare provider.</p>
        </footer>
      </div>
  )
}

export default App;
