import { render } from '@testing-library/react';

import MoleculeExample from './molecule-example';

describe('MoleculeExample', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<MoleculeExample />);
		expect(baseElement).toBeTruthy();
	});
});
