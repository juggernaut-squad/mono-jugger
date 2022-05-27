import { styled } from '@mui/material/styles';

interface RootProps {
	example?: boolean;
}

export const Root = styled('div', {
	shouldForwardProp: (prop) => prop !== 'example',
})<RootProps>(({ theme, example }) => ({
	width: '100%',
	height: '100%',
}));
