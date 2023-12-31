import { Raleway } from 'next/font/google';

export const ralewayFont = Raleway({
	weight: ['300', '400', '500', '600', '700'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	variable: '--font-raleway',
	display: 'swap',
});
