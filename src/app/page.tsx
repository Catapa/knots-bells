import { About, Contact, Goals, Hero, HowToStart, Offers } from '@/sections';

export default function Home() {
	return (
		<main>
			<Hero />
			<About />
			<HowToStart />
			<Goals />
			<Offers />
			<Contact />
		</main>
	);
};
