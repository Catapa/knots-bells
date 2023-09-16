import { Button } from '@/components';
import './Offers.css';
import Image from 'next/image';
import { Blob2 } from '../../../public/graphics';

const Offers = () => {
	return (
		<>
			<section className={'container mt-60 mb-16 text-center'}>
				<h1 className={'text-center lg:text-start'}>We have all waht you need</h1>
				<div className={'grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full text-black text-xl font-normal my-9'}>
					<span className={'offer-item'}>Venues</span>
					<span className={'offer-item'}>Band</span>
					<span className={'offer-item'}>Catering</span>
					<span className={'offer-item'}>Accomodation</span>
					<span className={'offer-item'}>Photographer</span>
					<span className={'offer-item'}>DJ</span>
					<span className={'offer-item'}>Decoration</span>
					<span className={'offer-item'}>Dress & Suit</span>
					<span className={'offer-item'}>Bridal Salons</span>
					<span className={'offer-item'}>Jewelers</span>
					<span className={'offer-item'}>Gifts</span>
					<span className={'offer-item'}>Bridal Showers</span>
					<span className={'offer-item'}>Beauty</span>
					<span className={'offer-item'}>Cakes</span>
					<span className={'offer-item'}>Honeymoon</span>
					<span className={'offer-item'}>Transportation</span>
				</div>
				<Button>Details</Button>
			</section>
			<Image src={Blob2} alt={''} className={'absolute right-0 translate-x-1/3 -translate-y-[110%] -z-10 overflow-hidden'}/>
		</>
		
	);
};
export default Offers;