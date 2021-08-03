import React from 'react';

import styles from './principles.module.scss';

const Principle = ({ imageSource, title, text }) => {
    return (
        <div className={styles.container}>
            <img src={imageSource} alt="" />
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}

export default Principle;