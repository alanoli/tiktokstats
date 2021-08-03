import React from 'react';

import styles from './landing.module.scss';

const Landing = () => {
	return (
		<div className={styles.container}>
			<img src="/landing.svg" alt="" />
			<section>
				<h1>Tome decisões no TikTok baseadas em dados</h1>
				<button>Saiba mais</button>
			</section>
		</div>
	)
}

export default Landing;