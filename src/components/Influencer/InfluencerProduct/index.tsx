/* eslint @next/next/no-img-element: "off" */
import React, { useEffect, useRef } from 'react';

import styles from './influencerproduct.module.scss';

import PricingTag from '../../Princing/PrincingTag';
import useScrollVisibility from '../../../hooks/useScrollVisibility';
import prefixPath from "../../../utils/applicationPrefixPath";

const InfluencerProduct = () => {
	const containerRef = useRef(null);
	const { observe, visible } = useScrollVisibility(containerRef);

	useEffect(() => {
		observe();
	}, [observe]);

	return (
		<div
			className={`${styles.container} ${visible ? styles.visible : ""}`}
			ref={containerRef}
		>
			<h1>Influencer,</h1>
			<h2>receba uma <strong>consultoria</strong> personalizada com a análise do seu perfil</h2>
			<section>
				<img src={prefixPath + "/inf1.png"} alt="" />
				<p>Coletamos os dados de <strong>todos</strong> os seus vídeos</p>
				<img src={prefixPath + "/inf2.png"} alt="" />
				<p>Os dados são processados e analisados</p>
				<img src={prefixPath + "/inf3.png"} alt="" />
				<p>Entregamos um relatório completo com as análises</p>
			</section>
			<h3>Plano</h3>
			<PricingTag
				title={"Consultoria completa do perfil"}
				price={"R$ 15,00"}
			/>
		</div>
	)
}

export default InfluencerProduct;