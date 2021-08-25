/* eslint @next/next/no-img-element: "off" */
import React from 'react';

import styles from './landing.module.scss';

const Landing = () => {
	return (
		<div className={styles.container}>
			<img src={"/landing.svg"} alt="" height={300} width={300} />
			<section>
				<h1>Tome decisões no TikTok baseadas em dados</h1>
			</section>
		</div>
	)
}

export default Landing;