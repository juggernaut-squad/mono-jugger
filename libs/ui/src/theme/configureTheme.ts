import * as React from 'react';
import { createTheme, Theme, ThemeOptions } from '@mui/material/styles';
import { getOverrides } from './overrides';
import { cssVariables } from './variables';
import { common } from './commonAppStyles';

type CommonStylesType = { [K in keyof typeof common]: React.CSSProperties };
type VariablesType = typeof cssVariables;

interface IThemeOptions extends ThemeOptions {
	common: CommonStylesType;
	variables: VariablesType;
}

export type ThemeType = Theme & { common: CommonStylesType } & {
	variables: VariablesType;
};

const createThemeConfig = () =>
	({
		palette: {
			type: 'dark',
		},
		props: {
			MuiDrawer: {
				ModalProps: {
					style: {
						zIndex: 9999,
					},
				},
			},
		},
		overrides: getOverrides(),
		variables: { ...cssVariables },
		common: { ...common },
	} as IThemeOptions);

const themeConfig = createThemeConfig();

export const theme = createTheme(themeConfig);
