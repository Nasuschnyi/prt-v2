import Link from 'next/link';
import { Logo } from '../components/UI/Logo/Logo';
import style from './work.module.scss';
import Copyright from '../components/copyright/Copyright';
import { Line } from '../components/UI/line/Line';
import { WorkPageSwiper } from './WorkPageSwiper/WorkPageSwiper';

const WorkPage = () => {
	return (
		<>
			<aside className={style.aside}>
				<div className={style.wrap}>
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
			<main
				id="top"
				className={style.work}
			>
				<section className={style.wrapper}>
					<div className={style.page}>
						<h2 className={style.title}>work</h2>
						<p className={style.text}>Welcome to My Works!</p>
						<p className={style.text}>
							Discover projects where creativity meets
							functionality. Each showcases my expertise in
							crafting user-focused, high-performance web
							applications. Let’s innovate together!
						</p>
					</div>
				</section>
				<section className={style.scroll}>
					<WorkPageSwiper />
				</section>
			</main>
		</>
	);
};

export default WorkPage;
