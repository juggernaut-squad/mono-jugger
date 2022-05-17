import { render } from '@testing-library/react';

import AtomExample from './atom-example';

describe('AtomExample', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<AtomExample />);
		expect(baseElement).toBeTruthy();
	});
});
