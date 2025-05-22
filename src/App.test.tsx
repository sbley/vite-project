import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'
import { describe, expect, it } from 'vitest'

describe('App', () => {
  it('renders the initial content', () => {
    render(<App />)
    expect(screen.getByText(/What a great app to start/i)).toBeInTheDocument()
    expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /count is 0/i })).toBeInTheDocument()
  })

  it('increments count when button is clicked', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /count is 0/i })
    fireEvent.click(button)
    expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument()
  })
})
