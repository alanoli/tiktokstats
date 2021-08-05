import React from 'react';

import PricingTag from '../../Princing/PrincingTag';

import styles from './influencerproduct.module.scss';

const InfluencerProduct = () => {
	return (
		<div className={styles.container}>
			<h1>Influencer,</h1>
			<h3>receba uma consultoria personalizada e totalmente automatizada com a análise do seu perfil</h3>
			<PricingTag
				title={"Consultoria completa do perfil"}
				price={"R$ 35,00"}
			/>
		</div>
	)
}

export default InfluencerProduct;