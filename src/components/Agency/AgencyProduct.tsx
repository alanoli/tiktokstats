import React from 'react';
import Image from 'next/image';
import styles from './agencyproduct.module.scss';

import PricingTag from '../Princing/PrincingTag';

const AgencyProduct = () => {
    return (
        <div className={styles.container}>
            <h2>Decida qual influencer vai espalhar a sua marca pelo mundo</h2>
            <Image src={"/agency.svg"} alt={""} height={300} width={300} />
            <h2>O nosso comparador considera uma série de fatores para tomada de decisão, tais como:</h2>
            <Image src={"/agency_factors.svg"} alt={""} height={300} width={300} />
            <h1>Planos</h1>
            <PricingTag title={""} price={"R$ 25,00"} />
            <PricingTag title={""} price={"R$ 35,00"} />
            <PricingTag title={""} price={"R$ 55,00"} />
        </div>
    )
}

export default AgencyProduct;