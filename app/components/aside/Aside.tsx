import { Logo } from '../UI/Logo/Logo';
import Socials from '../socials/Socials';
import style from './aside.module.scss';
import Copyright from '../copyright/Copyright';
import { Line } from '../UI/line/Line';

const Aside = () => {
	return (
		<aside className={style.aside}>
			<div className={style.wrap}>
				<Logo />
				<Socials />
				<Line />
			</div>
			<Copyright />
		</aside>
	);
};

export { Aside };
