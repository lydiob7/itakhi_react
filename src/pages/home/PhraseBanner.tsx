import Button from "../../components/common/Button";
import brandSquare from "../../assets/images/brand-square-3.png";

const PhraseBanner = () => {
    return (
        <div className="relative bg-gray py-20">
            <div className="container mx-auto grid gap-20 justify-items-center">
                <p className="text-3xl max-w-[950px] font-semibold uppercase">
                    In a digital world, your online presence is power. At Itakhi, we specialize in empowering artists,
                    freelancers, NGOs, and changemakers like you. We boost your impact and reach, ensuring your message
                    resonates where it counts.
                </p>
                <a href="#" className="w-max">
                    <Button color="black">Let's do it</Button>
                </a>
            </div>

            <img className="absolute bottom-1/4 -right-8" src={brandSquare} alt="Brand square" />
        </div>
    );
};

export default PhraseBanner;
