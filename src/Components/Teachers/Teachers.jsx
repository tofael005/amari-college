import team1 from "../../assets/teacher/team-1.jpg"
import team2 from "../../assets/teacher/team-2.jpg"
import team3 from "../../assets/teacher/team-3.jpg"
import team4 from "../../assets/teacher/team-4.jpg"

const Teachers = () => {
    return (
        <div className="max-w-[1240px] mx-auto px-3 mt-20 mb-10">
            <h1 className="text-center text-[#05b6d1] font-bold">--- Our Teachers --- </h1>
            <h1 className="text-center mb-12 text-3xl font-bold text-[#05b6d1]">Meet Our Teachers</h1>
            <div className="grid md:grid-cols-4 gap-6 mt-14">
                <div>
                    <img className="rounded-full block mx-auto" src={team1} alt="" />
                    <div>
                        <h1 className="text-center mt-6 font-bold text-xl text-[#0591a7]">Julia Smith</h1>
                        <p className="text-center mt-1 text-gray-500 font-semibold">Music Teacher</p>
                    </div>
                </div>
                <div className="">
                    <img className="rounded-full block mx-auto" src={team2} alt="" />
                    <div>
                        <h1 className="text-center mt-6 font-bold text-xl text-[#0591a7]">Jhon Doe</h1>
                        <p className="text-center mt-1 text-gray-500 font-semibold">Language Teacher</p>
                    </div>
                </div>
                <div className="">
                    <img className="rounded-full block mx-auto" src={team3} alt="" />
                    <div>
                        <h1 className="text-center mt-6 font-bold text-xl text-[#0591a7]">Mollie Ross</h1>
                        <p className="text-center mt-1 text-gray-500 font-semibold">Dance Teacher</p>
                    </div>
                </div>
                <div className="">
                    <img className="rounded-full block mx-auto" src={team4} alt="" />
                    <div>
                        <h1 className="text-center mt-6 font-bold text-xl text-[#0591a7]">Donald John</h1>
                        <p className="text-center mt-1 text-gray-500 font-semibold">Art Teacher</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teachers;