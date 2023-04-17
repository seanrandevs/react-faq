import { render, screen } from '@testing-library/react';
import Faq from './Faq';

test('if header is Frequently Asked Questions', async () => {
    render(<Faq />);
    const headingElement = screen.getByText("Frequently Asked Questions");
    expect(headingElement).toBeInTheDocument();
});