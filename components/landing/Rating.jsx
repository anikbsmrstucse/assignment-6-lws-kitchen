import StartSvg from "../svg-components/StartSvg";

const Rating = ({ rating }) => {
    return (
        <>
            {Array(rating - 1)
                .fill(0)
                .map((_, index) => (
                    <StartSvg key={index} />
                ))}
            <StartSvg />
        </>
    );
};

export default Rating;
