import Head from 'next/head';

import styles from './home.module.scss';

import Header from '../components/Header';
import PrinciplesComponent from '../components/PrinciplesComponent';
import Landing from '../components/Landing';
import HealthPanel from '../components/HealthPanel';
import InfluencerProduct from '../components/Influencer/InfluencerProduct';
import AgencyProduct from '../components/Agency/AgencyProduct';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>TikTok Stats | Home</title>
				<meta name="description" content="The TikTok Stats" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Landing />
			<InfluencerProduct />
			<AgencyProduct />
			<PrinciplesComponent />
			{/* <HealthPanel /> */}
		</div>
	)
}
