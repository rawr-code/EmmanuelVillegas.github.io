import { DefaultTheme } from 'styled-components';

import createBreakpoints from './createBreakpoints';

const theme: DefaultTheme = {
	drawer: {
		width: '260px'
	},
	breakpoints: createBreakpoints(),
	palette: {
		background: {
			paper: '#fff',
			default: '#212529'
		},
		primary: {
			main: '#007bff',
			light: '#007bff',
			dark: '#007bff',
			contrastText: '#fff'
		},
		secondary: {
			main: '#121212',
			light: '#161616',
			dark: '#007bff',
			contrastText: '#fff'
		},
		text: {
			primary: 'rgba(0, 0, 0, 0.87)',
			secondary: 'rgba(0, 0, 0, 0.54)',
			disabled: 'rgba(0, 0, 0, 0.38)',
			hint: 'rgba(0, 0, 0, 0.38)',
			divider: 'rgba(0, 0, 0, 0.12)'
		}
	}
};

export default theme;
