import { Logo } from '../components/UI/Logo/Logo';
import Image from 'next/image';
import imgAbout from '../images/about/N.A.O.jpg';
import Link from 'next/link';
import BtnLink from '../components/UI/button/BtnLink/BtnLink';
import { Line } from '../components/UI/line/Line';
import style from './about.module.scss';
import Accordion from '../components/accordion/Accordion';

export default function AboutPage() {
	return (
		<>
			<aside className={style.aside}>
				<div className={style.aside__wrap}>
					<Logo />
					<nav className={style.nav}>
						<Link href="/home" className={style.nav__link}>
							home
						</Link>
					</nav>
					<Line />
				</div>
				<span className={style.copyright}>© N.A.O-2023</span>
			</aside>
			<main className={style.main}>
				<section className={style.head}>
					<h1 className={style.title}>About</h1>
					<figure className={style.pic}>
						<Image
							className={style.img}
							src={imgAbout}
							alt="image Andrii Nasuschnyi"
							priority
						/>
					</figure>
				</section>
				<section className={style.desc}>
					<h2 className={style.quote}>
						I&apos;m Andrii N. a developer and problem solver.
					</h2>
					<Accordion />
					<BtnLink />
				</section>
			</main>
		</>
	);
}
