import Image from "next/image";
import Link from "next/link";
import { Logo } from "../../../public/graphics";
import './Header.css';

const Header = () => {
	return (
		<header className={'absolute top-0 w-full'}>
			<nav className={'flex flex-row justify-between items-center px-10 py-2'}>
				<ul className={'navbar-group'}>
					<Link href={'#'} className={'navbar-link'}>Home</Link>
					<Link href={'#'} className={'navbar-link'}>Details</Link>
					<Link href={'#'} className={'navbar-link'}>Journal</Link>
				</ul>
				<Image src={Logo} alt={'Knots & Bells Logo'} width={832} height={252} className={'w-[208px] h-[62px]'}/>
				<ul className={'navbar-group'}>
					<Link href={'#'} className={'navbar-link'}>About</Link>
					<Link href={'#'} className={'navbar-link'}>Portfolio</Link>
					<Link href={'#'} className={'navbar-link'}>Contact</Link>
				</ul>

			</nav>
		</header>
	);
};
export default Header;