import React, { createContext, useState, useContext } from "react";
import { LogoWindowProps } from "../Data/LogoWindow";

interface AppContextType {
	isAboutClicked: boolean;
	setIsAboutClicked: React.Dispatch<React.SetStateAction<boolean>>;
	nowData: LogoWindowProps | undefined;
	setNowData: React.Dispatch<React.SetStateAction<LogoWindowProps | undefined>>;
}

const AppContext = createContext({} as AppContextType);

const AppProvider: React.FC = ({ children }) => {
	const [isAboutClicked, setIsAboutClicked] = useState(false);
	const [nowData, setNowData] = useState<LogoWindowProps | undefined>();
	return <AppContext.Provider value={{ isAboutClicked, setIsAboutClicked, nowData, setNowData }}>{children}</AppContext.Provider>;
};

export const useIsAboutClicked = () => {
	const { isAboutClicked, setIsAboutClicked } = useContext(AppContext);

	return { isAboutClicked, setIsAboutClicked };
};

export const useNowData = () => {
	const { nowData, setNowData } = useContext(AppContext);

	return { nowData, setNowData };
};

export default AppProvider;
