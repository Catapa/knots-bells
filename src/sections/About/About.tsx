import Image from 'next/image';
import { AboutImg, AboutBlob, Triangle } from '../../../public/graphics';

const About = () => {
	return (
		<section className={'relative bg-cream my-24'}>
			{/* Triangles */}
			<Image src={Triangle} alt={''} className={'absolute top-0 left-10 lg:left-32 -translate-y-1/2 z-20 w-[70px]'}/>
			<Image src={Triangle} alt={''} className={'absolute bottom-0 left-[75%] lg:left-[58%] translate-y-1/2 z-20 w-[70px] rotate-180'}/>
			{/* Parent flex container for text and image */}
			<div className={'container h-full flex flex-col-reverse lg:flex-row justify-between gap-16 overflow-hidden py-10'}>
				<div className={'relative bg-white w-full pl-10 lg:pl-28 pr-8 lg:pr-12 py-24 basis-2/3 flex flex-col justify-center'}>
					{/* Center lines */}
					<span className={'absolute left-1/2 top-0 -translate-y-1/2 block h-[80px] border-2 border-black z-10 bg-black'}/>
					<span className={'absolute left-1/2 bottom-0 translate-y-1/2 block h-[80px] border-2 border-black z-10 bg-black'}/>
					{/* Ripped paper-like blob */}
					<Image src={AboutBlob} alt={''} className={'absolute object-contain w-full h-full left-0 top-0 -translate-x-[54%] lg:-translate-x-1/2 scale-110 z-10'}/>
					{/* About us text */}
					<h1>About Us</h1>
					<p className={'mt-6 lg:mt-16 lg:w-2/3 w-full lg:max-w-[550px] z-20'}>
						We specialize in creating timeless wedding experiences that reflect your unique love story. 
						Our team of expert wedding planners is dedicated to taking care of all the details, 
						so you can focus on creating unforgettable memories that will last a lifetime. 
						From venue selection and vendor coordination to budget management and timeline creation, 
						we work tirelessly to ensure your special day is stress-free and flawless.
					</p>
				</div>
				<div className={'absolute lg:relative max-w-[30%] lg:w-full top-0 right-[4%] lg:right-0 -translate-y-[35%] lg:translate-y-0 h-max basis-1/3'}>
					<span className={'absolute block w-full h-full border-2 border-black z-10'}/>
					<Image src={AboutImg} alt='About us' width={1496} height={1920} className={'min-w-[100px] w-full h-full object-contain translate-x-[25px] translate-y-[15px]'}/>
				</div>
			</div>
		</section>
	);
};
export default About;