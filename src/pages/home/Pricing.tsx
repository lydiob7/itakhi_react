import Button from "../../components/common/Button";

const Pricing = () => {
    return (
        <div className="container my-20" id="pricing">
            <div className="max-w-md">
                <p className="uppercase text-sm">pricing</p>
                <h2 className="font-anton text-6xl mt-3 mb-8">Choose your plan that works for you</h2>
                <p className="my-8 text-xl font-light">
                    We also provide subscription plans for ongoing collaboration. Our goal is to offer flexibility that
                    suits your specific needs, whether you prefer a single project or a continuous partnership
                </p>
            </div>

            <div className="my-20 mx-14 flex items-stretch justify-between gap-4">
                <div className="max-w-[355px] px-8 py-6 bg-gray rounded-[2rem] flex flex-col items-center">
                    <h3 className="uppercase text-base mb-4 w-full">starter</h3>
                    <p className="font-anton text-5xl uppercase mb-8">$ 2500/one time</p>
                    <ul className="mb-12 font-semibold leading-7 w-full">
                        <li>Front-end and back end development</li>
                        <li>Website design ( max 4 pages)</li>
                        <li>Content integration</li>
                    </ul>
                    <a href="#">
                        <Button color="black">Get started</Button>
                    </a>
                </div>

                <div className="max-w-[355px] px-8 py-6 bg-lile rounded-[2rem] flex flex-col items-center">
                    <h3 className="uppercase text-base mb-4 w-full">standard</h3>
                    <p className="font-anton text-5xl uppercase mb-8">$ 3000/ monthly</p>
                    <ul className="mb-12 font-semibold leading-7 w-full">
                        <li>One request at a time</li>
                        <li>Average 1 week delivery</li>
                        <li>Pause or cancel anytime</li>
                    </ul>
                    <a href="#">
                        <Button color="black">Get started</Button>
                    </a>
                </div>

                <div className="max-w-[355px] px-8 py-6 bg-wine text-lile rounded-[2rem] flex flex-col items-center">
                    <h3 className="uppercase text-base mb-4 w-full">Premium</h3>
                    <p className="font-anton text-5xl uppercase mb-8">$ 6000/ monthly</p>
                    <ul className="mb-12 font-semibold leading-7 w-full">
                        <li>Two requests at a time</li>
                        <li>Average 1.5 week delivery</li>
                        <li>Pause or cancel anytime</li>
                    </ul>
                    <a href="#">
                        <Button color="black">Get started</Button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
