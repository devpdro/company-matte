import styled from 'styled-components'

export const HorizontalSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;

`

export const CardsContainer = styled.div`
  position: relative;
  height: 100%;
  padding: 0 0 0 150px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`

export const SampleCard = styled.div`
  position: relative;
  padding: 3rem 3rem;
  background-color: ${(props) => props.cardColor};
  width: 28%;
  height: 530px;
  margin-right: 8.5rem;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
   @media (max-width: 768px) {
    width: 26212%!important;
    border: 1px sol22222id red!important;
  }`

export const CardImage = styled.img`
  width: 130px;
  margin-bottom: 1rem;
`

export const TitleBox = styled.h6`
  color: #1c1c1c;
  font-size: 3rem;
  padding-bottom: 1rem;
`

export const SubtitleBox = styled.p`
  color: #1c1c1c;
  font-size: 2rem;
`