
const SingleCollege = ({singleColl}) => {
    const { image, name, rating, admission, research } = singleColl;
    return (
        <div>
            <div>
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default SingleCollege;