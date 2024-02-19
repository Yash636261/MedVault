import { render, screen } from '@testing-library/react';
import AdminDashboard from './AdminDashboard';

describe('AdminDashboard', () => {
  test('renders welcome message', () => {
    render(<AdminDashboard />);
    const welcomeMessage = screen.getByText(/Welcome/i);
    expect(welcomeMessage).toBeInTheDocument();
  });

  test('renders stats cards', () => {
    render(<AdminDashboard />);
    const totalStatsCard = screen.getByText(/Total/i);
    const neurologyStatsCard = screen.getByText(/Neurology/i);
    const cardiologyStatsCard = screen.getByText(/Cardiology/i);
    const pediatricsStatsCard = screen.getByText(/Pediatrics/i);

    expect(totalStatsCard).toBeInTheDocument();
    expect(neurologyStatsCard).toBeInTheDocument();
    expect(cardiologyStatsCard).toBeInTheDocument();
    expect(pediatricsStatsCard).toBeInTheDocument();
  });

  // Add more tests for other components and functionality as needed
});