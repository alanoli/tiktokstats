/* eslint @next/next/no-img-element: "off" */
import React, { useEffect, useRef } from 'react';

import styles from './principles.module.scss';

import useScrollVisibility from '../../hooks/useScrollVisibility';
import prefixPath from "../../utils/applicationPrefixPath";

const Principle = ({ imageSource, title, text }) => {
	const principleRef = useRef(null);
	const { observe, visible } = useScrollVisibility(principleRef);

	useEffect(() => {
		observe();
	}, [observe]);

	return (
		<div className={`${styles.container} ${visible ? styles.visible : ""}`} ref={principleRef}>
			<img src={prefixPath + imageSource} alt="" height={300} width={300} />
			<h2>{title}</h2>
			<p>{text}</p>
		</div>
	)
}

export default Principle;