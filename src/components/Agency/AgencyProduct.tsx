/* eslint @next/next/no-img-element: "off" */
import React, { useEffect, useRef } from 'react';
import styles from './agencyproduct.module.scss';

import PricingTag from '../Princing/PrincingTag';

import useScrollVisibility from '../../hooks/useScrollVisibility';

const AgencyProduct = () => {
	const imageRef = useRef(null);
	const { observe, visible } = useScrollVisibility(imageRef);

	useEffect(() => {
		observe();
	}, [observe]);

	return (
		<div className={`${styles.container} ${visible ? styles.visible : ""}`} ref={imageRef}>
			<h1 className={styles.title}>Agência,</h1>
			<h2>decida qual influencer vai espalhar a sua marca pelo mundo</h2>
			<img src={"/agency.svg"} alt={""} height={300} width={300} />
			<h2>O nosso comparador considera uma série de fatores para tomada de decisão, tais como:</h2>
			<img src={"/agency_factors.svg"} alt={""} height={300} width={300} />
			<img
				src={"/agency_acc_compare.svg"} alt={""} height={500} width={500}
				className={`${styles.compare}`}
			/>
			<p>Comparamos múltiplas contas no TikTok, te mostrando quais se sobressaem em determinados aspectos</p>
			<PricingTag title={"Compare 2 contas"} price={"R$ 25,00"} />
			<PricingTag title={"Compare 4 contas"} price={"R$ 35,00"} />
			<PricingTag title={"Compare 10  contas"} price={"R$ 55,00"} />
		</div>
	)
}

export default AgencyProduct;