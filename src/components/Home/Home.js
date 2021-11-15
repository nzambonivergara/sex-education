import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Home.css';

const Home = ({ allFacts, resetScore, savedFacts, setSavedFacts  }) => {
  const [ factNumber, setFactNumber ] = useState(0);

  const removeSavedFact = (fact) => {
    const filteredFacts = savedFacts.filter(item => item !== fact)
    setSavedFacts([ ...filteredFacts ])
  }

  const renderSaveButton = () => {
    if (!savedFacts.includes(allFacts[factNumber])) {
      return (
        <button id="save-fact-button" aria-label="Save fact" onClick={() => setSavedFacts([ ...savedFacts, allFacts[factNumber] ])}>
          <span className="material-icons">
            favorite_border
          </span>
        </button>
      )
    } else {
      return (
        <button id="remove-fact-button" aria-label="Remove from saved facts" onClick={() => removeSavedFact(allFacts[factNumber])}>
          <span className="material-icons">
            favorite
          </span>
        </button>
      )
    }
  }

  return (
    <main>
      <section className="quiz-call-to-action">
        <h2 className="call-to-action-question">
          Does wearing two condoms offer double protection?
        </h2>
        <Link
          to="/quiz"
          className="quiz-link"
          onClick={ resetScore }
          aria-label="Take the Myth Busting Quiz"
        >
          Take the Myth Busting Quiz
          <span className="material-icons">
            arrow_right_alt
          </span>
        </Link>
      </section>
      <section className="fact-container">
        <h2 className="did-you-know">Did you know? 🤔</h2>
        <p className="fact">"{ allFacts.length && allFacts[factNumber] }"</p>
        <div className="arrows-container">
          <button
            className="arrow-button"
            disabled={ factNumber ? false : true }
            onClick={() => setFactNumber(factNumber - 1)}
            aria-label="Previoius fact"
          >
            <span className="material-icons">
              arrow_back
            </span>
          </button>
          { renderSaveButton() }
          <button
            disabled={ factNumber < allFacts.length - 1 ? false : true }
            className="arrow-button"
            onClick={() => setFactNumber(factNumber + 1)}
            aria-label="Next fact"
          >
            <span className="material-icons">
              arrow_forward
            </span>
          </button>
        </div>
      </section>
    </main>
  )
}

export default Home;

Home.propTypes = {
  allFacts: PropTypes.arrayOf(PropTypes.string),
  resetScore: PropTypes.func,
  savedFacts: PropTypes.arrayOf(PropTypes.string),
  setSavedFacts: PropTypes.func
};
