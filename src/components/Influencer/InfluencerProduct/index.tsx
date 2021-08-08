import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

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
			<h2>receba uma <strong>consultoria</strong> personalizada e totalmente <strong>automatizada</strong> com a análise do seu perfil</h2>
			<section>
				<img src="inf1.png" alt="" />
				<p>Coletamos os dados de <strong>todos</strong> os seus vídeos</p>
				<img src="inf2.png" alt="" />
				<p>Os dados são processados e analisados</p>
				<img src="inf3.png" alt="" />
				<p>Entregamos um relatório completo com as análises e dicas</p>
			</section>
			<h3>Plano</h3>
			<PricingTag
				title={"Consultoria completa do perfil"}
				price={"R$ 35,00"}
			/>
		</div>
	)
}

export default InfluencerProduct;