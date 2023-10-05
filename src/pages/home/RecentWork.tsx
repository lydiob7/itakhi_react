import Button from "../../components/common/Button";
import brandCircle from "../../assets/images/brand-circle.png";

const RecentWork = () => {
    return (
        <div className="container my-10 md:my-20" id="recent-work">
            <div className="flex items-start justify-between">
                <div>
                    <p className="uppercase text-xs md:text-sm">Click to see our recent work</p>
                    <h2 className="font-anton text-25 md:text-6xl uppercase mt-3 md:mb-8">Recent work</h2>
                </div>

                <a href="#pricing" className="hidden md:block">
                    <Button className="mt-6" color="black">
                        I want mine
                    </Button>
                </a>
            </div>

            <div className="grid place-items-center pt-10 md:py-10">
                <div className="relative">
                    <img className="max-w-[324px] md:max-w-none" src={brandCircle} alt="Brand Circle" />

                    <a
                        className="absolute left-12 md:left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 cursor-pointer block bg-lemon py-6 md:py-10 px-8 rounded-xl md:rounded-[2rem] uppercase font-anton text-2xl md:text-3xl"
                        href="https://creativadesign.co"
                        target="_blank"
                        title="Creativa"
                        rel="noreferrer"
                    >
                        Creativa
                    </a>
                    <a
                        className="absolute right-6 md:right-0 top-12 translate-x-1/4 cursor-pointer block bg-lemon py-6 md:py-10 px-8 rounded-xl md:rounded-[2rem] uppercase font-anton text-2xl md:text-3xl"
                        href="https://chameleonic.io"
                        target="_blank"
                        title="Chameleonic"
                        rel="noreferrer"
                    >
                        Chameleonic
                    </a>
                    <a
                        className="absolute right-5 md:right-0 bottom-12 md:bottom-24 translate-x-8 cursor-pointer block bg-lemon py-6 md:py-10 px-8 rounded-xl md:rounded-[2rem] uppercase font-anton text-2xl md:text-3xl"
                        href="https://miguelbruno.es"
                        target="_blank"
                        title="Miguel Bruñó"
                        rel="noreferrer"
                    >
                        Miguel Bruñó
                    </a>
                </div>
            </div>
        </div>
    );
};

export default RecentWork;
