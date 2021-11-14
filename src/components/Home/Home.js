import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = ({ questions, resetScore }) => {
  const [ factNumber, setFactNumber ] = useState(0);

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
          <span class="material-icons">
            arrow_right_alt
          </span>
        </Link>
      </section>
      <section className="fact-container">
        <h2 className="did-you-know">Did you know? 🤔</h2>
        <p className="fact">"{questions.length && questions[factNumber].fact }"</p>
        <div className="arrows-container">
          <button
            className="arrow-button"
            disabled={ factNumber ? false : true }
            onClick={() => setFactNumber(factNumber - 1)}
            aria-label="Previoius fact"
          >
            <span class="material-icons">
              arrow_back
            </span>
          </button>
          <button
            disabled={ factNumber < questions.length - 1 ? false : true }
            className="arrow-button"
            onClick={() => setFactNumber(factNumber + 1)}
            aria-label="Next fact"
          >
            <span class="material-icons">
              arrow_forward
            </span>
          </button>
        </div>
      </section>
    </main>
  )
}

export default Home;
