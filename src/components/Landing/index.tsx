import React from 'react';
import Image from 'next/image';

import styles from './landing.module.scss';

const Landing = () => {
	return (
		<div className={styles.container}>
			<Image src={"/landing.svg"} alt="" height={300} width={300} />
			<section>
				<h1>Tome decisões no TikTok baseadas em dados</h1>
				<button>Saiba mais</button>
			</section>
		</div>
	)
}

export default Landing;