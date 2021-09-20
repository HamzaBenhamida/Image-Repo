import { render, screen, cleanup } from '@testing-library/react';
import Title from '..Title';
import { expectsResolvedDragConstraints } from 'framer-motion/types/gestures/drag/VisualElementDragControls';

test('should render Title component', () => {
	render(<Title/>);
	const titleElement = screen.getByTestId('title-0');
	expect(titleElement).toBeInTheDocument();
})