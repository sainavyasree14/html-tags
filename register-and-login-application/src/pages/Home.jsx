
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mt-5 text-center">
      <h1>Welcome to Home Page </h1>

      <div className="mt-4">
        <Link to="" className="btn-btn-primary me-2">Register</Link>
        <Link to="/Login" className="btn-btn-secondary">Login</Link>
      </div>
    </div>
  );
}

export default Home;