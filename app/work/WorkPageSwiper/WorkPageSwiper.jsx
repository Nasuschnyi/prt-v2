import { Swiper, SwiperSlide } from 'swiper/react';
import './styles.scss';
import style from '../work.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import imgVR from '../../images/work/v-r.jpg';
import imgFly from '../../images/work/fly.jpg';
import imgLitHotel from '../../images/work/lit-hotel.jpg';
import imgKmb from '../../images/work/smart-building.jpg';
import imgAvior from '../../images/work/Avior.jpg';
import imgPrt from '../../images/work/prt.jpg';
import { Mousewheel } from 'swiper';

const WorkPageSwiper = () => {
	/* const items = [
		{
			imgSrc: '',
			imgAlt: 'image',
			href: 'https://mirvr.com.ua',
			title: 'MirVR',
			desc: 'Virtual reality',
			hashtag: '#landing page',
		},
	]; */

	return (
		<>
			<Swiper
				direction={'vertical'}
				slidesPerView={3}
				spaceBetween={30}
				loop={true}
				mousewheel={true}
				modules={[Mousewheel]}
				centeredSlides={true}
			>
				{/* {items.map((items) => (
					<SwiperSlide>
						<Link
							className={style.item}
							target="_blank"
							href={`${items.href}`}
						>
							<figure className={style.figure}>
								<Image
									src={require('/app/images/work/v-r.jpg')}
									className={style.img}
									alt={items.imgAlt}
								/>
							</figure>
							<h3 className={style.heading}>{items.title}</h3>
							<div className={style.desc}>
								<p>{items.desc}</p>
								<p>{items.hashtag}</p>
							</div>
						</Link>
					</SwiperSlide>
				))} */}
				<SwiperSlide>
					<Link
						href="https://mirvr.com.ua"
						target="_blank"
						className={style.item}
					>
						<figure className={style.figure}>
							<Image
								src={imgVR}
								className={style.img}
								alt="image"
							/>
						</figure>
						<h3 className={style.heading}>MirVR</h3>
						<div className={style.desc}>
							<p>Virtual reality</p>
							<p>#landing page</p>
						</div>
					</Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link
						href="https://flysim.com.ua"
						target="_blank"
						className={style.item}
					>
						<div className={style.figure}>
							<Image
								src={imgFly}
								className={style.img}
								alt="image"
							/>
						</div>
						<h3 className={style.heading}>FlySim</h3>
						<div className={style.desc}>
							<p>Anyone can be a pilot!</p>
							<p>#landing page</p>
						</div>
					</Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link
						href="https://lit-inn.com"
						target="_blank"
						className={style.item}
					>
						<div className={style.figure}>
							<Image
								src={imgLitHotel}
								className={style.img}
								alt="image"
							/>
						</div>
						<h3 className={style.heading}>LIT-INN</h3>
						<div className={style.desc}>
							<p>LIT-INN is more than hotel</p>
							<p>#landing page</p>
						</div>
					</Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link
						href="https://www.kambio.ua/uk"
						target="_blank"
						className={style.item}
					>
						<div className={style.figure}>
							<Image
								src={imgKmb}
								className={style.img}
								alt="image"
							/>
						</div>
						<h3 className={style.heading}>Kam6io</h3>
						<div className={style.desc}>
							<p>Low-rise construction plant</p>
							<p>#landing page</p>
						</div>
					</Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link
						href="https://avior-front.herokuapp.com"
						target="_blank"
						className={style.item}
					>
						<div className={style.figure}>
							<Image
								src={imgAvior}
								className={style.img}
								alt="image"
							/>
						</div>
						<h3 className={style.heading}>Avior</h3>
						<div className={style.desc}>
							<p>A store of handmade gifts</p>
							<p>#internet-shop</p>
						</div>
					</Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link href="/" target="_blank" className={style.item}>
						<div className={style.figure}>
							<Image
								src={imgPrt}
								className={style.img}
								alt="image"
							/>
						</div>
						<h3 className={style.heading}>N.A.O</h3>
						<div className={style.desc}>
							<p>Portfolio</p>
							<p>#business card</p>
						</div>
					</Link>
				</SwiperSlide>
			</Swiper>
		</>
	);
};

export { WorkPageSwiper };
