import Image from 'next/image';
import { Goals1, Goals2, Goals3, Goals4, Goals5 } from '../../../public/graphics';
import './Goals.css';

const Goals = () => {
	return (
		<section data-croll-section className={'relative text-center bg-[url("/graphics/goals_bg_4x.webp")] bg-cover bg-left bg-fixed pt-28 pb-56'}>
			{/* Overlay */}
			<span className={'absolute inset-0 bg-cream/70'}/>
			{/* Text */}
			<div className={'container relative z-10 px-4 lg:px-24'}>
				<h1 className={'mb-8'}>It&apos;s all in the details</h1>
				<p className={''}>
					Our goal is to strike a perfect balance between comfort and splendor, 
					ensuring that your special day is nothing less than extraordinary. 
					With our expertise and attention to detail, 
					we are committed to creating a moment in time that you will cherish forever.
				</p>
			</div>
			{/* Images */}
			<div className={'container text-center absolute left-0 right-0 bottom-0 w-full flex flex-row justify-center gap-2 lg:gap-4 2xl:gap-8 translate-y-1/2 z-20'}>
				<Image data-scroll data-scroll-speed={0.12} src={Goals1} alt={''} className={'img-card'}/>
				<Image data-scroll data-scroll-speed={0.175} src={Goals2} alt={''} className={'img-card'}/>
				<Image data-scroll data-scroll-speed={0.25} src={Goals3} alt={''} className={'img-card translate-y-8'}/>
				<Image data-scroll data-scroll-speed={0.175} src={Goals4} alt={''} className={'img-card'}/>
				<Image data-scroll data-scroll-speed={0.12} src={Goals5} alt={''} className={'img-card'}/>
			</div>
			{/* Line */}
			<span className={'absolute block w-full border-b-2 border-black top-full mt-32'}/>
		</section>
	);
};
export default Goals;