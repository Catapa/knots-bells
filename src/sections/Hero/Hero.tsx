import Image from 'next/image';
import { HeroBG } from '../../../public/graphics';

const Hero = () => {
	return (
		<section className={'w-full text-center'}>
			<Image 
				src={HeroBG} 
				alt={'Knots & Bells - Timeless Wedding Experiences'} 
				width={1440}
				height={390} 
				className={'w-full min-h-[360px] object-cover origin-center'}	
			/>
			<div className={'max-w-[800px] mx-auto mt-20 flex flex-col gap-7'}>
				<h1>Timeless Wedding Experiences</h1>
				<h2 className={''}>
					Your love story deserves a beautiful beginning. Let us take care of the details, so you can focus on creating memories that will last a lifetime.
				</h2>
				<button>
					Get in touch
				</button>
			</div>
			
		</section>
	);
};
export default Hero;