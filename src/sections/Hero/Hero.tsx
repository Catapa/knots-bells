import Image from 'next/image';
import { HeroBG } from '../../../public/graphics';
import { Button } from '@/components';

const Hero = () => {
	return (
		<section className={'w-full'}>
			<Image 
				src={HeroBG} 
				alt={'Knots & Bells - Timeless Wedding Experiences'} 
				width={1440}
				height={390} 
				className={'w-full min-h-[360px] object-cover origin-center'}	
			/>
			<div className={'max-w-[800px] mx-auto mt-20 flex flex-col items-center gap-7'}>
				<h1>Timeless Wedding Experiences</h1>
				<p className={''}>
					Your love story deserves a beautiful beginning. Let us take care of the details, so you can focus on creating memories that will last a lifetime.
				</p>
				<Button>
					Get in touch
				</Button>
			</div>
			
		</section>
	);
};
export default Hero;