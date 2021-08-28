import React from 'react';

import Principle from '../Principle';
import styles from './principlescomponent.module.scss';

const PrinciplesComponent = () => {

	const principles = [
		{
			id: 0,
			imageSource: "/principlesImages/consistency.svg",
			title: "Consistência",
			text: "Ao menos um vídeo por dia é o necessário para manter a consistência em boa taxa. Mais publicações por dia são recomendadas"
		},
		{
			id: 1,
			imageSource: "/principlesImages/engagement.svg",
			title: "Engajamento",
			text: "O engajamento pode ser mensurado individualmente por publicação com os comentários, compartilhamentos, likes e visualizações"
		},
		{
			id: 2,
			imageSource: "/principlesImages/hashtags.svg",
			title: "Hashtags",
			text: "As hashtags são muito importantes para engajamento e viralização dos seus vídeos. As hashtags certas entregam o conteúdo para as pessoas certas"
		},
		{
			id: 3,
			imageSource: "/principlesImages/duration.svg",
			title: "Duração",
			text: "Vídeos mais curtos são ideias para aumentar a retenção do seu público"
		},
		{
			id: 4,
			imageSource: "/principlesImages/growth.svg",
			title: "Crescimento",
			text: "Sua conta precisa estar em constante crescimento, em número de seguidores e de curtidas"
		}
	]

	return (
		<div className={styles.container}>
			<h1>Pilares do crescimento</h1>
			{principles.map((item) => {
				return (
					<Principle
						key={item.id}
						imageSource={item.imageSource}
						title={item.title}
						text={item.text}
					/>
				)
			})}
		</div>
	)
}

export default PrinciplesComponent;