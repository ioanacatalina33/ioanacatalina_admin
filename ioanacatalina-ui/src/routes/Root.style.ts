import styled from 'styled-components';
import { Colors } from 'environment/Colors';
import { MediaQueries, Sizes } from 'environment/Sizes';

export const RootBody = styled.div`
    background-color: ${Colors.background.normal};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
`;

export const RootWrapper = styled.div`
    padding-top: 2rem;
    padding-bottom: 2rem;
    width: 100%;

    @media (${MediaQueries.minWidth.lg}) {
        max-width: ${Sizes.lg};
    }
`;
