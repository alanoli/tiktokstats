import Head from 'next/head';
import styles from '../styles/Home.module.scss';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>TikTok Stats | Home</title>
				<meta name="description" content="The TikTok Stats" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<h1 className={styles.title}>
					
				</h1>
			</main>
		</div>
	)
}
