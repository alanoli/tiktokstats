import Head from 'next/head';

import PrinciplesComponent from '../components/PrinciplesComponent';
import Landing from '../components/Landing';

export default function Home() {
	return (
		<div>
			<Head>
				<title>TikTok Stats | Home</title>
				<meta name="description" content="The TikTok Stats" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{/* <PrinciplesComponent /> */}
			<Landing />
		</div>
	)
}
