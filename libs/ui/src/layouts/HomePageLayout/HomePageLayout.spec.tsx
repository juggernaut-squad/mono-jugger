import { render } from '@testing-library/react';

import HomePageLayout from './HomePageLayout';

describe('HomePageLayout', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<HomePageLayout />);
		expect(baseElement).toBeTruthy();
	});
});
