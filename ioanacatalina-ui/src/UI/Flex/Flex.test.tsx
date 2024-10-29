import userEvent from '@testing-library/user-event';

import { render } from 'tests/testsUtils';
import { Flex } from './Flex';
import { Typography } from 'UI/Typography/Typography';
import { DataTestId } from 'utils/consts';

describe('Flex components', () => {
    //SNAPSHOTS
    it('should  render component empty', () => {
        const { baseElement } = render(<Flex />);

        expect(baseElement).toMatchSnapshot();
    });

    it('should  render component with H1 inside', () => {
        const { baseElement } = render(
            <Flex>
                <Typography.H1>Title</Typography.H1>
            </Flex>
        );

        expect(baseElement).toMatchSnapshot();
    });

    it('should  render component with all AlignPositions -  center', () => {
        const { baseElement } = render(<Flex align={(c) => c.center} />);

        expect(baseElement).toMatchSnapshot();
    });

    it('should  render component with all AlignPositions - end ', () => {
        const { baseElement } = render(<Flex align={(c) => c.end} />);

        expect(baseElement).toMatchSnapshot();
    });

    it('should  render component with all AlignPositions - start ', () => {
        const { baseElement } = render(<Flex align={(c) => c.start} />);

        expect(baseElement).toMatchSnapshot();
    });

    it('should  render component with all JustifyPositions - start ', () => {
        const { baseElement } = render(<Flex justify={(c) => c.start} />);

        expect(baseElement).toMatchSnapshot();
    });
    it('should  render component with all JustifyPositions - center ', () => {
        const { baseElement } = render(<Flex justify={(c) => c.center} />);

        expect(baseElement).toMatchSnapshot();
    });

    it('should  render component with all JustifyPositions - end ', () => {
        const { baseElement } = render(<Flex justify={(c) => c.end} />);

        expect(baseElement).toMatchSnapshot();
    });

    it('should  render component with all JustifyPositions - around ', () => {
        const { baseElement } = render(<Flex justify={(c) => c.around} />);

        expect(baseElement).toMatchSnapshot();
    });

    it('should  render component with all JustifyPositions - between ', () => {
        const { baseElement } = render(<Flex justify={(c) => c.between} />);

        expect(baseElement).toMatchSnapshot();
    });

    it('should  render component with all JustifyPositions - evenly ', () => {
        const { baseElement } = render(<Flex justify={(c) => c.evenly} />);

        expect(baseElement).toMatchSnapshot();
    });

    it('  can call onClick function ', () => {
        const mockFn = jest.fn();
        const { baseElement, getByTestId } = render(<Flex onClick={mockFn} />);
        const element = getByTestId(DataTestId.Flex);
        userEvent.click(element);
        expect(mockFn).toHaveBeenCalled;
        expect(baseElement).toMatchSnapshot();
    });
});
