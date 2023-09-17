'use client';
import { useEffect } from 'react';
import { About, Contact, Goals, Hero, HowToStart, Offers } from '@/sections';

export default function Home() {

	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import('locomotive-scroll')).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);

	return (
		<main data-scroll-container>
			<Hero />
			<About />
			<HowToStart />
			<Goals />
			<Offers />
			<Contact />
		</main>
	);
};
