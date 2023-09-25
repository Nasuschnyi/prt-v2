import { useRef } from 'react';
import './accordion.css';

interface AccordionItemProps {
	item: {
		id: number;
		title: string;
		content: string;
	};
	active: number | null;
	handleToggle: (id: number) => void;
}

function AccordionItem({ item, active, handleToggle }: AccordionItemProps) {
	const contentEl = useRef<HTMLDivElement | null>(null);

	return (
		<li className="accordion-item">
			<>
				<h3
					className="accordion-title"
					onClick={() => handleToggle(item.id)}
				>
					{item.title} <span>{item.id === active ? '-' : '+'}</span>
				</h3>
			</>
			<div
				ref={contentEl}
				className={`accordion-content ${
					active === item.id ? 'active' : ''
				}`}
				style={
					active === item.id
						? { height: contentEl?.current?.scrollHeight }
						: { height: '0px' }
				}
			>
				<p>{item.content}</p>
			</div>
		</li>
	);
}

export default AccordionItem;
