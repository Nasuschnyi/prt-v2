import Link from 'next/link';
import style from './btn-link.module.scss';

export default function BtnLink() {
	return (
		<Link className={style.btn} href="/contact">
			<span className={style.circle}></span>
			<span className={style.white__circle}>
				<svg id="icon-arrow-right" viewBox="0 0 21 12">
					<path d="M17.104 5.072l-4.138-4.014L14.056 0l6 5.82-6 5.82-1.09-1.057 4.138-4.014H0V5.072h17.104z"></path>
				</svg>
			</span>
			<span className={style.text}>Contact me</span>
		</Link>
	);
}
