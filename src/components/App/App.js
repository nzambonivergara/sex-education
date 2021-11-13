import { fetchQuestions } from '../../apiCalls';
import { useState, useEffect } from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Quiz from '../Quiz/Quiz';
import './App.css';

const App = () => {
  const [ questions, setQuestions ] = useState([])
  const [ error, setError] = useState('')
  const [ score, setScore ] = useState(0)
  const [ step, setStep ] = useState(0)

  useEffect(() => {
    fetchQuestions()
      .then(data => {
        setQuestions(data.slice(0,5))
      })
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
        <header className="header">
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
                  <div className="quiz-call-to-action">
                    <h2 className="call-to-action-question">
                      Does wearing two condoms offer double protection?
                    </h2>
                    <Link to="/quiz" className="quiz-link">
                      Take the Myth Busting Quiz
                      <span class="material-icons">
                        arrow_right_alt
                      </span>
                    </Link>
                  </div>
                  <div className="fact-container">
                    <h2 className="did-you-know">Did you know? 🤔</h2>
                    <p className="fact">"{questions.length && questions[step].fact }"</p>
                    <div className="arrows-container">
                      { step && (
                        <button
                          className="arrow-button"
                          onClick={() => setStep(step - 1)}
                        >
                          <span class="material-icons">
                            arrow_back
                          </span>
                        </button>
                      )}
                      { step < questions.length - 1 && (
                        <button
                          className="arrow-button"
                          onClick={() => setStep(step + 1)}
                        >
                          <span class="material-icons">
                            arrow_forward
                          </span>
                        </button>
                      )}
                    </div>
                  </div>
                  <form className="submit-question-form">
                    <h3 className="call-to-action-question">Do you have any sexual health questions?</h3>
                    <textarea placeholder="Write your question here..."/>
                    <button className="submit-button">Submit</button>
                  </form>
                  <footer>
                    <Link to="/video" className="video-link">
                      Otis Milburn's Best Sex Ed Avice
                    </Link>
                    <p>Please note: This app’s content is provided for general informational purposes only, and under no circumstances should be considered a substitute for professional medical advice, diagnosis or treatment from a qualified physician or healthcare provider.</p>
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
        { error && <h2>{error.message}</h2>}
      </div>
  )
}

export default App;
