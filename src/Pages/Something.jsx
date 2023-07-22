import { MdOutlineSportsBaseball } from 'react-icons/md';
import { GiMusicalScore } from 'react-icons/gi';
import { RiDraftLine } from 'react-icons/ri';
import { MdEmojiTransportation } from 'react-icons/md';
import { MdFastfood } from 'react-icons/md';
import { GiSchoolBag } from 'react-icons/gi';

const Something = () => {
    return (
        <div className="max-w-[1240px] mx-auto mt-10 mb-20">
            <h1 className="text-center my-6 text-4xl font-bold text-[#05b6d1]">Planning for the students</h1>
            <div className="grid md:grid-cols-3 gap-6 px-3">
                <div className="flex gap-4 items-center border p-4 shadow-md rounded-md">
                    <MdOutlineSportsBaseball className="text-9xl" />
                    <div>
                        <h1 className="text-xl font-semibold mb-3">Play Ground</h1>
                        <p className="text-base font-normal">Record-breaking performance propels team to championship glory, team to championship glory, leaving rivals leaving rivals in awe and fans in a frenzy of celebration and admiration.</p>
                    </div>
                </div>
                <div className="flex gap-4 items-center border p-4 shadow-md rounded-md">
                    <GiMusicalScore className="text-9xl" />
                    <div>
                        <h1 className="text-xl font-semibold mb-3">Music and Dance</h1>
                        <p>Melodies and moves unite in an electrifying spectacle, as dancers gracefully interpret the rhythm, creating an enchanting fusion of music and dance that captivates spectacle, as dancers gracefully interpret the audiences.</p>
                    </div>
                </div>
                <div className="flex gap-4 items-center border p-4 shadow-md rounded-md">
                    <RiDraftLine className="text-9xl" />
                    <div>
                        <h1 className="text-xl font-semibold mb-3">Arts and Crafts</h1>
                        <p>Unleashing creativity: The arts and crafts scene flourishes with innovative projects, talented artisans, and DIY enthusiasts sharing their passion for handmade masterpieces, inspiring a crafting revolution.</p>
                    </div>
                </div>
                <div className="flex gap-4 items-center border p-4 shadow-md rounded-md">
                    <MdEmojiTransportation className="text-9xl" />
                    <div>
                        <h1 className="text-xl font-semibold mb-3">Safe Transportation</h1>
                        <p>Ensuring safe travels: The latest advancements in transportation technology, rigorous safety protocols, and public awareness campaigns contribute to reducing accidents and promoting secure journeys.</p>
                    </div>
                </div>
                <div className="flex gap-4 items-center border p-4 shadow-md rounded-md">
                    <MdFastfood className="text-9xl" />
                    <div>
                        <h1 className="text-xl font-semibold mb-3">Healthy food</h1>
                        <p>Nutritious delights: Exploring the world of healthy food options, from farm-fresh produce to wholesome recipes, empowering individuals to make mindful choices for a vibrant and nourished lifestyle.</p>
                    </div>
                </div>
                <div className="flex gap-4 items-center border p-4 shadow-md rounded-md">
                    <GiSchoolBag className="text-9xl" />
                    <div>
                        <h1 className="text-xl font-semibold mb-3">Educational Tour</h1>
                        <p>Enriching minds through travel: Educational tours provide students with valuable experiential learning opportunities, fostering personal growth, cultural awareness, and a deeper appreciation for the world's wonders.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Something;