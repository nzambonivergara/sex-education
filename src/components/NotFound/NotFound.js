import { Link, useLocation } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const location = useLocation();
  
  return (
    <div>
      <h3>
        No match for {location.pathname}
      </h3>
      <Link to="/home">
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
