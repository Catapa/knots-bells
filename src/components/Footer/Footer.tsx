import Image from 'next/image';
import { Logo, Triangle, UpcraftyLogo } from '../../../public/graphics';
import Link from 'next/link';
import './Footer.css';

const Footer = () => {
	return (
		<footer className={'relative grid grid-cols-3 items-center justify-items-center bg-cream px-5 pt-4 pb-12'}>
			<Image src={Triangle} alt={''} className={'absolute w-[70px] left-1/2 -translate-x-1/2 -translate-y-2/3'}/>
			<Image src={Logo} alt={'knots & bells'} className={'w-[188px] justify-self-start'}/>
			<div className={'flex flex-row items-center h-full mt-10'}>
				<span className={'text-black font-bold text-base'}>Made with ❤️ by</span>
				<Link href={'htp://www.upcrafty.com'}>
					<Image src={UpcraftyLogo} alt={'Upcrafty - Crafting digital experiences'} className={'w-[60px] ml-2 translate-y-[1px]'}/>
				</Link>
			</div>
			<nav className={'space-x-12 justify-self-end'}>
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