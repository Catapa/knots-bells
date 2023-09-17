import Image from 'next/image';
import { Logo, Triangle, UpcraftyLogo } from '../../../public/graphics';
import Link from 'next/link';
import './Footer.css';

const Footer = () => {
	return (
		<footer className={'relative grid gap-6 grid-cols-1 lg:grid-cols-3 items-center justify-items-center bg-cream px-5 pt-20 lg:pt-4 pb-12'}>
			<Image src={Triangle} alt={''} className={'absolute w-[70px] top-0 lg:top-auto left-1/2 -translate-x-1/2 -translate-y-1/2 lg:-translate-y-2/3'}/>
			<Image src={Logo} alt={'knots & bells'} className={'w-[150px] lg:w-[188px] justify-self-center lg:justify-self-start'}/>
			<div className={'flex flex-row items-center h-full lg:mt-10 order-3 lg:order-2 '}>
				<span className={'text-black font-bold text-base'}>Made with ❤️ by</span>
				<Link href={'http://www.upcrafty.com'}>
					<Image src={UpcraftyLogo} alt={'Upcrafty - Crafting digital experiences'} className={'w-[60px] ml-2 translate-y-[1px]'}/>
				</Link>
			</div>
			<nav className={'flex flex-col order-2 lg:order-3 lg:flex-row items-center lg;items-start justify-between gap-6 lg:gap-12 justify-self-center lg:justify-self-end'}>
				<Link href={'#'} className={'navbar-link'}>Vendors</Link>
				<Link href={'#'} className={'navbar-link'}>About Us</Link>
				<Link href={'#'} className={'navbar-link'}>Blog</Link>
				<Link href={'#'} className={'navbar-link'}>FAQ</Link>
				<Link href={'#'} className={'navbar-link'}>Contact Us</Link>
			</nav>
		</footer>
	);
};
export default Footer;