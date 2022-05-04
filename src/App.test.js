import { render, screen } from '@testing-library/react';
import App from './App';

test('메인 타이틀을 출력한다.', () => {
  render(<App />);
  const titleElement = screen.getByText(/Aria의 10주년을 축하해주세요./i);
  expect(titleElement).toBeInTheDocument();
});
