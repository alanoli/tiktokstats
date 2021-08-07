import React from 'react';
import Image from 'next/image';

import styles from './header.module.scss';

const Header = () => {
    return (
        <div className={styles.container}>
            <Image src={"/tiktoklogo.svg"} alt={"tiktoklogo"} width={100} height={100}/>
            <h4>TikTok Stats</h4>
        </div>
    )
}

export default Header;