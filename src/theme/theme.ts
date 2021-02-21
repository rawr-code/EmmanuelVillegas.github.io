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
			main: '#5DDBD3',
			light: '#5DDBD3',
			dark: '#5DDBD3',
			contrastText: '#fff'
		},
		secondary: {
			main: '#091F2C',
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
