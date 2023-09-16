import { ReactNode } from 'react';

interface Props {
	className?: string;
	children: ReactNode;
}
const Button = ({className, children} : Props)  => {
	return (
		<button className={`relative text-black text-xl font-normal font-kulim-park border border-black px-16 py-2 w-max group ${className}`}>
			<span className={'inline-block transition-all duration-500 group-hover:-translate-y-0.5'}>
				{children}
			</span>
			<span className={'block absolute top-[5px] left-[5px] w-full h-full bg-cream -z-10 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1'}/>
		</button>
	);
};
export default Button;