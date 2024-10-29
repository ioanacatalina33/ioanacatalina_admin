import styled, { css } from 'styled-components';

import { ButtonVariants, ButtonStyleProps, BUTTON_SIZE_PROP, ButtonSize } from './Button';
import { FontWeights, getTypographyCSS } from 'UI/Typography/Typography';
import { Colors } from 'environment/Colors';
import { generateSpacingOffsets } from 'utils/cssGenerators';
import { MediaQueries } from 'environment/Sizes';

interface Props extends ButtonStyleProps {
    variant: string;
    clickable: boolean;
    isLoading?: boolean;
}

export const Container = styled.button.attrs<Props>(() => ({
    className: 'textRegular'
}))<Props>`
    ${({
        size = ButtonSize.Regular,
        variant,
        width,
        minWidth,
        maxWidth,
        minHeight,
        marginOffset,
        paddingOffset,
        hasFullWidth,
        isLoading,
        disabled,
        clickable,
        smallerOnMobile,
        hasPointer
    }) => css`
		/* TYPOGRAPHY SETTER */
		${getTypographyCSS((t) => t.Paragraph)}
		font-weight: ${FontWeights.medium};

		/* SETTERS */
		padding: ${BUTTON_SIZE_PROP[size as ButtonSize].paddingTop}rem ${
            BUTTON_SIZE_PROP[size as ButtonSize].paddingLeft
        }rem;
		/* minHeight prop overrides button size props */
		min-width: ${BUTTON_SIZE_PROP[size as ButtonSize].minWidth}rem;
		min-height: ${BUTTON_SIZE_PROP[size as ButtonSize].height ?? minHeight}rem;
		font-size: ${BUTTON_SIZE_PROP[size as ButtonSize].fontSize}rem;;
		height: ${BUTTON_SIZE_PROP[size as ButtonSize].height}rem;

		transition: opacity 0.1s, background-color 0.1s;
		cursor: ${clickable || hasPointer ? 'pointer' : 'default'};
		border-radius: 0.4rem;

		/* LOADING SPINNER */
		position: relative;
		/* MAKE THE LOADING SPINNER CENTERED */
		> div {
			position: absolute;
			/* 
				KEEP FOR SAFARI SUPPORT AS WELL
				'inset: 0;' does not work
			*/
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
		}

		/* RESETTERS */
		border: none;
		user-select: none;
		text-decoration: none;
		
		&:focus {
			outline: none;
			box-shadow: none;
			outline: -webkit-focus-ring-color auto 0px;
		}

		/* 
			=============
			BUTTON TYPES
			=============
		*/

		/* PRIMARY */
		${
            variant === ButtonVariants.primary &&
            css`
                color: ${Colors.white};
                background-color: ${Colors.primary.normal};

                :hover {
                    background-color: ${Colors.primary.hover};
                }

                ${disabled &&
                css`
                    color: ${Colors.text.disabled};
                    background-color: ${Colors.background.disabled};
                `}
            `
        }

		/* SECONDARY */
		${
            variant === ButtonVariants.secondary &&
            css`
                color: ${Colors.text.main};
                background-color: ${Colors.background.disabled};

                :hover {
                    color: ${Colors.primary.normal};
                }

                ${disabled &&
                css`
                    color: ${Colors.text.disabled};
                    background-color: transparent;
                `}
            `
        }

		/* OUTLINE */
		${
            variant === ButtonVariants.outline &&
            css`
                color: ${Colors.primary.normal};
                border: 1px solid ${Colors.primary.normal};
                background-color: ${Colors.transparent};
                /* 
					SINCE BORDER INCREASES THE HEIGHT WITH 2PX
					WE NEED TO DECREASE THE INNER PADDING WITH 2PX - 0.7REM Y-AXIS
					SO THE HEIGHT OF THE BUTTON REMAINS THE SAME
				*/
                padding: 0.7rem 1.6rem;

                :hover {
                    color: ${Colors.primary.hover};
                    border: 1px solid ${Colors.primary.hover};
                    background-color: ${Colors.primary.disabled};
                }

                ${disabled &&
                css`
                    color: ${Colors.text.disabled};
                    border: 1px solid ${Colors.text.disabled};
                `}
            `
        }

			
		/* WARNING */
		${
            variant === ButtonVariants.warning &&
            css`
                color: ${Colors.white};
                background-color: ${Colors.text.error};

                :hover {
                    background-color: ${Colors.text.errorHover};
                }

                ${disabled &&
                css`
                    background-color: ${Colors.background.disabled};
                    color: ${Colors.text.disabled};
                `}
            `
        }

			/* DANGER LINK */
			${
                variant === ButtonVariants.link &&
                css`
                    color: ${Colors.primary.normal};
                    background-color: unset;
                    min-width: ${minWidth ?? 0}rem;
                    padding: 0 0.5rem;
                    min-height: unset;

                    ${disabled &&
                    css`
                        color: ${Colors.text.disabled};
                    `}
                `
            }

				

		${
            width !== undefined &&
            css`
                width: ${width}rem;
            `
        }

		${
            maxWidth !== undefined &&
            css`
                max-width: ${maxWidth}rem;
            `
        }

		${
            hasFullWidth &&
            css`
                width: 100%;
            `
        }

		/* SPACING OFFSETS */
		${generateSpacingOffsets({ paddingOffset, marginOffset })}

		${
            disabled &&
            css`
                pointer-events: none;
            `
        }

		${
            isLoading &&
            css`
                color: transparent !important;
            `
        };

		${
            smallerOnMobile &&
            css`
                @media ${MediaQueries.maxWidth.md} {
                    font-size: 1.4rem;
                }
                @media ${MediaQueries.maxWidth.sm} {
                    font-size: 1.2rem;
                }
            `
        }
	}
	`}
`;
