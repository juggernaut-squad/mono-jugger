import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
	it('should render successfully', () => {
		const { baseElement } = render(
			<BrowserRouter>
				<LoginForm />
			</BrowserRouter>
		);

		expect(baseElement).toBeTruthy();
	});
});
