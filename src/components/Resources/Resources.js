import { Link } from 'react-router-dom';
import './Resources.css';

const Resources = () => {
  return (
    <main className="resources-container">
      <h2 className="resources-title">Resources</h2>
      <iframe width="370" height="200" src="https://www.youtube.com/embed/Xo3Cnfhf9Q8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div className="clinic resource-container">
        <a className="resource-link" href="https://www.bedsider.org/where_to_get_it">
          Find a Health Center Here!
          <span className="material-icons">
            arrow_right_alt
          </span>
        </a>
      </div>
      <div className="birth-control resource-container">
        <a className="resource-link" href="https://www.bedsider.org/where_to_get_it">
          Learn More About Birth Control!
          <span className="material-icons">
            arrow_right_alt
          </span>
        </a>
      </div>
      <div className="sti resource-container">
        <a className="resource-link" href="https://www.teensource.org/std">
          Learn More About STIs!
          <span className="material-icons">
            arrow_right_alt
          </span>
        </a>
      </div>
      <div className="lgbtq resource-container">
        <a className="resource-link" href="https://www.teensource.org/lgbtq">
          Sexual Orientation & Gender!
          <span className="material-icons">
            arrow_right_alt
          </span>
        </a>
      </div>
      <Link to="/home" className="home-link">Back to Home</Link>
    </main>
  )
}

export default Resources;
