import { sections } from "../context/GeneralContextProvider";
import routes from "./routes";

interface NavigationConfig {
    hashLink?: boolean;
    label: string;
    url: string;
}

const navigationConfig: NavigationConfig[] = [
    {
        url: `${routes.home}#${sections.philosophy}`,
        hashLink: true,
        label: "Our Philosophy"
    },
    {
        url: `${routes.home}#${sections.services}`,
        hashLink: true,
        label: "Services"
    },
    {
        url: `${routes.home}#${sections.recentWork}`,
        hashLink: true,
        label: "Recent Work"
    },
    {
        url: `${routes.home}#${sections.pricing}`,
        hashLink: true,
        label: "Pricing"
    },
    {
        url: `${routes.home}#${sections.faqs}`,
        hashLink: true,
        label: "FAQs"
    },
    {
        url: routes.blog,
        label: "Blog"
    }
    // {
    //     url: routes.login,
    //     label: "Login"
    // }
];

export default navigationConfig;
