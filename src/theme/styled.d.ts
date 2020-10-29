// import original module declarations
import 'styled-components';

// and extend them!
interface IBreakpoints {
	xs: number;
	sm: number;
	md: number;
	lg: number;
	xl: number;
}

interface IPalette {
	main: string;
	light: string;
	dark: string;
}

declare module 'styled-components' {
	export interface DefaultTheme {
		breakpoints: IBreakpoints;
		palette: {
			primary: IPalette;
		};
	}
}
