import { Link, Outlet } from "react-router-dom"


const Home = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/registration">Registration</Link>
            </li>
            <li>
              <input
                className="search-bar"
                placeholder="Search"  
              />
            </li>
          </ul>
        </nav>
      </header>
      <Outlet/>
    </div>
  );
};

export default Home