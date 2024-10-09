import Image from 'next/image';
import React from 'react';
import heroImage from '@/app/images/hero/hero-image.png';
import style from './hero-img.module.scss';

export default function HeroImage() {
	return (
		<figure className={style.hero__img}>
			<Image
				loading="lazy"
				alt="Hero image"
				width={800}
				height={900}
				src={heroImage}
			></Image>
		</figure>
	);
}
