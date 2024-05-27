import styled from 'styled-components';

const Loading = styled.div`
    border-color: var(--colors-primary);
    border-style: solid;
    border-width: 4px;
    border-radius: 9999px;
    animation: spin 1s linear infinite;
    width: 6rem;
    height: 6rem;
    border-top-color: transparent;
`;

export default Loading;
