import { Link, Outlet } from "react-router-dom"


const Home = () => {
    return (
        <>
            <div>
                <Link to="/registration">REG</Link>
                <Link to="/login">LOG</Link>
            </div>
            <Outlet/>
        </>
    )
}

export default Home