import { Dispatch, FC, ReactNode, SetStateAction, createContext, useMemo, useState } from "react";

export const sections = {
    clients: "clients",
    philosophy: "philosophy",
    services: "services",
    recentWork: "recent-work",
    pricing: "pricing",
    faqs: "faqs"
} as const;

type Section = (typeof sections)[keyof typeof sections];

interface GeneralContextProps {
    currentSection: Section | null;
    setCurrentSection: Dispatch<SetStateAction<Section | null>>;
}

export const GeneralContext = createContext<GeneralContextProps | null>(null);

const GeneralContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [currentSection, setCurrentSection] = useState<Section | null>(null);

    const value = useMemo(
        () => ({
            currentSection,
            setCurrentSection
        }),
        [currentSection, setCurrentSection]
    );

    return <GeneralContext.Provider value={value}>{children}</GeneralContext.Provider>;
};

export default GeneralContextProvider;
