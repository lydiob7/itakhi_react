import routes from "./routes";

interface NavigationConfig {
    hashLink?: boolean;
    highlighted?: boolean;
    label: string;
    url: string;
}

const navigationConfig: NavigationConfig[] = [
    {
        url: `${routes.home}#our-philosophy`,
        hashLink: true,
        label: "Our Philosophy"
    },
    {
        url: `${routes.home}#services`,
        hashLink: true,
        label: "Services"
    },
    {
        url: `${routes.home}#recent-work`,
        hashLink: true,
        label: "Recent Work"
    },
    {
        url: `${routes.home}#pricing`,
        hashLink: true,
        label: "Pricing"
    },
    {
        url: `${routes.home}#faqs`,
        hashLink: true,
        highlighted: true,
        label: "FAQs"
    }
    // {
    //     url: routes.login,
    //     label: "Login"
    // }
];

export default navigationConfig;
