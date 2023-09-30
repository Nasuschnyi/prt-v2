import { Swiper, SwiperSlide } from 'swiper/react';
import './styles.scss';
import style from '../work.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { Mousewheel } from 'swiper';
import items from './WorkItems';

const WorkPageSwiper = () => {
	return (
		<>
			<Swiper
				direction={'vertical'}
				slidesPerView={3}
				spaceBetween={30}
				loop={true}
				mousewheel={true}
				modules={[Mousewheel]}
			>
				{items.map((item) => (
					<SwiperSlide key={item.id}>
						<Link
							className={style.item}
							target="_blank"
							href={`${item.href}`}
						>
							<figure className={style.figure}>
								<Image
									src={item.image}
									className={style.img}
									alt={item.imgAlt}
								/>
							</figure>
							<h3 className={style.heading}>{item.title}</h3>
							<div className={style.desc}>
								<p>{item.desc}</p>
								<p>{item.hashtag}</p>
							</div>
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export { WorkPageSwiper };
