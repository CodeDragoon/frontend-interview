import { expect, test } from 'vitest'
import Contact from './Contact'
import { render, screen } from '@testing-library/react'
// import '@testing-library/jest-dom'


test('add function test', () => {
    render(<Contact />);
    const arr = screen.getByTestId("contact-element")

    expect(screen.getByRole('paragraph')).toHaveProperty()
})