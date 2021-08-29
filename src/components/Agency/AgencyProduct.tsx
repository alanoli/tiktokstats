/* eslint @next/next/no-img-element: "off" */
import React, { useEffect, useRef } from 'react';
import styles from './agencyproduct.module.scss';

import PricingTag from '../Princing/PrincingTag';

import useScrollVisibility from '../../hooks/useScrollVisibility';
import prefixPath from "../../utils/applicationPrefixPath";

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
			<img src={prefixPath + "/agency.svg"} alt={""} height={300} width={300} />
			<h4 className={styles.advantageTextLeft}>O nosso comparador considera uma série de fatores para tomada de decisão, tais como:</h4>
			<img src={prefixPath + "/agency_factors.svg"} alt={""} height={300} width={300} />
			<h4 className={styles.advantageTextRight}>Comparamos múltiplas contas no TikTok, te mostrando quais se sobressaem em determinados aspectos</h4>
			<img
				src={prefixPath + "/agency_acc_compare.svg"} alt={""} height={500} width={500}
				className={`${styles.compare}`}
			/>
			<h1>Planos</h1>
			<section>
				<PricingTag title={"Compare 2 contas"} price={"R$ 25,00"} />
				<PricingTag title={"Compare 4 contas"} price={"R$ 35,00"} />
				<PricingTag title={"Compare 10  contas"} price={"R$ 55,00"} />
			</section>
		</div>
	)
}

export default AgencyProduct;