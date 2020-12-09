import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { HeadData } from "../Data/Head";

const MeataContainer = () => {
	return (
		<HelmetProvider>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{HeadData.title}</title>
				<link rel="stylesheet" href="https://use.typekit.net/yjq4hvv.css" />

				<meta
					name="viewport"
					content="height=device-height, 
				width=device-width, 
				initial-scale=1.0, 
				minimum-scale=1.0, 
				maximum-scale=1.0, 
				user-scalable=no"
				></meta>
				<meta property="og:title" content={HeadData.title} />
				<meta property="og:site_name" content={HeadData.title} />
				<meta property="og:url" content={HeadData.url} />
				<meta property="og:description" content={HeadData.description} />
				<meta property="og:image" content={`${HeadData.url}thumbnail.png`} />
				<meta property="og:type" content="website" />
			</Helmet>
		</HelmetProvider>
	);
};

export default MeataContainer;
