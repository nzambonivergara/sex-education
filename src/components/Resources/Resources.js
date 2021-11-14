import { Link } from 'react-router-dom';
import './Resources.css';

const Resources = () => {
  return (
    <main className="resources-container">
      <h2 className="resources-title">Resources</h2>
      <iframe width="370" height="200" src="https://www.youtube.com/embed/Xo3Cnfhf9Q8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div className="clinic-resource-container">
        <a className="clinic-resource-link" src="https://www.bedsider.org/where_to_get_it">
          Find a Health Center Here!
          <span class="material-icons">
            arrow_right_alt
          </span>
        </a>
      </div>
      <Link to="/home">Back to Home</Link>
    </main>
  )
}

export default Resources;
