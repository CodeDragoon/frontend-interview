import { render, screen } from '@testing-library/react'
import Contact from './Contact';
import '@testing-library/jest-dom/vitest'
import userEvent from '@testing-library/user-event';

describe('test person details', () => {
    it('should render properly', function () {
        render(<Contact iAge={10} iName={"Rishabh"} />);
        const name = screen.getByPlaceholderText('name');
        expect(name).toBeInTheDocument();
        const age = screen.getByPlaceholderText('age');
        expect(age).toBeInTheDocument()
        const results = screen.getByTestId('person-details');
        expect(results).toHaveTextContent('Rishabh 10')
    })
})

describe('terms and conditions working fine', () => {
    it('terms and conditions should work fine', async () => {
        render(<Contact iAge={10} iName='Raja' />)
        const checkbox = screen.getByRole('checkbox');
        const submit = screen.getByRole('button');

        expect(checkbox).toBeInTheDocument();
        expect(checkbox).not.toBeChecked();

        expect(submit).toBeInTheDocument();
        expect(submit).toBeDisabled();

        const user = userEvent.setup();
        await user.click(checkbox);
        expect(submit).toBeEnabled()
    })
})