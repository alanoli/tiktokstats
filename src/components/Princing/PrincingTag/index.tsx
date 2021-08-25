import React from 'react';

import styles from './princingtag.module.scss';
import sendMessage from '../../../hooks/useWpp';

const PrincingTag = ({ title, price }) => {
    return (
        <div className={styles.container}>
            <p>{title}</p>
            <p className={styles.price}>{price}</p>
            <button onClick={sendMessage} >Contratar</button>
        </div>
    )
}

export default PrincingTag;