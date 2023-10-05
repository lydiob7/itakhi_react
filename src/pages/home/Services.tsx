import Button from "../../components/common/Button";

const Services = () => {
    return (
        <div className="container relative my-10 md:my-20" id="services">
            <p className="uppercase text-xs md:text-sm">Our services</p>
            <h2 className="font-anton text-25 md:text-6xl uppercase mt-3 md:mb-8">What we do</h2>

            <div className="grid md:grid-cols-2 gap-4 max-w-[850px] mx-auto py-8 md:py-10">
                <div className="bg-wine p-6 rounded-[2rem] text-lile">
                    <h3 className="font-anton uppercase text-15 md:text-3xl mb-8 whitespace-nowrap">
                        App design and development
                    </h3>
                    <p className="text-base md:text-xl">
                        Creating intuitive and user-friendly web and mobile applications that captivate users.
                    </p>
                </div>
                <div className="bg-lile p-6 rounded-[2rem]">
                    <h3 className="font-anton uppercase text-15 md:text-3xl mb-8 whitespace-nowrap">
                        Web design and development
                    </h3>
                    <p className="text-base md:text-xl">
                        Crafting visually stunning and highly functional websites tailored to clients' needs and brand
                        identity.
                    </p>
                </div>
                <div className="bg-lemon p-6 rounded-[2rem]">
                    <h3 className="font-anton uppercase text-15 md:text-3xl mb-8 whitespace-nowrap">Product design</h3>
                    <p className="text-base md:text-xl">
                        Developing innovative and user-centric product designs that meet market demands and enhance
                        usability.
                    </p>
                </div>
                <div className="bg-gray p-6 rounded-[2rem]">
                    <h3 className="font-anton uppercase text-15 md:text-3xl mb-8 whitespace-nowrap">
                        Maintenance and Support
                    </h3>
                    <p className="text-base md:text-xl">
                        Offering ongoing maintenance and support to keep websites and applications running smoothly.
                    </p>
                </div>
            </div>

            <a href="#" className="block mx-auto w-max">
                <Button className="md:absolute md:top-6 md:right-0" color="black">
                    start a project
                </Button>
            </a>
        </div>
    );
};

export default Services;
