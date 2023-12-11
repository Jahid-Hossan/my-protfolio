const Heading = ({ heading }) => {
    console.log(heading)
    return (
        <h2 className="text-white text-center text-5xl font-bold my-8">{heading}</h2>
    );
};

export default Heading;