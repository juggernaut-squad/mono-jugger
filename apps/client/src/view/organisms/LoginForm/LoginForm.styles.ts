import { styled } from '@mui/material/styles';

export const Root = styled('div')(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '100%',
}));

export const Controls = styled('div')(({ theme }) => ({
	display: 'grid',
	gridTemplateColumns: '1fr',
	gridTemplateRows: 'repeat(4, "1fr")',
	gridColumnGap: 0,
	gridRowGap: 25,
}));
