import 'jest-styled-components';

import { render } from 'tests/testsUtils';

import { Button } from './Button';
import { screen } from '@testing-library/react';
import { Colors } from 'environment/Colors';

describe('Button tests', () => {
    it('should have the default cursor', () => {
        render(<Button title="MyButton" />);

        const button = screen.getByRole('button');

        expect(button).toMatchSnapshot();
        expect(button).toHaveStyleRule('cursor', 'default');
    });

    it('should have the pointer cursor', () => {
        render(
            <Button
                title="MyButton"
                onClick={() => {
                    // simple function
                }}
            />
        );

        const button = screen.getByRole('button');

        expect(button).toMatchSnapshot();
        expect(button).toHaveStyleRule('cursor', 'pointer');
    });

    it('secondary variant button should have the right color and background color', () => {
        render(<Button variant={(v) => v.secondary} title="MyButton" />);

        const button = screen.getByRole('button');

        expect(button).toMatchSnapshot();

        expect(button).toHaveStyleRule('color', Colors.text.main);
        expect(button).toHaveStyleRule('background-color', Colors.background.disabled);
    });

    it('disabled button should have the default cursor and the right colors', () => {
        render(<Button disabled title="MyButton" />);

        const button = screen.getByRole('button');

        expect(button).toMatchSnapshot();

        expect(screen.getByText('MyButton')).toBeInTheDocument();
        expect(button).toHaveStyleRule('cursor', 'default');
        expect(button).toHaveStyleRule('color', Colors.text.disabled);
        expect(button).toHaveStyleRule('background-color', Colors.background.disabled);
    });

    it('should render regular button', () => {
        render(<Button disabled title="Regular button" />);

        const button = screen.getByRole('button');

        expect(button).toMatchSnapshot();

        expect(screen.getByText('Regular button')).toBeInTheDocument();
        expect(button).toHaveStyleRule('height', '4rem');
        expect(button).toHaveStyleRule('font-size', '1.4rem');
        expect(button).toHaveStyleRule('min-width', '14rem');
    });
    it('should render small button', () => {
        render(<Button disabled title="Small button" size="small" />);

        const button = screen.getByRole('button');

        expect(button).toMatchSnapshot();

        expect(screen.getByText('Small button')).toBeInTheDocument();
        expect(button).toHaveStyleRule('height', '2.4rem');
        expect(button).toHaveStyleRule('font-size', '1.2rem');
        expect(button).toHaveStyleRule('min-width', '5.6rem');
    });
});
