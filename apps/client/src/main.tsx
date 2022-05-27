import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import {
	BusinessLayerContext,
	bootstrapBusinessLogic,
	addMultipleEffects,
	addTodoEffect,
	todoEntity,
} from '@jugger/businessLogic';

import App from './app/app';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

bootstrapBusinessLogic([todoEntity], {}).then((businessLogic) => {
	addMultipleEffects([addTodoEffect]);

	root.render(
		<StrictMode>
			<BusinessLayerContext.Provider value={businessLogic}>
				<App />
			</BusinessLayerContext.Provider>
		</StrictMode>
	);
});
