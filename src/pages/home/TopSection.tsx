import Button from "../../components/common/Button";

import bannerBg from "../../assets/images/brand-square.jpg";
import { BlackSpiral, LileSpiral, WineSpiral, YellowSpiral } from "../../assets/images/spirals";

function TopSection() {
    return (
        <div className="relative ">
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gray" />
            <div
                style={{ backgroundImage: `url(${bannerBg})` }}
                className="absolute top-0 left-1/2 w-1/2 h-full bg-center bg-cover bg-no-repeat"
            >
                <WineSpiral
                    className="absolute top-4 right-0 motion-safe:animate-spin"
                    style={{ animationDuration: "60s" }}
                />
                <BlackSpiral
                    className="absolute top-48 left-28 motion-safe:animate-spin"
                    style={{ animationDuration: "50s" }}
                />
                <LileSpiral
                    className="absolute top-80 left-72 motion-safe:animate-spin"
                    style={{ animationDuration: "60s", animationDirection: "reverse" }}
                />
                <YellowSpiral
                    className="absolute top-[476px] left-[400px] motion-safe:animate-spin"
                    style={{ animationDuration: "80s" }}
                />
            </div>
            <div className="container mx-auto relative z-20">
                <div className="w-1/2 py-28 pr-12">
                    <p className="text-sm uppercase mb-4">Streamlined Design and Development</p>
                    <h1 className="font-anton text-[148px] uppercase leading-[1.05]">Itakhi</h1>
                    <p className="text-2xl my-8">
                        At Itakhi, our mission is simple: Make you happy without the fuss. We cut through the noise to
                        deliver the design and development solutions you need, just the way you want them – no meetings,
                        no fluff.
                    </p>
                    <a href="#">
                        <Button className="mr-8">Start a Project</Button>
                    </a>
                    <a href="#">
                        <Button color="black" variant="outlined">
                            Learn More
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default TopSection;
