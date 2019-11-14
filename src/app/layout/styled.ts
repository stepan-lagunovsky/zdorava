import styled from 'styled-components';

export const AppContent = styled.div`
  overflow: hidden;
  display: grid;
  width: 100%;
  min-height: 100vh;
  grid-template-columns: minmax(320px, 1fr);
  grid-template-rows: min-content;
`;