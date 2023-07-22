import Classes from "../Components/Clasees/Classes";
import Teachers from "../Components/Teachers/Teachers";
import Banner from "../Header/Banner";
import Something from "./Something";

const Home = () => {
    return (
        <div>
            <Banner />
            <Something />
            <Classes />
            <Teachers />
        </div>
    );
};

export default Home;