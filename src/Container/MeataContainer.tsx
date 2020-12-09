import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const MeataContainer = () => {
	return (
		<HelmetProvider>
			<Helmet>
				<meta charSet="utf-8" />
				<title> D; | EXHIBITION</title>
				<link rel="stylesheet" href="https://use.typekit.net/yjq4hvv.css" />
			</Helmet>
		</HelmetProvider>
	);
};

export default MeataContainer;
