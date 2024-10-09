import Link from 'next/link';
import { useState } from 'react';
import { Logo } from '../components/UI/Logo/Logo';
import style from './contact.module.scss';
import { Line } from '../components/UI/line/Line';
import Copyright from '../components/copyright/Copyright';
import HeroImage from '../components/UI/HeroImage/HeroImage';

const ContactPage = () => {
	const [links] = useState([
		{
			id: 1,
			fullTitle: 'LinkedIn',
			url: 'https://www.linkedin.com/in/andrii-nasushchnyi-353746231',
		},
		{
			id: 2,
			fullTitle: 'Telegram',
			url: 'tg://resolve?domain=nasuschnyi',
		},
		{
			id: 3,
			fullTitle: 'WhatsApp',
			url: 'https://wa.me/+380668912398',
		},
		{
			id: 4,
			fullTitle: 'Instagram',
			url: 'https://www.instagram.com/nasuschnyi',
		},
	]);

	return (
		<>
			<aside className={style.aside}>
				<div className={style.aside__wrap}>
					<Logo />
					<nav className={style.nav}>
						<Link
							href="/home"
							className={style.nav__link}
						>
							home
						</Link>
					</nav>
					<Line />
				</div>
				<Copyright />
			</aside>
			<main className={style.main}>
				<section className={style.wrap}>
					<h1 className={style.title}>Hello!</h1>
					<div className={style.content}>
						<p className={style.text}>
							I can help build you next website. Well, let’s
							discuss your task.
						</p>
						<p className={style.text}>
							Email:{' '}
							<Link
								className={style.mail}
								target="_blank"
								href={'mailto:nasuschnyj@gmail.com'}
							>
								nasuschnyj@gmail.com
							</Link>
						</p>
						<div className={style.desc}>
							On the internet:
							<ul className={style.socials}>
								{links.map((links) => (
									<li
										className={style.item}
										key={links.id}
									>
										<Link
											className={style.link}
											target="_blank"
											href={`${links.url}`}
										>
											<span id="full-title">
												{links.fullTitle}
											</span>
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				</section>
				{/* <HeroImage /> */}
			</main>
		</>
	);
};

export { ContactPage };
