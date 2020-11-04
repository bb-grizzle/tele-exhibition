import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./Style/GlobalStyle";
import { ThemeProvider } from "styled-components";
import Theme from "./Style/Theme";
import MeataContainer from "./Container/MeataContainer";

ReactDOM.render(
	<React.StrictMode>
		<MeataContainer />
		<ThemeProvider theme={Theme}>
			<GlobalStyle />
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
