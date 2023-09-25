import Link from 'next/link';
import { useState } from 'react';
import style from './socials.module.scss';

const Socials = () => {
	const [links] = useState([
		{
			id: 1,
			title: 'LI',
			fullTitle: 'LinkedIn',
			url: 'https://www.linkedin.com/in/andrii-nasushchnyi-353746231',
		},
		{
			id: 2,
			title: 'TG',
			fullTitle: 'Telegram',
			url: 'tg://resolve?domain=nasuschnyi',
		},
		{
			id: 3,
			title: 'WA',
			fullTitle: 'WhatsApp',
			url: 'https://wa.me/+380668912398',
		},
		{
			id: 4,
			title: 'IG',
			fullTitle: 'Instagram',
			url: 'https://www.instagram.com/nasuschnyi',
		},
	]);

	return (
		<ul className={style.socials}>
			{links.map((links) => (
				<li className={style.item} key={links.id}>
					<Link
						className={style.link}
						target="_blank"
						href={`${links.url}`}
					>
						<span id="abbr-title">{links.title}</span>
						{/* <span id="full-title">{links.fullTitle}</span> */}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default Socials;
