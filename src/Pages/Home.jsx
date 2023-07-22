import Classes from "../Components/Clasees/Classes";
import Teachers from "../Components/Teachers/Teachers";
import Banner from "../Header/Banner";
import About from "./About";
import Something from "./Something";

const Home = () => {
    return (
        <div>
            <Banner />
            <Something />
            <Classes />
            <Teachers />
            <About />
        </div>
    );
};

export default Home;