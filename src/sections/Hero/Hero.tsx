import Image from 'next/image';
import { HeroBG } from '../../../public/graphics';
import { Button } from '@/components';

const Hero = () => {
	return (
		<section className={'relative w-full -z-20'}>
			<div className={'relative w-full min-h-[390px] 2xl:min-h-[550px] 4xl:min-h-[750px] 5xl:min-h-[960px] [clip-path:inset(0_0_0_0)]'}>
				<div className={'fixed w-full h-full left-0 top-0'}>
					<Image 
						src={HeroBG} 
						alt={'Knots & Bells - Timeless Wedding Experiences'} 
						width={1440}
						height={390}
						//fill={true}
						objectFit={'cover'}
						className={'relative block inset-0 w-full min-h-[390px] object-cover bg-center '}	
					/>
				</div>
			</div>
			<div className={'container !max-w-[800px] mx-auto mt-20 flex flex-col items-center gap-7 text-center'}>
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