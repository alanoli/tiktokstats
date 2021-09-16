import React from 'react';

import styles from './princingtag.module.scss';
import sendMessage from '../../../hooks/useWpp';

import * as gtag from '../../../lib/gtag';

const PrincingTag = ({ title, price }) => {
    const recordGaEvent = () => {
        gtag.event({
            action: 'buy_click',
            category: 'product',
            label: title,
            value: price
        })
    }
    return (
        <div className={styles.container}>
            <p>{title}</p>
            <p className={styles.price}>{price}</p>
            <button onClick={() => { recordGaEvent(); sendMessage() }} >Contratar</button>
        </div>
    )
}

export default PrincingTag;