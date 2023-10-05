import Button from "../../components/common/Button";
import brandSquare from "../../assets/images/brand-square-3.png";

const PhraseBanner = () => {
    return (
        <div className="relative bg-gray py-10 md:py-20 w-full overflow-x-hidden">
            <div className="relative z-20 container grid gap-6 md:gap-20 justify-items-center">
                <p className="text-15 md:text-3xl max-w-[950px] font-semibold md:uppercase">
                    In a digital world, your online presence is power. At Itakhi, we specialize in empowering artists,
                    freelancers, NGOs, and changemakers like you. We boost your impact and reach, ensuring your message
                    resonates where it counts.
                </p>
                <a href="#pricing" className="w-max">
                    <Button color="black">Let's do it</Button>
                </a>
            </div>

            <img
                className="absolute z-10 bottom-6 md:bottom-1/4 -right-8 w-48 md:w-auto"
                src={brandSquare}
                alt="Brand square"
            />
        </div>
    );
};

export default PhraseBanner;
