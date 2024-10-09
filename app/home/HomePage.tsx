import Link from 'next/link';
import { Aside } from '../components/aside/Aside';
import style from './home.module.scss';
import HeroImage from '../components/UI/HeroImage/HeroImage';

export default function HomePage() {
	return (
		<>
			<Aside />
			<main className={style.home}>
				<article className={style.content}>
					<h1 className={style.title}>Andrii Nasuschnyi</h1>
					<p className="subtitle">Front-end Developer</p>
					<p className="subtitle">
						Seeking collaboration for development
					</p>
				</article>
				<nav className={style.menu}>
					<menu className={style.list}>
						<li className={style.item}>
							<Link
								href="/work"
								className={style.link}
							>
								work
							</Link>
						</li>
						<li className={style.item}>
							<Link
								href="/about"
								className={style.link}
							>
								about
							</Link>
						</li>
						<li className={style.item}>
							<Link
								href="/contact"
								className={style.link}
							>
								contact
							</Link>
						</li>
					</menu>
				</nav>
			</main>
		</>
	);
}
