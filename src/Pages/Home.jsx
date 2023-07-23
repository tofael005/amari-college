import Classes from "../Components/Clasees/Classes";
import Teachers from "../Components/Teachers/Teachers";
import Banner from "../Header/Banner";
import About from "./About";
import PhotoGallery from "./PhotoGallery";
import Something from "./Something";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <div>
            <Banner />
            <Something />
            <Classes />
            <Teachers />
            <PhotoGallery />
            <About />
            <Testimonial />
        </div>
    );
};

export default Home;