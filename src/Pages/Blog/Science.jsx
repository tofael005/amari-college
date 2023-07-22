import blog1 from "../../assets/blog/blog.webp"

const Science = () => {
    return (
        <div>
            <h1 className="text-center my-8 text-3xl font-bold text-[#05b6d1]">The article of Science</h1>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-6 items-center mt-14">
                <img className="rounded-md" src={blog1} alt="" />
                <p className="text-justify"><span className="font-semibold text-xl">The Enigmatic Nature of Dark Matter: Unveiling the Universe's Elusive Secret:</span> Dark matter, an enigmatic cosmic component, continues to baffle scientists worldwide. Accounting for approximately 27% of the universe's total mass-energy content, dark matter's presence is inferred through gravitational effects on visible matter. However, its exact nature remains elusive, with no direct detection to date.The Standard Model of particle physics fails to explain dark matter, necessitating the existence of new particles and forces beyond our current understanding. Various experiments, including those using sophisticated detectors deep underground and high-energy particle colliders, have attempted to catch a glimpse of these mysterious particles, yet they persist in evading detection. The implications of dark  the gravitational glue that shapes the large-scale structure of the cosmos, enabling the formation of galaxies and galaxy clusters. Without it, the universe would be a vastly different place, devoid of the celestial structures we observe today.Understanding dark matter is crucial for deciphering the the Big Bang and the cosmic microwave background radiation. Moreover, its influence on galaxy formation and distribution provides essential insights into the evolution of galaxies and the cosmos.</p>
            </div>
        </div>
    );
};

export default Science;