import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react'
import Contact from './Contact';
import '@testing-library/jest-dom/vitest'

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