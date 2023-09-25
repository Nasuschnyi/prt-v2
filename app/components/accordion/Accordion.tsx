import { useState } from 'react';
import data from './data';
import AccordionItem from './AccordionItem';
import './accordion.css';

function Accordion() {
	const [active, setActive] = useState<number | null>(null);

	function handleToggle(index: number) {
		if (active === index) {
			return setActive(null);
		}
		setActive(index);
	}

	return (
		<ul className="accordion">
			{data.map((item) => (
				<AccordionItem
					key={item.id}
					item={item}
					active={active}
					handleToggle={handleToggle}
				/>
			))}
		</ul>
	);
}
export default Accordion;
