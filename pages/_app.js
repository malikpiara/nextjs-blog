import '../styles/global.css';
import React, { useEffect } from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
import { Montserrat, Source_Serif_4 } from '@next/font/google';

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--montserrat',
});
const sourceSerif4 = Source_Serif_4({
	subsets: ['latin'],
	variable: '--sourceSerif4',
});

export default function App({ Component, pageProps }) {
	// Changing the class that gives the page its background color.
	// depending on the isGreen truth value.
	useEffect(() => {
		document.body.className = pageProps.isGreen ? 'green' : 'purple';
	}, [pageProps.isGreen]);
	return (
		<UserProvider>
			<main className={`${montserrat.variable} ${sourceSerif4.variable}`}>
				<Component {...pageProps} />
			</main>
		</UserProvider>
	);
}
