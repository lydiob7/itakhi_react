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
    isInitialAnimationLoading: boolean;
    setCurrentSection: Dispatch<SetStateAction<Section | null>>;
    setIsInitialAnimationLoading: Dispatch<SetStateAction<boolean>>;
}

export const GeneralContext = createContext<GeneralContextProps | null>(null);

const GeneralContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [currentSection, setCurrentSection] = useState<Section | null>(null);
    const [isInitialAnimationLoading, setIsInitialAnimationLoading] = useState<boolean>(true);

    const value = useMemo(
        () => ({
            currentSection,
            isInitialAnimationLoading,
            setCurrentSection,
            setIsInitialAnimationLoading
        }),
        [currentSection, isInitialAnimationLoading, setCurrentSection, setIsInitialAnimationLoading]
    );

    return <GeneralContext.Provider value={value}>{children}</GeneralContext.Provider>;
};

export default GeneralContextProvider;
