import { Colors } from 'environment/Colors';
import styled from 'styled-components';

export const ListComponent = styled.div`
    background-color: ${Colors.background.hover};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-height: 70vh;
    width: 30rem;
    border-radius: 0.5rem;
`;
