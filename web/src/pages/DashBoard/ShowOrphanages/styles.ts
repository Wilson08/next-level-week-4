import styled from 'styled-components';



export const ShowOrphanagePage = styled.div`
  position: relative;
  left: 96px;
  right: 0;
  top: 0;
  bottom: 0;

  width: calc(100% - 100px);



  display: flex;
  align-items: center;
  justify-content: center;

`;


export const Container = styled.div`
  position: relative;

  width: 100%;
  width: 100%;
  max-width: 1100px;
  
  margin: 0 auto;

  height: 100%;
  max-height: 680px;
`;



export const MapContainer = styled.div`

  width: 48%;
   @media (max-width:840px){
      
    width: 90%;
  }

`;