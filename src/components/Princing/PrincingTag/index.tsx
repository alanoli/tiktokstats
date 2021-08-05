import React from 'react';

import styles from './princingtag.module.scss';

const PrincingTag = ({ title, price }) => {
    return (
        <div className={styles.container}>
            <p>{title}</p>
            <p className={styles.price}>{price}</p>
            <button>Contratar</button>
        </div>
    )
}

export default PrincingTag;