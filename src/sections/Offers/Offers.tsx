import { Button } from '@/components';
import './Offers.css';

const Offers = () => {
	return (
		<section className={'container mt-60 mb-8 text-center'}>
			<h1 className={'text-start'}>We have all waht you need</h1>
			<div className={'grid grid-cols-4 w-full text-black text-xl font-normal my-9'}>
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
	);
};
export default Offers;