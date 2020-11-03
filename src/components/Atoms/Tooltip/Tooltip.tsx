import styled from 'styled-components';

const TooltipWrapper = styled.span`
	display: inline-block;
	position: relative;
	border-bottom: 1px dashed #000;

	&:hover {
		&::before,
		::after {
			display: block;
			opacity: 1;
		}
	}

	&::before {
		content: attr(data-text);
		position: absolute;
		z-index: 1;

		bottom: 125%;
		left: 50%;
		transform: translateX(-50%);

		font-size: 14px;
		padding: 4px 8px;
		border-radius: 4px;
		background: #000;
		color: #fff;
		text-align: center;

		display: none;

		opacity: 0;
		transition: 0.3s opacity;
	}

	&::after {
		content: ' ';
		position: absolute;
		top: -25%;
		left: 50%;
		margin-left: -5px;
		border-width: 5px;
		border-style: solid;
		border-color: black transparent transparent transparent;
		display: none;
	}
`;

interface Props {
	text: string;
	children: React.ReactNode;
}

const Tooltip: React.FC<Props> = ({ text, children }) => {
	return <TooltipWrapper data-text={text}>{children}</TooltipWrapper>;
};

export default Tooltip;
