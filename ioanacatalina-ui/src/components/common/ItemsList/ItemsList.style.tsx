import { Colors } from 'environment/Colors';
import styled from 'styled-components';

export const ListComponent = styled.div`
    background-color: ${Colors.background.hover};
    flex-direction: column;
    max-height: 80vh;
    width: 50rem;
    border-radius: 0.5rem;
    overflow-y: auto;
    padding: 2rem;
`;
