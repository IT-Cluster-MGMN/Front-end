import Navbar from "./Navbar";
import HomeSidePanel from "./HomeSidePanel";
import Footer from "./Footer";
import HomeItems from "./HomeItems";

const Home = () => {
    return(
        <>
            <div className="flex flex-col absolute left-[0px] top-[0px] w-full">
                {<Navbar/>}
                <div className="flex flex-row">
                    {<HomeSidePanel/>}
                    {<HomeItems/>}
                </div>
                {<Footer/>}
            </div>
        </>
    );
};
export default Home;