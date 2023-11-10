import { Link, Outlet } from "react-router-dom"


const Home = () => {
  return (
    <div>
      <nav>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/registration">Registration</Link></li>
        <li>
          <input
            placeholder="Search"  
          /></li>
      </nav>
    </div>
  );
};

export default Home