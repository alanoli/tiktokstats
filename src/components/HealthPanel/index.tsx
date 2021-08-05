import React from 'react';
import Image from 'next/image';

import styles from './healthpanel.module.scss';
import SearchIcon from '@material-ui/icons/Search';

const HealthPanel = () => {
    return (
        <div className={styles.container}>
            <section className={styles.search}>
                <input type="text" placeholder="Insira seu @" />
                <SearchIcon />
            </section>
            <section className={styles.content}>
                <Image src={"/sample_user.svg"} alt="" height={300} width={300} />
                <div>
                    <h2>78k </h2>
                    <h3>Seguidores</h3>
                    <h2>53</h2>
                    <h3>Vídeos</h3>
                    <h2>10,3% </h2>
                    <h3>Engajamento</h3>
                </div>
            </section>
            <button>Relatório completo</button>
        </div>
    )
}

export default HealthPanel;