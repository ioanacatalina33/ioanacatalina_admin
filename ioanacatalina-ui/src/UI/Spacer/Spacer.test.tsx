import { Spacer, SpaceTypes } from './Spacer';
import { render } from 'tests/testsUtils';

describe('Spacer Component', () => {
    it('renders with extra small size', () => {
        const { container } = render(<Spacer size={() => SpaceTypes.xs} />);
        expect(container).toMatchSnapshot();
    });

    it('renders with small size', () => {
        const { container } = render(<Spacer size={() => SpaceTypes.s} />);
        expect(container).toMatchSnapshot();
    });

    it('renders with medium size', () => {
        const { container } = render(<Spacer size={() => SpaceTypes.m} />);
        expect(container).toMatchSnapshot();
    });

    it('renders with large size', () => {
        const { container } = render(<Spacer size={() => SpaceTypes.l} />);
        expect(container).toMatchSnapshot();
    });

    it('renders with extra large size', () => {
        const { container } = render(<Spacer size={() => SpaceTypes.xl} />);
        expect(container).toMatchSnapshot();
    });

    it('renders with extra extra large size', () => {
        const { container } = render(<Spacer size={() => SpaceTypes.xxl} />);
        expect(container).toMatchSnapshot();
    });
});
