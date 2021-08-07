import React, { useEffect, useRef } from 'react';

import styles from './influencerproduct.module.scss';

import PricingTag from '../../Princing/PrincingTag';
import useScrollVisibility from '../../../hooks/useScrollVisibility';

const InfluencerProduct = () => {
	const containerRef = useRef(null);
	const { observe, visible } = useScrollVisibility(containerRef);

	useEffect(() => {
		observe();
	}, []);

	return (
		<div
			className={`${styles.container} ${visible ? styles.visible : ""}`}
			ref={containerRef}
		>
			<h1>Influencer,</h1>
			<h2>receba uma consultoria personalizada e totalmente automatizada com a análise do seu perfil</h2>
			<PricingTag
				title={"Consultoria completa do perfil"}
				price={"R$ 35,00"}
			/>
		</div>
	)
}

export default InfluencerProduct;