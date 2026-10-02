import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
test('provides current resume, contact details, and complete career history', () => {
 render(<App />);
 expect(screen.getByRole('link', { name: 'Download resume' })).toHaveAttribute('href', '/Tsz-Kin-Kong-Resume.pdf');
 expect(screen.getByRole('link', { name: 'kkinkong1997@gmail.com' })).toHaveAttribute('href', 'mailto:kkinkong1997@gmail.com');
 expect(screen.getByText('Eagle Express Group')).toBeInTheDocument();
 expect(screen.getByText('Nov 2021 — Aug 2024')).toBeInTheDocument();
 expect(screen.getByText('New World Development Company Limited')).toBeInTheDocument();
});
test('mobile navigation expands and closes after choosing a section', () => {
 render(<App />);
 const toggle = screen.getByRole('button', { name: 'Open navigation' });
 fireEvent.click(toggle);
 expect(toggle).toHaveAttribute('aria-expanded', 'true');
 fireEvent.click(screen.getByRole('link', { name: 'Work', exact: true }));
 expect(toggle).toHaveAttribute('aria-expanded', 'false');
});
