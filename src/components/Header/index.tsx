/* eslint @next/next/no-img-element: "off" */
import React from 'react';

import styles from './header.module.scss';
import prefixPath from "../../utils/applicationPrefixPath";

const Header = () => {
    return (
        <div className={styles.container}>
            <section className={styles.content}>
                <img src={prefixPath + "/tiktoklogo.svg"} alt={"tiktoklogo"} width={100} height={100} />
                <h4>TikTok Stats</h4>
            </section>
        </div>
    )
}

export default Header;