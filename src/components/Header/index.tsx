/* eslint @next/next/no-img-element: "off" */
import React from 'react';

import styles from './header.module.scss';

const Header = () => {
    return (
        <div className={styles.container}>
            <img src={"/tiktoklogo.svg"} alt={"tiktoklogo"} width={100} height={100}/>
            <h4>TikTok Stats</h4>
        </div>
    )
}

export default Header;