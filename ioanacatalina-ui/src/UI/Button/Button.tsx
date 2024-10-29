import { forwardRef } from 'react';

import { Container } from './Button.style';
import { SpacingOffsets } from 'types/styles';
import { Loader } from 'UI/Loader';

export enum ButtonSize {
    Regular = 'regular',
    Small = 'small',
    XSmall = 'xsmall'
}

export const BUTTON_SIZE_PROP: Record<ButtonSize, Record<string, number>> = {
    [ButtonSize.XSmall]: {
        height: 4,
        minWidth: 5.2,
        paddingTop: 0.9,
        paddingLeft: 1.6,
        fontSize: 1.4
    },
    [ButtonSize.Small]: {
        height: 2.4,
        minWidth: 5.6,
        paddingTop: 0.2,
        paddingLeft: 0.8,
        fontSize: 1.2
    },
    [ButtonSize.Regular]: {
        height: 4,
        minWidth: 14,
        paddingTop: 0.8,
        paddingLeft: 1.6,
        fontSize: 1.4
    }
};

export enum ButtonVariants {
    primary = 'primary',
    secondary = 'secondary',
    warning = 'warning',
    outline = 'outline',
    link = 'link'
}

export interface ButtonStyleProps extends SpacingOffsets {
    size?: 'regular' | 'small' | 'xsmall';
    width?: number;
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    hasFullWidth?: boolean;
    smallerOnMobile?: boolean;
    hasPointer?: boolean;
    loading?: boolean;
    disabled?: boolean;
    stopPropagation?: boolean;
}

export interface ButtonProps extends ButtonStyleProps {
    title: string;
    children?: React.ReactNode;
    id?: string;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    dataTestId?: string;
    variant?: (type: typeof ButtonVariants) => string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            size = 'regular',
            title,
            className,
            type = 'button',
            loading,
            disabled,
            width,
            minWidth,
            maxWidth,
            minHeight,
            marginOffset,
            paddingOffset,
            hasFullWidth,
            smallerOnMobile,
            hasPointer,
            stopPropagation,
            children,
            id,
            dataTestId,
            variant,
            onClick,
            onMouseEnter,
            onMouseLeave
        },
        ref
    ) => {
        const processTitleAsId = title?.replaceAll(' ', '').replaceAll('+', '').toLowerCase();

        const onButtonClick = (e: React.MouseEvent) => {
            if (stopPropagation) e.stopPropagation();

            if (!disabled && !loading && onClick) {
                onClick();
            }
        };

        function dataTestIdValue() {
            // initial value when login page is loaded is undefined and this might crash
            const parsedTitle = title ? title.replace(/\s/g, '').toLowerCase() : '';

            if (dataTestId) {
                return parsedTitle + '_' + dataTestId.replace(/\s/g, '').toLowerCase();
            }

            return parsedTitle;
        }

        return (
            <Container
                data-testid={dataTestIdValue()}
                size={size}
                id={id ?? processTitleAsId}
                ref={ref}
                className={className}
                type={type}
                variant={variant ? variant(ButtonVariants) : ButtonVariants.primary}
                width={width}
                minWidth={minWidth}
                maxWidth={maxWidth}
                minHeight={minHeight}
                marginOffset={marginOffset}
                paddingOffset={paddingOffset}
                hasFullWidth={hasFullWidth}
                smallerOnMobile={smallerOnMobile}
                isLoading={loading}
                clickable={!!onClick}
                disabled={disabled}
                hasPointer={hasPointer}
                onClick={onButtonClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}>
                {title}
                {children}
                {loading && (
                    <Loader
                        color={(c) =>
                            variant &&
                            (variant(ButtonVariants) === ButtonVariants.outline ||
                                variant(ButtonVariants) === ButtonVariants.secondary ||
                                variant(ButtonVariants) === ButtonVariants.link)
                                ? c.primary
                                : c.white
                        }
                    />
                )}
            </Container>
        );
    }
);
