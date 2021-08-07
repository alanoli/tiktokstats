import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

import styles from './principles.module.scss';

import useScrollVisibility from '../../hooks/useScrollVisibility';

const Principle = ({ imageSource, title, text }) => {
	const principleRef = useRef(null);
	const { observe, visible } = useScrollVisibility(principleRef);

	useEffect(() => {
		observe();
	}, []);

	return (
		<div className={`${styles.container} ${visible ? styles.visible : ""}`} ref={principleRef}>
			<Image src={imageSource} alt="" height={300} width={300} />
			<h2>{title}</h2>
			<p>{text}</p>
		</div>
	)
}

export default Principle;