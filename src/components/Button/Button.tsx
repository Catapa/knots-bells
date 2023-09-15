import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}
const Button = ({children} : Props)  => {
	return (
		<button className={'relative text-black text-xl font-normal font-kulim-park border border-black px-16 py-2'}>
			<span>
				{children}
			</span>
			<span className={'block absolute top-[5px] left-[5px] w-full h-full bg-cream -z-10'}/>
		</button>
	);
};
export default Button;