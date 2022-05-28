import { styled } from '@mui/material/styles';

export const Root = styled('div')(({ theme }) => ({
	display: 'grid',
	gridTemplateRows: 'max-content 1fr',
	gridGap: 72,
	width: '100%',
	height: '100%',
	padding: 24,
	boxSizing: 'border-box',
}));

export const Controls = styled('div')(({ theme }) => ({
	display: 'grid',
	gridAutoFlow: 'column',
	gridAutoColumns: 'max-content',
	alignItems: 'center',
	justifyContent: 'center',
	gridGap: 14,
}));

export const List = styled('div')(({ theme }) => ({
	display: 'grid',
	gridAutoFlow: 'row',
	gridAutoRows: 'max-content',
	justifySelf: 'center',
	alignItems: 'start',
	gridGap: 24,
	width: '300px',
}));

export const Item = styled('div')(({ theme }) => ({
	display: 'grid',
	gridTemplateColumns: '1fr max-content',
	alignContent: 'center',
	alignItems: 'center',
	gridGap: 12,
	borderBottom: '2px solid lightgrey',
	padding: '0 0 8px 4px',
}));
