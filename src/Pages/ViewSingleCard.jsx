

const ViewSingleCard = ({viewCardData}) => {
    const {image, event, sports } = viewCardData;
    return (
        <div>
            <img src={image} alt="" />
            <p>Event: {event}</p>
            <p>Sports Fasility: {sports}</p>
        </div>
    );
};

export default ViewSingleCard;