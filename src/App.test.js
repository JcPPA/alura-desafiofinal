import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

test('renders Bem-vindo ao StudyFlix link', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const linkElement = screen.getByText(/Bem-vindo ao StudyFlix/i);
  expect(linkElement).toBeInTheDocument();
});

