import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Navbar from '..';

describe('navbar tests', () => {
    test('should render navbar correctly', () => {
        const { getByText } = render(<Navbar />);

        expect(getByText(/contact us/i)).toBeInTheDocument();
        expect(getByText(/share link/i)).toBeInTheDocument();
    });
});
