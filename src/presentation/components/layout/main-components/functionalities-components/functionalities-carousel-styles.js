import styled from 'styled-components';

export const Main = styled.main``;

export const HorizontalSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  border: 1px solid red;
`;

export const BumperSection = styled.section`
  text-align: center;
  padding: 128px 16px;
  background-color: #efefef;
`;

export const CardsContainer = styled.div`
  position: relative;
  height: 100%;
  padding: 0 0 0 150px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

export const SampleCard = styled.div`
  position: relative;
  height: 300px;
  width: 800px;
  background-color: #111f30;
  margin-right: 75px;
  flex-shrink: 0;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const CardImage = styled.img`
  max-width: 100%;
  max-height: 60%;
  object-fit: cover;
  margin-bottom: 16px;
`;

export const CardText = styled.p`
  font-size: 18px;
`;