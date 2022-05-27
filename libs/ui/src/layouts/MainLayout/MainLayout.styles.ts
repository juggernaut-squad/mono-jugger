import { styled } from '@mui/material/styles';

export const Root = styled('div')(({ theme }) => ({
	display: 'grid',
	gridTemplateColumns: '1fr',
	gridTemplateRows: 'max-content 1fr max-content',
	width: '100%',
	height: '100%',
}));
