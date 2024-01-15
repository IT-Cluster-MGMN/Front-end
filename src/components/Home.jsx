import Navbar from "./Navbar";
import HomeSidePanel from "./HomeSidePanel";
import Footer from "./Footer";

const Home = () => {
    return(
        <>
            <div className="flex flex-col absolute left-[0px] top-[0px] w-full">
                {<Navbar/>}
                {<HomeSidePanel/>}
                {<Footer/>}
            </div>
        </>
    );
};
export default Home;