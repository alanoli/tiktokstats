import React from 'react';
import Image from 'next/image';

import styles from './principles.module.scss';

const Principle = ({ imageSource, title, text }) => {
    return (
        <div className={styles.container}>
            <Image src={imageSource} alt="" height={300} width={300} />
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}

export default Principle;