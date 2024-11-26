const size = {
	mobileS: '480px',
	mobileM: '540px',
	tabletS: '768px',
	tabletM: '1023px',
	laptop: '1024px',
	desktop: '1280px',
};

export const device = {
	mobileS: `(max-width: ${size.mobileS})`,
	mobileM: `(max-width: ${size.mobileM})`,
	tablet: `(min-width: ${size.tabletS}) and (max-width: ${size.tabletM})`,
	tabletM: `(max-width: ${size.tabletM})`,
	laptop: `(min-width: ${size.laptop})`,
	desktop: `(min-width: ${size.desktop})`,
};
