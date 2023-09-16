import { Inter, Kulim_Park } from 'next/font/google';
import localFont from 'next/font/local';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter'
});
const kulim_park = Kulim_Park({
	weight: ['200', '300', '400', '600', '700'],
	subsets: ['latin'],
	variable: '--font-kulim-park'
});
const rockybilly = localFont({
	src: '../../public/fonts/Rockybilly.ttf',
	variable: '--font-rockybilly'
});

export {
	inter,
	kulim_park,
	rockybilly
};